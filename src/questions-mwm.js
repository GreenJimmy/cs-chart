const FormData = {
  People: {
    questions: [
      {
        question:
          'How do internal and external workers know what they are supposed to do?',
        answers: [
          'Formal education is provided through structured classes and university-style curriculum.',
          'Role-based training and job aids are commonly used to learn how to work',
          'Mentoring and on-the-job training are the primary ways of learning.',
          'New workers are forced to figure things out on their own.',
          'No Answer',
        ],
      },
      {
        question:
          'How do internal and external workers communicate with each other and exchange knowledge and work?',
        answers: [
          'Unified and integrated digital collaboration tools and methods are used with and between internal and external workers.',
          'Internal collaboration and workflow techniques are unified but different methods are used for external workers.',
          'Both internal and external workers communicate primarily through disconnected chat, email and document uploads.',
          'Internal and external workers communicate primarily through phone calls, email or in other ways that are not tracked or linked.',
          'No Answer',
        ],
      },
      {
        question:
          'How are marketing responsibilities assigned across internal and external teams?',
        answers: [
          'Most work is assigned to internal workers, with some  types of work occasionally assigned to specialized external agencies.',
          'Strategic and most tactical work is assigned to internal workers with some tactical work passed to external agencies.',
          'Many types of work are commonly passed to external agencies.',
          'Virtually all strategic and tactical work is passed to external agencies.',
          'No Answer',
        ],
      },
      {
        question: 'How do marketing teams operate and make decisions?',
        answers: [
          'Centralized, functionally-aligned teams assemble in agile pods and leverage agile methods in planning and execution activities.',
          'Partially centralized teams provide shared services and leverage agile methods in some execution activities.',
          'Decentralized teams leverage some centralized shared services and use traditional, non-agile methods in execution activities.',
          'Decentralized, regional, product or brand aligned teams function independently and in isolation with no use of agile methods.',
          'No Answer',
        ],
      },
      {
        question:
          'How much authority does marketing leadership have over marketing concerns?',
        answers: [
          'Marketing leadership is responsible for all aspects of planning, execution, quality, budgeting, innovation, technology and performance measurement.',
          'Marketing leadership has considerable input into planning, execution, quality, budgeting, innovation, technology and performance measurement.',
          'Marketing leadership shares responsibility for planning, execution, quality, budgeting, innovation, technology and performance measurement.',
          'Marketing leadership has little input into planning, execution, quality, budgeting, innovation, technology and performance measurement.',
          'No Answer',
        ],
      },
      {
        question: 'How is marketing capacity managed and used?',
        answers: [
          'Internal and external capacity is known and actively managed to meet future demand.',
          'Some internal capacity is known and used in planning activities.',
          'Capacity is estimated but is not commonly known or used in decision-making.',
          'Capacity is unknown.',
          'No Answer',
        ],
      },
    ],
  },
  Process: {
    questions: [
      {
        question:
          'How is work aligned with internal and external stakeholder interests?',
        answers: [
          'Using planning scenarios and goals that continuously link strategy to execution, and stakeholders actively and continually engage to guide priorities.',
          'Strategy is created, documented and linked to execution annually, and stakeholders adjust priorities quarterly.',
          'Strategy is created, documented and linked to execution annually, and stakeholders set priorities in the annual cycle.',
          'Strategy and execution are not linked together and often do not reflect the priorities of stakeholders.',
          'No Answer',
        ],
      },
      {
        question: 'How is work  predictable, repeatable and consistent?',
        answers: [
          'All categories of projects are predefined and benchmarked at the task level and requests are automatically mapped into them.',
          'Projects are used to track the activities needed to complete a set of related jobs (e.g. campaign) but templates are not used and requests are not mapped into them.',
          'Jobs are created to track tasks and status but the relationships between them are unknown and they are not linked to job requests.',
          'Activities are tracked in spreadsheets or emails but no standard and automated  project or job tracking system exists.',
          'No Answer',
        ],
      },
      {
        question: 'How are objectives set and linked from top to bottom?',
        answers: [
          'Strategies are tied to initiatives using OKR style goals, measures and planned activities.',
          'Objectives are defined in strategies and used to guide annual program plans and project-level goals and priorities.',
          'Objectives are defined in strategies and used to guide annual program plans but are not cascaded to projects.',
          'Objectives may exist in strategies but are not cascaded to programs or projects.',
          'No Answer',
        ],
      },
      {
        question: 'How are policies, rules and compliance enforced?',
        answers: [
          'Policies, rules, compliance activities and risk mitigation happen automatically during normal project activities, preventing rework.',
          'Policies, rules and compliance are evaluated during approval activities and initiated automatically in the approval stage, occasionally initiating rework.',
          'Policies, rules and compliance are evaluated during approval activities by manual submission to the Compliance team. Rework is common. ',
          'Policies, rules and compliance are occasionally evaluated but tracking is sporadic and audit is difficult. No system of record for marketing compliance exists.',
          'No Answer',
        ],
      },
      {
        question: 'How is performance measured and used?',
        answers: [
          'Performance includes financial efficiency and effectiveness measures and is actively used during initiative execution to adjust and improve future marketing initiatives.',
          'Performance includes financial efficiency and effectiveness measures and is used after initiatives are complete to determine if goals were met and to improve future initiatives.',
          'Performance includes financial result measures and is used after initiatives are complete to determine if initiative  goals were met.',
          'Performance is measured but rarely used to adjust in-flight initiatives or improve future initiatives.',
          'No Answer',
        ],
      },
      {
        question: 'How are processes and procedures adjusted and improved?',
        answers: [
          'Standard types of work are actively tracked and analyzed from end-to-end. Improvement insights are frequently evaluated and used to improve work flow templates. AI may be used to optimize workflow.',
          'Standard types of work are tracked but may occur in multiple collaboration systems. Improvement insights are occasionally evaluated when a problem occurs or new technology is introduced.',
          'Standard types of work and work logs exist but they are not used or evaluated to improve processes and no formal  improvement occurs. Processes are dated and often do not align with business needs.',
          'Processes are implemented and sometimes automated but no method of evaluating and improving them exists.',
          'No Answer',
        ],
      },
    ],
  },
  Technology: {
    questions: [
      {
        question:
          'How does work flow within and across teams, groups and disciplines?',
        answers: [
          'Centralized and integrated, best-of-breed digital technologies are used for planning, budgeting, content, production, analysis and task management activities.',
          'Best-of-breed digital technologies are used for planning, budgeting, content, production, analysis and task management activities but they are not shared or integrated across functional teams and external providers.',
          'Generic collaboration technologies are used to exchange work within and across internal teams, but exchanges are not mapped to higher-level projects and email is used for external providers.',
          'No modern work management or collaboration systems are in use and work is exchanged in email or manually. ',
          'No Answer',
        ],
      },
      {
        question: 'How is human effort optimized and focused?',
        answers: [
          'The majority of non-creative human activities are automated using business rules, automated workflow, data-enrichment services, bots and virtual agents. Everything that can be automated is automated.',
          'Human work activities are included in standard workstreams and orchestrated in work management technologies, however, recurring manual tasks are simply tracked, not automated with bots and virtual agents.',
          'Some human activities are orchestrated in applications but the work is fragmented and requires considerable human effort to stitch tasks together and make basic decisions that could be automated with bots and virtual agents.',
          'All human activities involved in a workstream are conducted by humans in siloed systems. Humans must know how to manually complete each activity and who to pass it to upon completion. ',
          'No Answer',
        ],
      },
      {
        question: 'How are best-of-breed technologies used and integrated?',
        answers: [
          'Tools are integrated at the data- and user experience-levels so that multiple best-of-breed systems appear to the user as one unified system. Systems are designed around the worker experience.',
          'Tools are integrated at the data-level, but they still appear as different tools that were not designed to work together and have been roughly assembled to support the worker experience.',
          'Some tools may be integrated at the data-level to reduce data re-entry, but some re-entry is still required and tools are not accessible in a common user experience. Each tool requires its own screen and login and looks completely different in the worker experience.',
          'Tools are generic and not integrated at the data- or user experience-levels. Switching between clunky tools is a significant frustration and efficiency problem.',
          'No Answer',
        ],
      },
      {
        question: 'How is user engagement encouraged and tracked?',
        answers: [
          'Personalization, education and best-of-breed tools and active interaction monitoring are used to engage users and measure adoption. Integrated user experiences are provided to meet the needs of specific types of workers.  Users think technologies help them do a better job.',
          'Education and best-of-breed tools are provided, but worker interactions are not used to measure engagement. The hope is, that if “we build it, they will come” and use the technology provided.',
          'Feedback on technology and its usefulness is solicited but only when new rollouts take place. No ongoing activities occur to promote technology use and determine its alignment with business needs.',
          'Worker engagement and adoption is not tracked or measured. Use of the technology provided and its alignment with worker needs is unknown.',
          'No Answer',
        ],
      },
      {
        question:
          'How are planning, project and production systems integrated?',
        answers: [
          'Master data is managed in specialized product information management (PIM), customer data profile (CDP) and marketing work management (MWM) systems and integrated with production and data systems using a single cloud platform. Tracking codes propagate from plans to vehicle instances for direct attribution.',
          'Master data is managed in multiple data repositories and integrated using a single cloud integration platform or central services API. Tracking codes exist for some vehicle instances but most attribution is inferred.',
          'Master data exists in multiple, somewhat isolated systems and may be out of sync between planning and production. Some data is loaded into centralized data lakes but linking and integrating is manual. Attribution is possible in some channels but not in others.',
          'Master data is isolated and different versions and definitions exist in different systems. Little to no integration exists between planning, production and analytic systems and attribution is completely inferred based on flawed data. ',
          'No Answer',
        ],
      },
      {
        question: 'How are users and administrators supported?',
        answers: [
          'In-house, skilled, experienced and certified administrators proactively manage user communities and respond quickly to user needs.',
          'In-house and external dedicated  administrators proactively manage user communities and work with IT counterparts to respond quickly to user needs.',
          "IT specialists respond to user needs and escalate to internal or external support specialists if needed. Most IT specialists don't know the users or unique configurations and ways they use the system.",
          'No formal support exists for administrators and users. User needs are either ignored or users must resort to communities and on-line documentation to troubleshoot and resolve their own problems.',
          'No Answer',
        ],
      },
    ],
  },
  Information: {
    questions: [
      {
        question:
          'How is strategy, planning, consumer, product and project information accessed?',
        answers: [
          'All types of data are packaged and available securely to internal and external workers and accessed with cloud-based, user-friendly analysis and data extraction tools. Personal data is automatically masked.',
          'Most types of data are available securely to internal workers and accessible from a central repository with specialized data tools. Personal data is manually masked. Access is tightly controlled at the user account level.',
          'Some data is available in a centralized data lake but it is not packaged, aggregated or masked and may not be current. Access is limited to a few trusted individuals that have full data access and extraction is manual.',
          'Little to no centralized data exists. Data must be manually pulled from source systems by IT specialists and aggregated manually each time it is needed. ',
          'No Answer',
        ],
      },
      {
        question:
          'How is strategy, planning, consumer, product and project information used?',
        answers: [
          'All types of customer, behavioral and product data are used to set OKR goals and guide priority decisions, personalize and improve the performance of in-flight initiatives. AI and ML is in common use across all interaction channels. Performance data is very useful in setting strategy.',
          'Customer, behavioral and product data is used to personalize and improve the performance of future initiatives, but does not impact in-flight initiatives. Data is used to personalize interactions but not in real-time. AI and ML is used in isolated channels. Performance data accuracy is useful in setting strategy.',
          'Customer and product data is used to personalize emails, digital channel behavioral data is not used to guide strategy or personalize messaging. AI and ML are not used. Performance data is often questioned and may be considered when setting strategy.',
          'Most communications are generic with little to no personalization. Past interactions, responses and conversions are often not considered and preferences are not always honored. Performance data is limited to basic receipt or view data and is not used in setting strategy.',
          'No Answer',
        ],
      },
      {
        question:
          'How comprehensive is consumer, product and project information?',
        answers: [
          'Cloud-based and integrated  technologies are used to manage customer, product and project information as well as scrub and enrich all types of customer data in near real-time.',
          'Customer data is actively scrubbed and enriched using batch-based internal and external data services from a variety of specialized providers. ',
          'Customer data is occasionally scrubbed using a combination of self-service tools and data lists from consumer data providers.',
          'Customer data is rarely scrubbed and often becomes dated and inaccurate as customer records age. Third-party data sources are not used to maintain data quality.',
          'No Answer',
        ],
      },
      {
        question:
          'How meaningful and actionable is consumer, product and project information?',
        answers: [
          'Information is actively used to evaluate and adjust in-flight initiative content, cadence, and channel mix',
          'Information is frequently used to evaluate and adjust future initiative content, cadence and channel mix',
          'Information is occasionally used to evaluate and adjust future initiative content, cadence and channel mix.',
          'Information is rarely used to evaluate and adjust future initiative content, cadence and channel mix.',
          'No Answer',
        ],
      },
      {
        question: 'How is information quality and usefulness determined?',
        answers: [
          'Facts, preferences, behaviors and history are continually evaluated and used to guide activities. All stakeholders agree on metric, measurement and performance calculations.',
          'Facts and preferences are periodically evaluated and may guide messaging strategy. Most stakeholders agree on metric, measurement and performance calculations.',
          'Different versions of the facts are periodically evaluated and may guide messaging strategy. Some stakeholders disagree on metric, measurement and performance calculations.',
          'There is no clear source of truth for the facts. Many stakeholders disagree on metric, measurement and performance calculations.',
          'No Answer',
        ],
      },
      {
        question:
          'How do stakeholders generally feel about information they receive?',
        answers: [
          'Information is highly trusted, easy to understand and actively used to guide strategic and tactical decisions.',
          'Information is generally trusted, understood and commonly used to set strategies and make messaging decisions.',
          'Information is commonly questioned, must be explained and may be referenced to set strategies and make messaging decisions.',
          'Information is rarely trusted, must be explained and commonly ignored when setting strategies and making messaging decisions.',
          'No Answer',
        ],
      },
    ],
  },
};

export default FormData;
