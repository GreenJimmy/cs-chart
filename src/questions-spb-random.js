const FormData = {
  People: [
    {
      question:
        'How do those that participate in strategy, planning and budgeting activities know what to do?',
      answers: {
        0: 'No Answer',
        1: 'They guess or invent new ways of doing things',
        2: 'They ask questions',
        3: 'We provide coaching & mentoring',
        4: 'We provide formal strategy, planning and budgeting education',
      },
    },
    {
      question:
        'How do strategy, planning and budgeting process participants know when to participate?',
      answers: {
        0: 'No Answer',
        1: 'They are reminded when things are due or late',
        2: 'They are reminded in email or chat',
        3: 'They consult calendars & schedules',
        4: 'Digital task management systems notify them',
      },
    },
    {
      question:
        'How are strategy, planning and budgeting ideas captured and vetted?',
      answers: {
        0: 'No Answer',
        1: 'In non-standard, assorted spreadsheets and documents',
        2: 'In template-based spreadsheets, PowerPoints and documents',
        3: 'In general use strategy, planning and budgeting tools',
        4: 'In personalized digital strategy, planning and budgeting tools',
      },
    },
    {
      question:
        'How are strategy, planning and budgeting process participants encouraged and rewarded for their efforts?',
      answers: {
        0: 'No Answer',
        1: 'No special reward or recognition is provided',
        2: 'They are personally thanked by their manager',
        3: 'They are recognized by their group or team leadership',
        4: 'They receive financial incentives, perks or public recognition',
      },
    },
    {
      question:
        'How is ownership for strategy, planning and budgeting concerns and components determined?',
      answers: {
        0: 'No Answer',
        1: 'Ownership is not assigned unless something goes wrong',
        2: 'Ownership is assigned by exception for special projects and initiatives',
        3: 'Ownership is assigned at the project or budget level',
        4: 'Ownership is assigned at the goals, initiative and budget levels',
      },
    },
    {
      question:
        'How do strategy, planning and budgeting process participants communicate with each other?',
      answers: {
        0: 'No Answer',
        1: 'They occasionally call each other on the phone or meet informally',
        2: 'They commonly use email to pass strategy, planning and budgeting documents around',
        3: 'They meet physically or virtually and discuss strategy, planning and budgeting concerns',
        4: 'They primarily use digital collaboration and task management technologies',
      },
    },
  ],
  Process: [
    {
      question:
        'How are goals created, recorded, linked and shared across the organization?',
      answers: {
        0: 'No Answer',
        1: 'They are created occasionally in isolation, rarely monitored or updated and are disconnected from higher level unit or organizational goals',
        2: 'They are created and managed at the project or initiative level without clear traceability to higher level unit and corporate goals',
        3: 'They are tracked periodically at the unit, group or team levels and have indirect traceability to higher level goals',
        4: 'They are tracked centrally, actively owned and managed, and evaluated continually with top down traceability.',
      },
    },
    {
      question:
        'How are strategies created and shared across the organization?',
      answers: {
        0: 'No Answer',
        1: 'Strategies are created in isolation by groups, teams and units with limited knowledge of corporate and higher-level strategies',
        2: 'Strategies are created occasionally at the corporate, unit and team levels and rarely change between planning cycles',
        3: 'Strategies are created annually at the corporate, unit and team levels. They are reviewed periodically based on performance to plan',
        4: 'Strategies are formally defined, created and continually managed at the corporate, unit and team levels. Strategy change signals are defined and continually monitored',
      },
    },
    {
      question:
        'How are alternative planning scenarios created, evaluated, recorded and shared across the organization?',
      answers: {
        0: 'No Answer',
        1: 'There is no evaluation of alternative planning scenarios in the planning process',
        2: 'They are evaluated informally by comparing planning and budgeting documents, spreadsheets and PowerPoints',
        3: 'By comparing alternative budget scenarios side-by-side and then considering alignment to strategies and goals',
        4: 'Collaboratively based on strategies, rules and planning data in specialized planning tools that provide side-by-side comparison, budget, ROI estimation and goal alignment',
      },
    },
    {
      question:
        'How are budgets created, recorded and shared across the organization?',
      answers: {
        0: 'No Answer',
        1: 'Budgets are created with little consideration for strategy, planned projects and activities. They are created in a silo, based on last year’s budget',
        2: 'Annually without re-forecast, using last year’s budget with annual adjustments and captured in spreadsheets at the GL code level',
        3: 'Annually with periodic re-forecast, using a combination of planned projects and historical budgets mapped to the GL code level and view',
        4: 'Collaboratively and continually from strategies using Zero Based Budgeting (ZBB), project and activity budgeting methods with multiple budget mappings and views',
      },
    },
    {
      question: 'How are strategy change signals defined and evaluated?',
      answers: {
        0: 'No Answer',
        1: 'Strategy change signals are not defined, tracked or used',
        2: 'Strategy change signals are occasionally discussed, rarely tracked and not commonly used to trigger strategy changes',
        3: 'Strategy change signals are associated with strategies, periodically monitored through research and analytics and occasionally used to initiate strategy shifts',
        4: 'Strategy change signals are identified with planning scenarios, continually monitored through research, analytics and goal tracking and commonly used to initiate strategy shifts',
      },
    },
    {
      question: 'How are strategy, plan and budget changes coordinated?',
      answers: {
        0: 'No Answer',
        1: 'Changes rarely occur and when they do occur, they are conducted in an informal manner with no traceability or formal approval process',
        2: 'Changes are made informally by strategy planning and budgeting owners with few formal controls, limited tracking, approval and notification',
        3: 'Changes must be made based on formal policy and procedure that should be followed by strategy, planning and budgeting participants, however, compliance is difficult to measure and enforce',
        4: 'Change management is automated and tightly controlled in formal, predictable workflow that manages access and approval at the field level and automatically notifies stakeholders',
      },
    },
  ],
  Technology: [
    {
      question:
        'What types of tools are used by strategy, planning and budgeting participants to perform their work?',
      answers: {
        0: 'No Answer',
        1: 'Email or off-line document exchange of non-template-based strategy, planning and budgeting documents (e.g. spreadsheets)',
        2: 'Cloud based document technologies (e.g. Box) that store template-based strategy, plan and budget documents (e.g. spreadsheets)',
        3: 'Collaborative project and task management technologies with general document management and document versioning functionality ',
        4: 'Specially configured digital technologies with task management, goal setting, scenario planning, resourcing and budgeting functionality',
      },
    },
    {
      question:
        'How are strategy, planning and budgeting tools personalized to meet the needs and preferences of participants?',
      answers: {
        0: 'No Answer',
        1: 'The strategy, planning and budgeting user experience is the same for all ',
        2: 'Personalization consists of access and edit rights to shared documents',
        3: 'They are configured to the general needs of specific roles with role-based forms, views and navigation that standardizes user experience ',
        4: 'They are company branded and styled with personalized, role-based, forms, views, navigation and click-paths that simplify and streamline user experience',
      },
    },
    {
      question:
        'How do strategy, planning and budgeting tools reduce the amount of work required of participants?',
      answers: {
        0: 'No Answer',
        1: 'Tools used do not reduce the amount of work in the strategy, planning budgeting process ',
        2: 'Tools simplify the aggregation and analysis of strategy, planning and budgeting information ',
        3: 'Tools simplify the user experience of entering and accessing strategy, planning and budgeting information',
        4: 'Tools reduce work by clarifying taskings, lowering the data entry burden, reducing the reporting effort, automating tracking, simplifying collaboration and reducing rework',
      },
    },
    {
      question:
        'How do strategy, planning and budgeting tools track data values and changes over time?',
      answers: {
        0: 'No Answer',
        1: 'Tools do not track or control record or field level changes',
        2: 'Tools provide document or record level journaling and versioning but provide no change control and do not track changes at the field level',
        3: 'Tools automatically track changes at the field and value level with field level journaling and notification ',
        4: 'Tools actively manage changes at the field and value level with field level, validation, locking, tracking, versioning, reporting and notification',
      },
    },
    {
      question:
        'How do tools work together and exchange strategy, planning and budgeting data with each other?',
      answers: {
        0: 'No Answer',
        1: 'Tools are not integrated and often contain different and conflicting information',
        2: 'They have different user experiences and data must be re-entered in each tool',
        3: 'They have different user experiences but are integrated at the data level ',
        4: 'They provide a single unified user experience and data flows between them in near real-time',
      },
    },
    {
      question: 'How do SPB tools control quality and ensure compliance?',
      answers: {
        0: 'No Answer',
        1: 'Tools do not track or enforce compliance',
        2: 'Compliance is simply a matter of using the correct strategy planning and budgeting document template',
        3: 'Compliance is considered in policy and procedure but not enforced by the system',
        4: 'Compliance is built into automated workflow and tracked by the system',
      },
    },
  ],
  Information: [
    {
      question:
        'How is internal performance, external insight and competitor information captured and used?',
      answers: {
        0: 'No Answer',
        1: 'External insights, signals and performance to plan rarely impact strategy',
        2: 'Internal performance results occasionally impact and shift strategy',
        3: 'Research and analytics insights are periodically evaluated and may influence strategy',
        4: 'Learning plans guide research and analytic monitoring that continually influences and guides strategy',
      },
    },
    {
      question:
        'How is strategy, planning and budgeting data sourced, integrated and linked?',
      answers: {
        0: 'No Answer',
        1: 'Data from strategy, planning and budgeting tools is not integrated or linked',
        2: 'Data is collected in documents and may be rolled up into master documents',
        3: 'Data is collected in a data lake but may not be linked and synchronized in strategy, planning and budgeting tools ',
        4: 'Data is collected, linked, and synchronized in strategy, planning and budgeting tools, data lakes and data warehouses',
      },
    },
    {
      question:
        'How is strategy, planning and budgeting data used in downstream systems?',
      answers: {
        0: 'No Answer',
        1: 'Data is not commonly used or referenced after creation',
        2: 'Data is used in manual performance to plan analysis',
        3: 'Data is used to provide periodic reporting and on-demand analytics',
        4: 'Data is used in performance monitoring, goal tracking, always-on analytics and closed loop learning',
      },
    },
    {
      question:
        'How is strategy, planning and budgeting data access controlled?',
      answers: {
        0: 'No Answer',
        1: 'There are no formal access controls to strategy, planning and budgeting data',
        2: 'Access is controlled by managing rights to shared strategy, planning and budgeting documents',
        3: 'Access control is managed at the record, not field level independently in user tools and data repositories',
        4: 'Access to strategy, planning and budgeting data is tightly controlled in user tools and in reporting views with field level access control',
      },
    },
    {
      question:
        'How is strategy, planning and budgeting information used in analytics?',
      answers: {
        0: 'No Answer',
        1: 'Data is not commonly used in analytics',
        2: 'Data is used occasionally to monitor top level performance to plan',
        3: 'Data is used to periodically evaluate performance to plan at multiple level in the organization',
        4: 'Data is used to continually monitor performance to plan and goals, and evaluate the need for strategy shift',
      },
    },
    {
      question:
        'How is historical strategy, planning and budgeting information used in strategy, planning and budgeting activities?',
      answers: {
        0: 'No Answer',
        1: 'Historical strategy, planning and budgeting Information is rarely used or referenced after it is created',
        2: 'Historical strategy, planning and budgeting documents may be referenced when developing new strategy',
        3: 'Historical budget data serves as the primary input for strategy and planning activities',
        4: 'Continuous strategy refinement and goal setting activities drive planning and budeting activities',
      },
    },
  ],
};

export default FormData;
