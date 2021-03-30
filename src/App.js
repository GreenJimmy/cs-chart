import React, { useState, useEffect, useRef } from 'react';
import {
  Row,
  Col,
  Tab,
  Nav,
  Accordion,
  Card,
  ListGroup,
  Button,
  Form,
  Spinner,
} from 'react-bootstrap';
import {
  BsCheck,
  BsCheckBox,
  BsSquare,
  BsFillInfoCircleFill,
} from 'react-icons/bs';
import queryString from 'query-string';

import { PDFDocument } from 'pdf-lib';

import spbQuestions from './questions-spb';
import spbRecommendations from './recommendations-spb';
import mwmQuestions from './questions-mwm';
import mwmRecommendations from './recommendations-mwm';

const assetBase =
  typeof window !== 'undefined' && window.ENVIRONMENT === 'production'
    ? 'https://capabilitysource.com'
    : '';

const parseQS = queryString.parse(
  typeof window !== 'undefined' ? window.location.search : ''
);

let csAnswers;
let csAutoAnswer = false;
const csFormType = process.env.CS_FORM || 'spb';

if (parseQS['CS-ANSWERS']) {
  csAnswers = JSON.parse(parseQS['CS-ANSWERS']);
}
if (parseQS['CS-AUTO-ANSWERS']) {
  csAutoAnswer = true;
}

const csAgreed =
  typeof window !== 'undefined' && window.CS_AGREED ? window.CS_AGREED : false;

const validateEmail = (email) => {
  // eslint-disable-next-line no-control-regex
  const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

  return expression.test(String(email).toLowerCase());
};

const getScoreLabel = (score) =>
  score > 75
    ? 'Optimized'
    : score > 50
    ? 'Managed'
    : score > 25
    ? 'Basic'
    : 'Adhoc';

const alertUser = async (formType, toObj, ResultsPDF) => {
  await fetch('https://mandrillapp.com/api/1.0/messages/send-template.json', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({
      key: '6SVyLcjG9Lt6Ff_UD_1JuA',
      template_name:
        formType === 'spb'
          ? 'spb-readiness-calculator'
          : 'mwm-benchmark-calculator',
      template_content: [
        {
          name: 'example name',
          content: 'example content',
        },
      ],
      message: {
        to: [
          {
            email: toObj.email,
            name: toObj.name,
            type: 'to',
          },
        ],
        attachments: [
          {
            type: 'application/pdf',
            name: `cs-${formType}-results.pdf`,
            content: ResultsPDF,
          },
        ],
      },
    }), // body data type must match "Content-Type" header
  });

  return true;
};

const alertCS = async (toObj, link) => {
  await fetch('https://mandrillapp.com/api/1.0/messages/send-template.json', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({
      key: '6SVyLcjG9Lt6Ff_UD_1JuA',
      template_name: 'notify-survey-taken',
      template_content: [
        {
          name: 'example name',
          content: 'example content',
        },
      ],
      message: {
        to: [
          {
            email: 'solutions@capabilitysource.com',
            name: 'CapabilitySource',
            type: 'to',
          },
        ],
        global_merge_vars: [
          {
            name: 'SUBMITTED_NAME',
            content: toObj.name,
          },
          {
            name: 'SUBMITTED_EMAIL',
            content: toObj.email,
          },
          {
            name: 'SURVEY_LINK',
            content: link,
          },
        ],
      },
    }), // body data type must match "Content-Type" header
  });

  return true;
};

const createPdf = async (formType, info, link, surveyScores) => {
  const ratio = 0.24;

  await Promise.all([
    fetch(`${assetBase}/static/pdf-${formType}/first-page.pdf`),
    fetch(
      `${assetBase}/static/pdf-${formType}/people-${getScoreLabel(
        surveyScores.People
      ).toLowerCase()}.pdf`
    ),
    fetch(
      `${assetBase}/static/pdf-${formType}/process-${getScoreLabel(
        surveyScores.Process
      ).toLowerCase()}.pdf`
    ),
    fetch(
      `${assetBase}/static/pdf-${formType}/technology-${getScoreLabel(
        surveyScores.Technology
      ).toLowerCase()}.pdf`
    ),
    fetch(
      `${assetBase}/static/pdf-${formType}/information-${getScoreLabel(
        surveyScores.Information
      ).toLowerCase()}.pdf`
    ),
    fetch(`${assetBase}/static/pdf-${formType}/last-page.pdf`),
    fetch(
      `${assetBase}/static/pdf-common/people-${getScoreLabel(
        surveyScores.People
      ).toLowerCase()}.png`
    ),
    fetch(
      `${assetBase}/static/pdf-common/process-${getScoreLabel(
        surveyScores.Process
      ).toLowerCase()}.png`
    ),
    fetch(
      `${assetBase}/static/pdf-common/technology-${getScoreLabel(
        surveyScores.Technology
      ).toLowerCase()}.png`
    ),
    fetch(
      `${assetBase}/static/pdf-common/information-${getScoreLabel(
        surveyScores.Information
      ).toLowerCase()}.png`
    ),
  ])
    .then((responses) =>
      // Get a JSON object from each of the responses
      Promise.all(responses.map((response) => response.arrayBuffer()))
    )
    .then(async (data) => {
      const returnPdf = await PDFDocument.create();

      const firstPage = await returnPdf.copyPages(
        await PDFDocument.load(data[0]),
        [0]
      );
      const peoplePage = await returnPdf.copyPages(
        await PDFDocument.load(data[1]),
        [0]
      );
      const processPage = await returnPdf.copyPages(
        await PDFDocument.load(data[2]),
        [0]
      );
      const technologyPage = await returnPdf.copyPages(
        await PDFDocument.load(data[3]),
        [0]
      );
      const informationPage = await returnPdf.copyPages(
        await PDFDocument.load(data[4]),
        [0]
      );
      const lastPage = await returnPdf.copyPages(
        await PDFDocument.load(data[5]),
        [0]
      );

      returnPdf.addPage(firstPage[0]);
      returnPdf.addPage(peoplePage[0]);
      returnPdf.addPage(processPage[0]);
      returnPdf.addPage(technologyPage[0]);
      returnPdf.addPage(informationPage[0]);
      returnPdf.addPage(lastPage[0]);

      const peopleBar = await returnPdf.embedPng(data[6]);
      const processBar = await returnPdf.embedPng(data[7]);
      const technologyBar = await returnPdf.embedPng(data[8]);
      const informationBar = await returnPdf.embedPng(data[9]);

      returnPdf.getPage(0).drawImage(peopleBar, {
        x: 1650 * ratio,
        y: 2469 * ratio,
        width: 424 * ratio,
        height: 1200 * ratio,
      });
      returnPdf.getPage(0).drawImage(processBar, {
        x: 2249 * ratio,
        y: 2469 * ratio,
        width: 424 * ratio,
        height: 1200 * ratio,
      });
      returnPdf.getPage(0).drawImage(technologyBar, {
        x: 2840 * ratio,
        y: 2469 * ratio,
        width: 424 * ratio,
        height: 1200 * ratio,
      });
      returnPdf.getPage(0).drawImage(informationBar, {
        x: 3438 * ratio,
        y: 2469 * ratio,
        width: 424 * ratio,
        height: 1200 * ratio,
      });

      const base64Pdf = await returnPdf.saveAsBase64();

      // const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      // const invisAnchor = document.createElement('a');
      // invisAnchor.href = window.URL.createObjectURL(blob);
      // invisAnchor.download = 'SPB-Results.pdf';
      // invisAnchor.click();

      await alertCS(info, link);
      await alertUser(formType, info, base64Pdf);

      return true;
    })
    .catch(() => {
      // console.error(error)
    });

  return true;
};

const makeAnswers = (Data) => {
  const results = {};
  Object.keys(Data).map((area) => {
    results[area] = Array.from(Array(Data[area].questions.length), () =>
      csAutoAnswer ? Math.floor(Math.random() * 4) + 1 : 0
    );

    return null;
  });

  return results;
};

const makeViewQuestions = (Data) => {
  const results = {};
  Object.keys(Data).map((key) => {
    results[key] = 0;

    return null;
  });

  return results;
};

function App() {
  const formType = csFormType;

  const seenChart = useRef(false);
  const selectedAnswer = useRef(false);
  const formEmail = useRef();
  const formName = useRef();

  const Questions = formType === 'spb' ? spbQuestions : mwmQuestions;
  const Recommendations =
    formType === 'spb' ? spbRecommendations : mwmRecommendations;

  const [agreed, setAgreed] = useState(csAgreed);
  const [showFormError, setShowFormError] = useState(false);
  const [allAgreement, setAllAgreement] = useState(false);
  const [showChart, setShowChart] = useState(false);
  const [showGetPdf, setShowGetPdf] = useState(false);
  const [sendingPdf, setSendingPdf] = useState(false);
  const [scores, setScores] = useState({});
  const [viewResult, setViewResult] = useState();

  const [answers, setAnswers] = useState(csAnswers || makeAnswers(Questions));
  const [viewQuestion, setViewQuestion] = useState(
    makeViewQuestions(Questions)
  );
  const [viewArea, setViewArea] = useState(Object.keys(Questions)[0]);

  const ref = useRef(null);
  const loaded = useRef();

  const getContactClick = () => {
    const FormAnswers = `${window.location.protocol}//${window.location.host}${
      window.location.pathname
    }?CS-ANSWERS=${encodeURIComponent(JSON.stringify(answers))}`;

    return FormAnswers;
  };

  const turnOffResult = () => {
    if (viewResult) {
      setViewResult(null);
    }
  };

  useEffect(() => {
    window.addEventListener('click', turnOffResult);

    return function cleanup() {
      window.removeEventListener('click', turnOffResult);
    };
  });

  const setViewingQuestion = (area, index) => {
    const newViewQuestion = { ...viewQuestion };
    newViewQuestion[area] = index;
    setViewQuestion(newViewQuestion);
  };

  const answered = (questionArea, questionIndex, score) => {
    const newAnswers = { ...answers };
    const allAreas = Object.keys(newAnswers);
    newAnswers[questionArea][questionIndex] = score;
    selectedAnswer.current = true;

    const areaUnanswered = (area) =>
      Math.max(
        newAnswers[area].indexOf(0),
        newAnswers[area]
          .slice(viewQuestion[area] + (area === questionArea ? 1 : 0))
          .indexOf(0) > -1
          ? newAnswers[area]
              .slice(viewQuestion[area] + (area === questionArea ? 1 : 0))
              .indexOf(0) +
              viewQuestion[area] +
              (area === questionArea ? 1 : 0)
          : -1
      );

    const firstUnansweredQuestionByArea = allAreas.map((area) =>
      areaUnanswered(area)
    );

    const unansweredAreas = firstUnansweredQuestionByArea.map((thisAnswer) =>
      thisAnswer > -1 ? 1 : 0
    );

    const goToArea = Math.max(
      unansweredAreas.indexOf(1),
      unansweredAreas.slice(allAreas.indexOf(questionArea)).indexOf(1) > -1
        ? unansweredAreas.slice(allAreas.indexOf(questionArea)).indexOf(1) +
            allAreas.indexOf(questionArea)
        : -1
    );

    if (goToArea > -1) {
      setViewArea(allAreas[goToArea]);
      setViewingQuestion(
        allAreas[goToArea],
        areaUnanswered(allAreas[goToArea])
      );
      setTimeout(() => {
        const showQuestion =
          typeof document !== 'undefined'
            ? document.getElementById(
                `question:${goToArea}:${areaUnanswered(allAreas[goToArea])}`
              )
            : null;

        if (showQuestion && loaded.current && typeof document !== 'undefined') {
          document
            .getElementById(
              `question:${goToArea}:${areaUnanswered(allAreas[goToArea])}`
            )
            .scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        loaded.current = true;
      }, 500);
    } else if (!seenChart.current) {
      seenChart.current = true;
      setShowChart(true);
    }

    setAnswers(newAnswers);
  };

  const areaComplete = (area) => {
    let completed = 0;

    answers[area].map((score) => {
      completed += score > 0 ? 1 : 0;

      return null;
    });

    return completed >= 4;
  };

  const canViewChart = () => {
    let passCount = 0;
    Object.keys(answers).map((area) => {
      passCount += areaComplete(area) ? 1 : 0;

      return null;
    });

    return passCount === Object.keys(answers).length;
  };

  useEffect(() => {
    const newScores = {};

    const getScore = (area) => {
      const areaAnswers = answers[area];
      let thisAnswered = 0;
      let totalScore = 0;

      areaAnswers.map((score) => {
        totalScore += score;
        thisAnswered += score > 0 ? 1 : 0;

        return null;
      });

      return Math.round(
        totalScore > 0 && thisAnswered > 0
          ? (totalScore / (thisAnswered * 4)) * 100
          : 0
      );
    };

    Object.keys(answers).map((area) => {
      newScores[area] = getScore(area);

      return null;
    });

    setScores(newScores);
  }, [answers]);

  useEffect(() => {
    if (typeof document !== 'undefined' && selectedAnswer.current === true) {
      document
        .getElementById('cs-widget-chart')
        .scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showChart]);

  return (
    <>
      <div ref={ref} id="cs-widget-chart">
        {!agreed ? (
          <Row className="justify-content-center">
            <Col className="text-center">
              <h2 style={{ maxWidth: '600px', margin: '0 auto 1rem auto' }}>
                {formType === 'spb'
                  ? 'Planning Agility Benchmark'
                  : 'Marketing Work Management Benchmark'}
              </h2>
              <p>
                Answer a minimum of 4 questions in each section to view results.
              </p>
              <small className="mb-3 d-block">
                <em>
                  By using the {formType === 'spb' ? 'Readiness' : 'Benchmark'}{' '}
                  Calculator, you agree to the{' '}
                  <a href="#0" onClick={() => setAllAgreement(!allAgreement)}>
                    Terms of Use
                  </a>
                  .
                </em>
              </small>
              {allAgreement ? (
                <div
                  className="p-3 mb-3 border text-left"
                  style={{ height: '200px', overflowY: 'auto' }}
                >
                  <p>
                    Use of the {formType === 'spb' ? 'Readiness' : 'Benchmark'}{' '}
                    Calculator and submission of your data via the online form
                    is voluntary. By using the{' '}
                    {formType === 'spb' ? 'Readiness' : 'Benchmark'} Calculator,
                    you agree to share your data and responses with
                    CapabilitySource. Upon submission of your data,
                    CapabilitySource will generate online content, and a report
                    will be distributed to the email address you provide. In
                    providing an email address you attest to be the owner of the
                    address and agree to receive communications from
                    CapabilitySource at the address.
                  </p>
                  <p>
                    The content on this website is for convenience and
                    information purposes only. Your submission does not create a
                    contract, whether implied or expressed, between you and
                    CapabilitySource or its partners. However, we welcome the
                    opportunity for future discussions regarding ways
                    CapabilitySource can assist you with your marketing
                    strategies. Any information you provide will be considered
                    non-confidential. We will not disclose, sell or rent this
                    information without your express written permission.
                    CapabilitySource does not capture anonymous or demographic
                    analytics data on this website.
                  </p>
                  <p>
                    Should you choose to use a{' '}
                    {formType === 'spb' ? 'Readiness' : 'Benchmark'} Calculator
                    on this website; information collected from you will be used
                    for the purpose of understanding your business needs and
                    responding accordingly. We may contact you via email or
                    phone. You may choose to opt out of future communications at
                    any time by contacting us at
                    <a href="mailto:privacy@capabilitysource.com">
                      privacy@capabilitysource.com
                    </a>
                    .
                  </p>
                </div>
              ) : null}
              <Button
                size="lg"
                className="button-getintouch mx-2 mb-3"
                onClick={() => setAgreed(true)}
              >
                Calculate {formType === 'spb' ? 'Readiness' : 'Benchmark'}
              </Button>
            </Col>
          </Row>
        ) : !showChart ? (
          <Row>
            <Col>
              <Tab.Container activeKey={viewArea}>
                <Row>
                  <Col md={3} className="d-none d-md-block">
                    <Nav variant="pills" className="flex-column">
                      {Object.keys(Questions).map((area) => (
                        <Nav.Item key={`tab:${area}`}>
                          <Nav.Link
                            eventKey={area}
                            className={`${area} d-flex align-items-center`}
                            onClick={() => setViewArea(area)}
                          >
                            {area}
                            <BsCheck
                              size="2rem"
                              className={`ml-auto${
                                !areaComplete(area) ? ' invisible' : ''
                              }`}
                            />
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Button
                      size="lg"
                      className="mt-5 mb-3 button-results"
                      block
                      disabled={!canViewChart()}
                      onClick={() => setShowChart(true)}
                      variant="custom"
                    >
                      VIEW RESULTS
                    </Button>
                    {!canViewChart() ? (
                      <small className="text-center d-block mx-3">
                        Answer a minimum of 4 questions in each section to view
                        results.
                      </small>
                    ) : null}
                  </Col>
                  <Col md={9}>
                    <Row
                      noGutters
                      className="d-flex d-md-none survey-top-nav"
                      xs="2"
                      sm="4"
                    >
                      {Object.keys(Questions).map((area) => (
                        <Col key={`topnav:${area}`}>
                          <Button
                            variant="link"
                            className={`${area} ${
                              area === viewArea ? 'active' : ''
                            } d-flex align-items-center justify-content-center`}
                            onClick={() => setViewArea(area)}
                          >
                            {area}
                            {areaComplete(area) ? (
                              <BsCheck className="ml-2" size="1.5rem" />
                            ) : null}
                          </Button>
                        </Col>
                      ))}
                    </Row>
                    <Tab.Content className="text-left">
                      {Object.keys(Questions).map((area, areaIndex) => (
                        <Tab.Pane
                          eventKey={area}
                          key={`tabpane:${area}`}
                          className={area}
                        >
                          <Accordion
                            activeKey={`question:${area}:${viewQuestion[area]}`}
                          >
                            {Questions[area].questions.map(
                              (question, questionsIndex) => (
                                <Card
                                  key={`question:${area}:${questionsIndex.toString()}`}
                                >
                                  <Accordion.Toggle
                                    id={`question:${areaIndex}:${questionsIndex}`}
                                    as={Card.Header}
                                    eventKey={`question:${area}:${questionsIndex.toString()}`}
                                    className={`d-flex align-items-center${
                                      viewQuestion[area] === questionsIndex
                                        ? ' selected'
                                        : ''
                                    }`}
                                    onClick={() => {
                                      setViewingQuestion(area, questionsIndex);
                                    }}
                                  >
                                    <div className="d-inline-flex">
                                      {answers[area][questionsIndex] > 0 ? (
                                        <BsCheckBox
                                          className="mr-3 checkbox"
                                          size="2rem"
                                        />
                                      ) : (
                                        <BsSquare
                                          size="1.65rem"
                                          style={{
                                            margin: '0 1.15rem 0 .2rem',
                                          }}
                                        />
                                      )}
                                    </div>
                                    <div className="d-inline-flex">
                                      {question.question}
                                    </div>
                                  </Accordion.Toggle>
                                  <Accordion.Collapse
                                    eventKey={`question:${area}:${questionsIndex.toString()}`}
                                  >
                                    <Card.Body className="pl-5">
                                      <ListGroup variant="flush">
                                        {question.answers.map(
                                          (answer, answersIndex) => (
                                            <ListGroup.Item
                                              key={`answer:${area}:${questionsIndex.toString()}:${answersIndex.toString()}`}
                                              className={
                                                answers[area][
                                                  questionsIndex
                                                ] ===
                                                4 - answersIndex
                                                  ? 'selected'
                                                  : ''
                                              }
                                              onClick={() =>
                                                answered(
                                                  area,
                                                  questionsIndex,
                                                  4 - answersIndex
                                                )
                                              }
                                            >
                                              {answer}
                                            </ListGroup.Item>
                                          )
                                        )}
                                      </ListGroup>
                                    </Card.Body>
                                  </Accordion.Collapse>
                                </Card>
                              )
                            )}
                          </Accordion>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
              <Button
                size="lg"
                className="mt-5 mb-3 button-results d-block d-md-none"
                block
                disabled={!canViewChart()}
                onClick={() => setShowChart(true)}
                variant="custom"
              >
                VIEW RESULTS
              </Button>
              {!canViewChart() ? (
                <small className="text-center d-block d-md-none mx-3">
                  Answer a minimum of 4 questions in each section to view
                  results.
                </small>
              ) : null}
            </Col>
          </Row>
        ) : (
          <div className="graph-wrapper">
            {viewResult ? (
              <div
                id="result-content"
                className="area-info d-flex align-items-start"
              >
                <Row className="justify-content-center">
                  <Col md="10" lg="9" xl="8" className="px-0 px-sm-3 text-left">
                    <div
                      className={`result-content border shadow ${viewResult}`}
                    >
                      <div>
                        <h3>
                          <strong>{viewResult}:</strong>{' '}
                          {getScoreLabel(scores[viewResult])}
                        </h3>
                        <button
                          type="button"
                          className="close"
                          onClick={() => setViewResult(null)}
                        >
                          <span aria-hidden="true">×</span>
                          <span className="sr-only">Close</span>
                        </button>
                      </div>
                      {
                        Recommendations[viewResult][
                          getScoreLabel(scores[viewResult])
                        ]
                      }
                    </div>
                  </Col>
                </Row>
              </div>
            ) : null}

            {showGetPdf ? (
              <div
                id="result-content"
                className="area-info d-flex align-items-start"
              >
                <Row className="justify-content-center w-100">
                  <Col md="10" lg="8" xl="6">
                    <div className="result-content border shadow text-center">
                      <button
                        type="button"
                        className="close"
                        style={{
                          position: 'absolute',
                          top: '-2rem',
                          right: '-1rem',
                        }}
                        onClick={() => setShowGetPdf(false)}
                      >
                        <span aria-hidden="true">×</span>
                        <span className="sr-only">Close</span>
                      </button>
                      <h3 className="mb-4">Get Your Results in PDF</h3>
                      <Form.Control
                        type="text"
                        name="Name"
                        className="mb-3"
                        placeholder="Name"
                        ref={formName}
                        disabled={sendingPdf}
                      />
                      <Form.Control
                        type="text"
                        name="Email"
                        className="mb-3"
                        placeholder="Email"
                        ref={formEmail}
                        disabled={sendingPdf}
                      />
                      {showFormError ? (
                        <p className="text-danger my-3">
                          Please submit a valid email address.
                        </p>
                      ) : null}
                      <Button
                        size="lg"
                        className="button-getintouch mx-2 mx-auto"
                        onClick={async () => {
                          const name = formName.current.value;
                          const email = formEmail.current.value;

                          if (!validateEmail(email)) {
                            setShowFormError(true);
                          } else {
                            setShowFormError(false);
                            setSendingPdf(true);
                            await createPdf(
                              formType,
                              {
                                email,
                                name,
                              },
                              getContactClick(),
                              scores
                            );
                            if (typeof window !== 'undefined') {
                              window.setTimeout(() => {
                                setShowGetPdf(false);
                                sendingPdf(false);
                              }, 200);
                            }
                          }
                        }}
                        disabled={sendingPdf}
                      >
                        {sendingPdf ? (
                          <Spinner
                            as="span"
                            animation="border"
                            size="lg"
                            role="status"
                            aria-hidden="true"
                          />
                        ) : (
                          'Submit'
                        )}
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            ) : null}

            <Row className="flex-shrink-1">
              <Col className="text-center">
                <h2>The results are in!</h2>
                <p>
                  Click each category to see how you scored. Ready to improve?
                </p>
                <Button
                  size="lg"
                  className="button-getintouch mx-2 mb-3"
                  onClick={() => setShowGetPdf(true)}
                >
                  Get Results
                </Button>
                <Button
                  size="lg"
                  className="button-getintouch-outline mx-2 mb-3"
                  onClick={() => setShowChart(false)}
                >
                  Change my Answers
                </Button>
              </Col>
            </Row>
            <Row className="flex-grow-1 mt-3" style={{ minHeight: '500px' }}>
              <Col md="3" lg="2" className="d-md-flex pr-0 d-none border-right">
                <Row className="flex-grow-1">
                  <Col className="d-flex flex-column">
                    <ul className="yAxis p-0 m-0 d-flex flex-column flex-grow-1 align-items-stretch">
                      <li className="d-flex flex-grow-1 align-items-center">
                        <small className="text-right pr-3">
                          Highly Efficient, Digital, Agile, Integrated &amp;
                          Continual
                        </small>
                      </li>
                      <li className="d-flex flex-grow-1 align-items-center">
                        <small className="text-right pr-3">
                          Effective, Accurate, Centralized, Adjustable &amp;
                          Periodic
                        </small>
                      </li>
                      <li className="d-flex flex-grow-1 align-items-center">
                        <small className="text-right pr-3">
                          Manual, Burdensome, Occasional, Isolated &amp;
                          Document Centric
                        </small>
                      </li>
                      <li className="d-flex flex-grow-1 align-items-center">
                        <small className="text-right pr-3">
                          Inefficient, Fragmented, Isolated, Inflexible &amp;
                          Chaotic
                        </small>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col
                md="9"
                lg="10"
                className="graph d-flex flex-column pl-0 pr-0 pr-md-3"
              >
                <Row className="border-bottom flex-grow-1" noGutters>
                  {Object.keys(Questions).map((area) => (
                    <Col
                      key={`bar:${area}`}
                      className="graph-bar text-center align-items-end d-flex"
                    >
                      <div
                        role="button"
                        tabIndex="0"
                        onClick={() => {
                          setViewResult(area);
                          window.setTimeout(() => {
                            if (typeof document !== 'undefined') {
                              document
                                .getElementById('cs-widget-chart')
                                .scrollIntoView({
                                  behavior: 'smooth',
                                  block: 'start',
                                });
                            }
                          }, 250);
                        }}
                        onKeyPress={() => setViewResult(area)}
                        className={`w-100 bar ${area} text-center text-white`}
                        style={{ height: `${scores[area]}%` }}
                      >
                        <small className="d-block">
                          <strong>{getScoreLabel(scores[area])}</strong>
                        </small>
                        <Button
                          size="sm"
                          variant="outline-light"
                          className="my-3 more-info d-flex align-items-center mx-auto"
                        >
                          More Info
                          <BsFillInfoCircleFill className="ml-2" />
                        </Button>
                        <div className="d-md-none">
                          {getScoreLabel(scores[area]) === 'Optimized' ? (
                            <small>
                              Highly Efficient, Digital, Agile, Integrated &amp;
                              Continual
                            </small>
                          ) : null}
                          {getScoreLabel(scores[area]) === 'Managed' ? (
                            <small>
                              Effective, Accurate, Centralized, Adjustable &amp;
                              Periodic
                            </small>
                          ) : null}
                          {getScoreLabel(scores[area]) === 'Basic' ? (
                            <small>
                              Manual, Burdensome, Occasional, Isolated &amp;
                              Document Centric
                            </small>
                          ) : null}
                          {getScoreLabel(scores[area]) === 'Adhoc' ? (
                            <small>
                              Inefficient, Fragmented, Isolated, Inflexible
                              &amp; Chaotic
                            </small>
                          ) : null}
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
            <Row className="flex-shrink-1">
              <Col md="3" lg="2" className="d-block d-md-flex" />
              <Col md="9" lg="10" className="graph pl-0  pr-0 pr-md-3">
                <Row noGutters>
                  {Object.keys(Questions).map((area) => (
                    <Col
                      key={`bar:${area}`}
                      className="graph-bar bar-title text-center mt-2 pr-0"
                    >
                      <small>{area}</small>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
