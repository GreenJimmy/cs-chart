const FormData = {
  People: [
    {
      question:
        'How do internal and external workers know what they are supposed to do?',
      answers: {
        0: 'No Answer',
        1: 'New workers are forced to figure things out on their own.',
        2: 'Mentoring and on-the-job training are the primary ways of learning.',
        3: 'Role-based training and job aids are commonly used to learn how to work',
        4: 'Formal education is provided through structured classes and university-style curriculum.',
      },
    },
    {
      question:
        'How do internal and external workers communicate with each other and exchange knowledge and work?',
      answers: {
        0: 'No Answer',
        1: 'Internal and external workers communicate primarily through phone calls, email or in other ways that are not tracked or linked.',
        2: 'Both internal and external workers communicate primarily through disconnected chat, email and document uploads.',
        3: 'Internal collaboration and workflow techniques are unified but different methods are used for external workers.',
        4: 'Unified and integrated digital collaboration tools and methods are used with and between internal and external workers.',
      },
    },
    {
      question:
        'How are marketing responsibilities assigned across internal and external teams?',
      answers: {
        0: 'No Answer',
        1: 'Virtually all strategic and tactical work is passed to external agencies.',
        2: 'Many types of work are commonly passed to external agencies.',
        3: 'Strategic and most tactical work is assigned to internal workers with some tactical work passed to external agencies.',
        4: 'Most work is assigned to internal workers, with some types of work occasionally assigned to specialized external agencies.',
      },
    },
    {
      question: 'How do marketing teams operate and make decisions?',
      answers: {
        0: 'No Answer',
        1: 'Decentralized, regional, product or brand aligned teams function independently and in isolation with no use of agile methods.',
        2: 'Decentralized teams leverage some centralized shared services and use traditional, non-agile methods in execution activities.',
        3: 'Partially centralized teams provide shared services and leverage agile methods in some execution activities.',
        4: 'Centralized, functionally-aligned teams assemble in agile pods and leverage agile methods in planning and execution activities.',
      },
    },
    {
      question:
        'How much authority does marketing leadership have over marketing concerns?',
      answers: {
        0: 'No Answer',
        1: 'Marketing leadership has little input into planning, execution, quality, budgeting, innovation, technology and performance measurement.',
        2: 'Marketing leadership shares responsibility for planning, execution, quality, budgeting, innovation, technology and performance measurement.',
        3: 'Marketing leadership has considerable input into planning, execution, quality, budgeting, innovation, technology and performance measurement.',
        4: 'Marketing leadership is responsible for all aspects of planning, execution, quality, budgeting, innovation, technology and performance measurement.',
      },
    },
    {
      question: 'How is marketing capacity managed and used?',
      answers: {
        0: 'No Answer',
        1: 'Capacity is unknown.',
        2: 'Capacity is estimated but is not commonly known or used in decision-making.',
        3: 'Some internal capacity is known and used in planning activities.',
        4: 'Internal and external capacity is known and actively managed to meet future demand.',
      },
    },
  ],
  Process: [
    {
      question:
        'How is work aligned with internal and external stakeholder interests?',
      answers: {
        0: 'No Answer',
        1: 'Strategy and execution are not linked together and often do not reflect the priorities of stakeholders.',
        2: 'Strategy is created, documented and linked to execution annually, and stakeholders set priorities in the annual cycle.',
        3: 'Strategy is created, documented and linked to execution annually, and stakeholders adjust priorities quarterly.',
        4: 'Using planning scenarios and goals that continuously link strategy to execution, and stakeholders actively and continually engage to guide priorities.',
      },
    },
    {
      question: 'How is work predictable, repeatable and consistent?',
      answers: {
        0: 'No Answer',
        1: 'Activities are tracked in spreadsheets or emails but no standard and automated project or job tracking system exists.',
        2: 'Jobs are created to track tasks and status but the relationships between them are unknown and they are not linked to job requests.',
        3: 'Projects are used to track the activities needed to complete a set of related jobs (e.g. campaign) but templates are not used and requests are not mapped into them.',
        4: 'All categories of projects are predefined and benchmarked at the task level and requests are automatically mapped into them.',
      },
    },
    {
      question: 'How are objectives set and linked from top to bottom?',
      answers: {
        0: 'No Answer',
        1: 'Objectives may exist in strategies but are not cascaded to programs or projects.',
        2: 'Objectives are defined in strategies and used to guide annual program plans but are not cascaded to projects.',
        3: 'Objectives are defined in strategies and used to guide annual program plans and project-level goals and priorities.',
        4: 'Strategies are tied to initiatives using OKR style goals, measures and planned activities.',
      },
    },
    {
      question: 'How are policies, rules and compliance enforced?',
      answers: {
        0: 'No Answer',
        1: 'Policies, rules and compliance are occasionally evaluated but tracking is sporadic and audit is difficult. No system of record for marketing compliance exists.',
        2: 'Policies, rules and compliance are evaluated during approval activities by manual submission to the Compliance team. Rework is common. ',
        3: 'Policies, rules and compliance are evaluated during approval activities and initiated automatically in the approval stage, occasionally initiating rework.',
        4: 'Policies, rules, compliance activities and risk mitigation happen automatically during normal project activities, preventing rework.',
      },
    },
    {
      question: 'How is performance measured and used?',
      answers: {
        0: 'No Answer',
        1: 'Performance is measured but rarely used to adjust in-flight initiatives or improve future initiatives.',
        2: 'Performance includes financial result measures and is used after initiatives are complete to determine if initiative goals were met.',
        3: 'Performance includes financial efficiency and effectiveness measures and is used after initiatives are complete to determine if goals were met and to improve future initiatives.',
        4: 'Performance includes financial efficiency and effectiveness measures and is actively used during initiative execution to adjust and improve future marketing initiatives.',
      },
    },
    {
      question: 'How are processes and procedures adjusted and improved?',
      answers: {
        0: 'No Answer',
        1: 'Processes are implemented and sometimes automated but no method of evaluating and improving them exists.',
        2: 'Standard types of work and work logs exist but they are not used or evaluated to improve processes and no formal improvement occurs. Processes are dated and often do not align with business needs.',
        3: 'Standard types of work are tracked but may occur in multiple collaboration systems. Improvement insights are occasionally evaluated when a problem occurs or new technology is introduced.',
        4: 'Standard types of work are actively tracked and analyzed from end-to-end. Improvement insights are frequently evaluated and used to improve work flow templates. AI may be used to optimize workflow.',
      },
    },
  ],
  Technology: [
    {
      question:
        'How does work flow within and across teams, groups and disciplines?',
      answers: {
        0: 'No Answer',
        1: 'No modern work management or collaboration systems are in use and work is exchanged in email or manually. ',
        2: 'Generic collaboration technologies are used to exchange work within and across internal teams, but exchanges are not mapped to higher-level projects and email is used for external providers.',
        3: 'Best-of-breed digital technologies are used for planning, budgeting, content, production, analysis and task management activities but they are not shared or integrated across functional teams and external providers.',
        4: 'Centralized and integrated, best-of-breed digital technologies are used for planning, budgeting, content, production, analysis and task management activities.',
      },
    },
    {
      question: 'How is human effort optimized and focused?',
      answers: {
        0: 'No Answer',
        1: 'All human activities involved in a workstream are conducted by humans in siloed systems. Humans must know how to manually complete each activity and who to pass it to upon completion. ',
        2: 'Some human activities are orchestrated in applications but the work is fragmented and requires considerable human effort to stitch tasks together and make basic decisions that could be automated with bots and virtual agents.',
        3: 'Human work activities are included in standard workstreams and orchestrated in work management technologies, however, recurring manual tasks are simply tracked, not automated with bots and virtual agents.',
        4: 'The majority of non-creative human activities are automated using business rules, automated workflow, data-enrichment services, bots and virtual agents. Everything that can be automated is automated.',
      },
    },
    {
      question: 'How are best-of-breed technologies used and integrated?',
      answers: {
        0: 'No Answer',
        1: 'Tools are generic and not integrated at the data- or user experience-levels. Switching between clunky tools is a significant frustration and efficiency problem.',
        2: 'Some tools may be integrated at the data-level to reduce data re-entry, but some re-entry is still required and tools are not accessible in a common user experience. Each tool requires its own screen and login and looks completely different in the worker experience.',
        3: 'Tools are integrated at the data-level, but they still appear as different tools that were not designed to work together and have been roughly assembled to support the worker experience.',
        4: 'Tools are integrated at the data- and user experience-levels so that multiple best-of-breed systems appear to the user as one unified system. Systems are designed around the worker experience.',
      },
    },
    {
      question: 'How is user engagement encouraged and tracked?',
      answers: {
        0: 'No Answer',
        1: 'Worker engagement and adoption is not tracked or measured. Use of the technology provided and its alignment with worker needs is unknown.',
        2: 'Feedback on technology and its usefulness is solicited but only when new rollouts take place. No ongoing activities occur to promote technology use and determine its alignment with business needs.',
        3: 'Education and best-of-breed tools are provided, but worker interactions are not used to measure engagement. The hope is, that if “we build it, they will come” and use the technology provided.',
        4: 'Personalization, education and best-of-breed tools and active interaction monitoring are used to engage users and measure adoption. Integrated user experiences are provided to meet the needs of specific types of workers. Users think technologies help them do a better job.',
      },
    },
    {
      question: 'How are planning, project and production systems integrated?',
      answers: {
        0: 'No Answer',
        1: 'Master data is isolated and different versions and definitions exist in different systems. Little to no integration exists between planning, production and analytic systems and attribution is completely inferred based on flawed data. ',
        2: 'Master data exists in multiple, somewhat isolated systems and may be out of sync between planning and production. Some data is loaded into centralized data lakes but linking and integrating is manual. Attribution is possible in some channels but not in others.',
        3: 'Master data is managed in multiple data repositories and integrated using a single cloud integration platform or central services API. Tracking codes exist for some vehicle instances but most attribution is inferred.',
        4: 'Master data is managed in specialized product information management (PIM), customer data profile (CDP) and marketing work management (MWM) systems and integrated with production and data systems using a single cloud platform. Tracking codes propagate from plans to vehicle instances for direct attribution.',
      },
    },
    {
      question: 'How are users and administrators supported?',
      answers: {
        0: 'No Answer',
        1: 'No formal support exists for administrators and users. User needs are either ignored or users must resort to communities and on-line documentation to troubleshoot and resolve their own problems.',
        2: "IT specialists respond to user needs and escalate to internal or external support specialists if needed. Most IT specialists don't know the users or unique configurations and ways they use the system.",
        3: 'In-house and external dedicated administrators proactively manage user communities and work with IT counterparts to respond quickly to user needs.',
        4: 'In-house, skilled, experienced and certified administrators proactively manage user communities and respond quickly to user needs.',
      },
    },
  ],
  Information: [
    {
      question:
        'How is strategy, planning, consumer, product and project information accessed?',
      answers: {
        0: 'No Answer',
        1: 'Little to no centralized data exists. Data must be manually pulled from source systems by IT specialists and aggregated manually each time it is needed. ',
        2: 'Some data is available in a centralized data lake but it is not packaged, aggregated or masked and may not be current. Access is limited to a few trusted individuals that have full data access and extraction is manual.',
        3: 'Most types of data are available securely to internal workers and accessible from a central repository with specialized data tools. Personal data is manually masked. Access is tightly controlled at the user account level.',
        4: 'All types of data are packaged and available securely to internal and external workers and accessed with cloud-based, user-friendly analysis and data extraction tools. Personal data is automatically masked.',
      },
    },
    {
      question:
        'How is strategy, planning, consumer, product and project information used?',
      answers: {
        0: 'No Answer',
        1: 'Most communications are generic with little to no personalization. Past interactions, responses and conversions are often not considered and preferences are not always honored. Performance data is limited to basic receipt or view data and is not used in setting strategy.',
        2: 'Customer and product data is used to personalize emails, digital channel behavioral data is not used to guide strategy or personalize messaging. AI and ML are not used. Performance data is often questioned and may be considered when setting strategy.',
        3: 'Customer, behavioral and product data is used to personalize and improve the performance of future initiatives, but does not impact in-flight initiatives. Data is used to personalize interactions but not in real-time. AI and ML is used in isolated channels. Performance data accuracy is useful in setting strategy.',
        4: 'All types of customer, behavioral and product data are used to set OKR goals and guide priority decisions, personalize and improve the performance of in-flight initiatives. AI and ML is in common use across all interaction channels. Performance data is very useful in setting strategy.',
      },
    },
    {
      question:
        'How comprehensive is consumer, product and project information?',
      answers: {
        0: 'No Answer',
        1: 'Customer data is rarely scrubbed and often becomes dated and inaccurate as customer records age. Third-party data sources are not used to maintain data quality.',
        2: 'Customer data is occasionally scrubbed using a combination of self-service tools and data lists from consumer data providers.',
        3: 'Customer data is actively scrubbed and enriched using batch-based internal and external data services from a variety of specialized providers. ',
        4: 'Cloud-based and integrated technologies are used to manage customer, product and project information as well as scrub and enrich all types of customer data in near real-time.',
      },
    },
    {
      question:
        'How meaningful and actionable is consumer, product and project information?',
      answers: {
        0: 'No Answer',
        1: 'Information is rarely used to evaluate and adjust future initiative content, cadence and channel mix.',
        2: 'Information is occasionally used to evaluate and adjust future initiative content, cadence and channel mix.',
        3: 'Information is frequently used to evaluate and adjust future initiative content, cadence and channel mix',
        4: 'Information is actively used to evaluate and adjust in-flight initiative content, cadence, and channel mix',
      },
    },
    {
      question: 'How is information quality and usefulness determined?',
      answers: {
        0: 'No Answer',
        1: 'There is no clear source of truth for the facts. Many stakeholders disagree on metric, measurement and performance calculations.',
        2: 'Different versions of the facts are periodically evaluated and may guide messaging strategy. Some stakeholders disagree on metric, measurement and performance calculations.',
        3: 'Facts and preferences are periodically evaluated and may guide messaging strategy. Most stakeholders agree on metric, measurement and performance calculations.',
        4: 'Facts, preferences, behaviors and history are continually evaluated and used to guide activities. All stakeholders agree on metric, measurement and performance calculations.',
      },
    },
    {
      question:
        'How do stakeholders generally feel about information they receive?',
      answers: {
        0: 'No Answer',
        1: 'Information is rarely trusted, must be explained and commonly ignored when setting strategies and making messaging decisions.',
        2: 'Information is commonly questioned, must be explained and may be referenced to set strategies and make messaging decisions.',
        3: 'Information is generally trusted, understood and commonly used to set strategies and make messaging decisions.',
        4: 'Information is highly trusted, easy to understand and actively used to guide strategic and tactical decisions.',
      },
    },
  ],
};

export default FormData;
