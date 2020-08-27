import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Accordion,
  Card,
  ListGroup,
  Button,
  Popover,
  OverlayTrigger,
} from 'react-bootstrap';
import { BsCheck, BsCheckBox, BsSquare } from 'react-icons/bs';
import queryString from 'query-string';

import FormData from './widgets/questions';
import ResultsData from './widgets/results';

import './assets/css/index.scss';

const parseQS = queryString.parse(window.location.search);

let csAnswers;
let csAutoAnswer = false;

if (parseQS['CS-ANSWERS']) {
  csAnswers = JSON.parse(parseQS['CS-ANSWERS']);
}
if (parseQS['CS-AUTO-ANSWERS']) {
  csAutoAnswer = true;
}

const getScoreLabel = (score) =>
  score >= 75
    ? 'Optimized'
    : score >= 50
    ? 'Managed'
    : score >= 25
    ? 'Basic'
    : 'Adhoc';

const popover = ({ area, label }) => (
  <Popover id={`popover-${area}-${label}`} className="cs-popover">
    <Popover.Title as="h3">
      <strong>{area}:</strong> {label}
    </Popover.Title>
    <Popover.Content>{ResultsData[area][label]}</Popover.Content>
  </Popover>
);

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
  const [showChart, setShowChart] = useState(false);
  const [answers, setAnswers] = useState(csAnswers || makeAnswers(FormData));
  const [scores, setScores] = useState({});
  const [viewQuestion, setViewQuestion] = useState(makeViewQuestions(FormData));
  const [viewArea, setViewArea] = useState(Object.keys(FormData)[0]);
  const ref = useRef(null);

  const setViewingQuestion = (area, index) => {
    const newViewQuestion = { ...viewQuestion };
    newViewQuestion[area] = index;
    setViewQuestion(newViewQuestion);
  };

  const answered = (questionArea, questionIndex, score) => {
    const newAnswers = { ...answers };
    const allAreas = Object.keys(newAnswers);

    newAnswers[questionArea][questionIndex] = score;

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
    } else {
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

  return (
    <>
      <Container className="px-0 my-5" ref={ref} id="cs-widget-chart">
        {!showChart ? (
          <Row>
            <Col>
              <Tab.Container activeKey={viewArea}>
                <Row>
                  <Col md={3} className="d-none d-md-block">
                    <Nav variant="pills" className="flex-column">
                      {Object.keys(FormData).map((area) => (
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
                      className="d-flex d-md-none survery-top-nav"
                      xs="2"
                      sm="4"
                    >
                      {Object.keys(FormData).map((area) => (
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
                      {Object.keys(FormData).map((area) => (
                        <Tab.Pane
                          eventKey={area}
                          key={`tabpane:${area}`}
                          className={area}
                        >
                          <Accordion
                            activeKey={`question:${area}:${viewQuestion[area]}`}
                          >
                            {FormData[area].questions.map(
                              (question, questionsIndex) => (
                                <Card
                                  key={`question:${area}:${questionsIndex.toString()}`}
                                >
                                  <Accordion.Toggle
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
                                    <Card.Body>
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
          <>
            <Row className="flex-shrink-1">
              <Col className="text-center mb-5">
                <h2>The results are in!</h2>
                <p>
                  Hover over each category to see how you scored. Ready to
                  improve?
                </p>
                <Button
                  size="lg"
                  className="button-getintouch mr-5"
                  onClick={() => {
                    window.location.href = `/contact?formAnswers=${encodeURIComponent(
                      `${window.location.protocol}//${window.location.host}${
                        window.location.pathname
                      }?CS-ANSWERS=${encodeURIComponent(
                        JSON.stringify(answers)
                      )}`
                    )}`;
                  }}
                >
                  Get in Touch
                </Button>
                <Button
                  size="lg"
                  className="button-getintouch-outline"
                  onClick={() => setShowChart(false)}
                >
                  Change my Answers
                </Button>
              </Col>
            </Row>
            <Row className="flex-grow-1" style={{ minHeight: '500px' }}>
              <Col md="3" lg="2" className="d-md-flex pr-0 d-none">
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
              <Col md="9" lg="10" className="graph d-flex flex-column pl-0">
                <Row
                  className="border-bottom border-left flex-grow-1"
                  noGutters
                >
                  {Object.keys(FormData).map((area) => (
                    <Col
                      key={`bar:${area}`}
                      className="graph-bar text-center align-items-end d-flex px-2"
                    >
                      <OverlayTrigger
                        container={ref.current}
                        placement="auto"
                        overlay={popover({
                          area,
                          label: getScoreLabel(scores[area]),
                        })}
                      >
                        <div
                          className={`w-100 bar ${area} text-center text-white p-3`}
                          style={{ height: `${scores[area]}%` }}
                        >
                          <small className="d-block">
                            <strong>{getScoreLabel(scores[area])}</strong>
                          </small>
                          <div className="d-md-none">
                            {getScoreLabel(scores[area]) === 'Optimized' ? (
                              <small>
                                Highly Efficient, Digital, Agile, Integrated
                                &amp; Continual
                              </small>
                            ) : null}
                            {getScoreLabel(scores[area]) === 'Managed' ? (
                              <small>
                                Effective, Accurate, Centralized, Adjustable
                                &amp; Periodic
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
                      </OverlayTrigger>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
            <Row className="flex-shrink-1">
              <Col md="3" lg="2" className="d-block d-md-flex" />
              <Col md="9" lg="10" className="graph pl-0">
                <Row>
                  {Object.keys(FormData).map((area) => (
                    <Col
                      key={`bar:${area}`}
                      className="graph-bar bar-title text-center mt-2"
                    >
                      {area}
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
}

export default App;
