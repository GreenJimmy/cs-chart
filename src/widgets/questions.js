const FormData = {
  People: {
    questions: [
      {
        question:
          'How do those that participate in strategy, planning and budgeting activities know what to do?',
        answers: [
          'We provide formal strategy, planning and budgeting education',
          'We provide coaching & mentoring',
          'They ask questions',
          'They guess or invent new ways of doing things',
          'No Answer',
        ],
      },
      {
        question:
          'How do strategy, planning and budgeting process participants know when to participate?',
        answers: [
          'Digital task management systems notify them',
          'They consult calendars & schedules',
          'They are reminded in email or chat',
          'They are reminded when things are due or late',
          'No Answer',
        ],
      },
      {
        question:
          'How are strategy, planning and budgeting ideas captured and vetted?',
        answers: [
          'In personalized digital strategy, planning and budgeting tools',
          'In general use strategy, planning and budgeting tools',
          'In template-based spreadsheets, PowerPoints and documents',
          'In non-standard, assorted spreadsheets and documents',
          'No Answer',
        ],
      },
      {
        question:
          'How are strategy, planning and budgeting process participants encouraged and rewarded for their efforts?',
        answers: [
          'They receive financial incentives, perks or public recognition',
          'They are recognized by their group or team leadership',
          'They are personally thanked by their manager',
          'No special reward or recognition is provided',
          'No Answer',
        ],
      },
      {
        question:
          'How is ownership for strategy, planning and budgeting concerns and components determined?',
        answers: [
          'Ownership is assigned at the goals, initiative and budget levels',
          'Ownership is assigned at the project or budget level',
          'Ownership is assigned by exception for special projects and initiatives',
          'Ownership is not assigned unless something goes wrong',
          'No Answer',
        ],
      },
      {
        question:
          'How do strategy, planning and budgeting process participants communicate with each other?',
        answers: [
          'They primarily use digital collaboration and task management technologies',
          'They meet physically or virtually and discuss strategy, planning and budgeting concerns',
          'They commonly use email to pass strategy, planning and budgeting documents around',
          'They occasionally call each other on the phone or meet informally',
          'No Answer',
        ],
      },
    ],
  },
  Process: {
    questions: [
      {
        question:
          'How are goals created, recorded, linked and shared across the organization?',
        answers: [
          'They are tracked centrally, actively owned and managed, and evaluated continually with top down traceability.',
          'They are tracked periodically at the unit, group or team levels and have indirect traceability to higher level goals',
          'They are created and managed at the project or initiative level without clear traceability to higher level unit and corporate goals',
          'They are created occasionally in isolation, rarely monitored or updated and are disconnected from higher level unit or organizational goals',
          'No Answer',
        ],
      },
      {
        question:
          'How are strategies created and shared across the organization?',
        answers: [
          'Strategies are formally defined, created and continually managed at the corporate, unit and team levels. Strategy change signals are defined and continually monitored',
          'Strategies are created annually at the corporate, unit and team levels. They are reviewed periodically based on performance to plan',
          'Strategies are created occasionally at the corporate, unit and team levels and rarely change between planning cycles',
          'Strategies are created in isolation by groups, teams and units with limited knowledge of corporate and higher-level strategies',
          'No Answer',
        ],
      },
      {
        question:
          'How are alternative planning scenarios created, evaluated, recorded and shared across the organization?',
        answers: [
          'Collaboratively based on strategies, rules and planning data in specialized planning tools that provide side-by-side comparison, budget, ROI estimation and goal alignment',
          'By comparing alternative budget scenarios side-by-side and then considering alignment to strategies and goals',
          'They are evaluated informally by comparing planning and budgeting documents, spreadsheets and PowerPoints',
          'There is no evaluation of alternative planning scenarios in the planning process',
          'No Answer',
        ],
      },
      {
        question:
          'How are budgets created, recorded and shared across the organization?',
        answers: [
          'Collaboratively and continually from strategies using Zero Based Budgeting (ZBB), project and activity budgeting methods with multiple budget mappings and views',
          'Annually with periodic re-forecast, using a combination of planned projects and historical budgets mapped to the GL code level and view',
          'Annually without re-forecast, using last year’s budget with annual adjustments and captured in spreadsheets at the GL code level',
          'Budgets are created with little consideration for strategy, planned projects and activities. They are created in a silo, based on last year’s budget',
          'No Answer',
        ],
      },
      {
        question: 'How are strategy change signals defined and evaluated?',
        answers: [
          'Strategy change signals are identified with planning scenarios, continually monitored through research, analytics and goal tracking and commonly used to initiate strategy shifts',
          'Strategy change signals are associated with strategies, periodically monitored through research and analytics and occasionally used to initiate strategy shifts',
          'Strategy change signals are occasionally discussed, rarely tracked and not commonly used to trigger strategy changes',
          'Strategy change signals are not defined, tracked or used',
          'No Answer',
        ],
      },
      {
        question: 'How are strategy, plan and budget changes coordinated?',
        answers: [
          'Change management is automated and tightly controlled in formal, predictable workflow that manages access and approval at the field level and automatically notifies stakeholders',
          'Changes must be made based on formal policy and procedure that should be followed by strategy, planning and budgeting participants, however, compliance is difficult to measure and enforce',
          'Changes are made informally by strategy planning and budgeting owners with few formal controls, limited tracking, approval and notification',
          'Changes rarely occur and when they do occur, they are conducted in an informal manner with no traceability or formal approval process',
          'No Answer',
        ],
      },
    ],
  },
  Technology: {
    questions: [
      {
        question:
          'What types of tools are used by strategy, planning and budgeting participants to perform their work?',
        answers: [
          'Specially configured digital technologies with task management, goal setting, scenario planning, resourcing and budgeting functionality',
          'Collaborative project and task management technologies with general document management and document versioning functionality ',
          'Cloud based document technologies (e.g. Box) that store template-based strategy, plan and budget documents (e.g. spreadsheets)',
          'Email or off-line document exchange of non-template-based strategy, planning and budgeting documents (e.g. spreadsheets)',
          'No Answer',
        ],
      },
      {
        question:
          'How are strategy, planning and budgeting tools personalized to meet the needs and preferences of participants?',
        answers: [
          'They are company branded and styled with personalized, role-based, forms, views, navigation and click-paths that simplify and streamline user experience',
          'They are configured to the general needs of specific roles with role-based forms, views and navigation that standardizes user experience ',
          'Personalization consists of access and edit rights to shared documents',
          'The strategy, planning and budgeting user experience is the same for all ',
          'No Answer',
        ],
      },
      {
        question:
          'How do strategy, planning and budgeting tools reduce the amount of work required of participants?',
        answers: [
          'Tools reduce work by clarifying taskings, lowering the data entry burden, reducing the reporting effort, automating tracking, simplifying collaboration and reducing rework',
          'Tools simplify the user experience of entering and accessing strategy, planning and budgeting information',
          'Tools simplify the aggregation and analysis of strategy, planning and budgeting information ',
          'Tools used do not reduce the amount of work in the strategy, planning budgeting process ',
          'No Answer',
        ],
      },
      {
        question:
          'How do strategy, planning and budgeting tools track data values and changes over time?',
        answers: [
          'Tools actively manage changes at the field and value level with field level, validation, locking, tracking, versioning, reporting and notification',
          'Tools automatically track changes at the field and value level with field level journaling and notification ',
          'Tools provide document or record level journaling and versioning but provide no change control and do not track changes at the field level',
          'Tools do not track or control record or field level changes',
          'No Answer',
        ],
      },
      {
        question:
          'How do tools work together and exchange strategy, planning and budgeting data with each other?',
        answers: [
          'They provide a single unified user experience and data flows between them in near real-time',
          'They have different user experiences but are integrated at the data level ',
          'They have different user experiences and data must be re-entered in each tool',
          'Tools are not integrated and often contain different and conflicting information',
          'No Answer',
        ],
      },
      {
        question: 'How do SPB tools control quality and ensure compliance?',
        answers: [
          'Compliance is built into automated workflow and tracked by the system',
          'Compliance is considered in policy and procedure but not enforced by the system',
          'Compliance is simply a matter of using the correct strategy planning and budgeting document template',
          'Tools do not track or enforce compliance',
          'No Answer',
        ],
      },
    ],
  },
  Information: {
    questions: [
      {
        question:
          'How is internal performance, external insight and competitor information captured and used?',
        answers: [
          'Learning plans guide research and analytic monitoring that continually influences and guides strategy',
          'Research and analytics insights are periodically evaluated and may influence strategy',
          'Internal performance results occasionally impact and shift strategy',
          'External insights, signals and performance to plan rarely impact strategy',
          'No Answer',
        ],
      },
      {
        question:
          'How is strategy, planning and budgeting data sourced, integrated and linked?',
        answers: [
          'Data is collected, linked, and synchronized in strategy, planning and budgeting tools, data lakes and data warehouses',
          'Data is collected in a data lake but may not be linked and synchronized in strategy, planning and budgeting tools ',
          'Data is collected in documents and may be rolled up into master documents',
          'Data from strategy, planning and budgeting tools is not integrated or linked',
          'No Answer',
        ],
      },
      {
        question:
          'How is strategy, planning and budgeting data used in downstream systems?',
        answers: [
          'Data is used in performance monitoring, goal tracking, always-on analytics and closed loop learning',
          'Data is used to provide periodic reporting and on-demand analytics',
          'Data is used in manual performance to plan analysis',
          'Data is not commonly used or referenced after creation',
          'No Answer',
        ],
      },
      {
        question:
          'How is strategy, planning and budgeting data access controlled?',
        answers: [
          'Access to strategy, planning and budgeting data is tightly controlled in user tools and in reporting views with field level access control',
          'Access control is managed at the record, not field level independently in user tools and data repositories',
          'Access is controlled by managing rights to shared strategy, planning and budgeting documents',
          'There are no formal access controls to strategy, planning and budgeting data',
          'No Answer',
        ],
      },
      {
        question:
          'How is strategy, planning and budgeting information used in analytics?',
        answers: [
          'Data is used to continually monitor performance to plan and goals, and evaluate the need for strategy shift',
          'Data is used to periodically evaluate performance to plan at multiple level in the organization',
          'Data is used occasionally to monitor top level performance to plan',
          'Data is not commonly used in analytics',
          'No Answer',
        ],
      },
      {
        question:
          'How is historical strategy, planning and budgeting information used in strategy, planning and budgeting activities?',
        answers: [
          'Continuous strategy refinement and goal setting activities drive planning and budeting activities',
          'Historical budget data serves as the primary input for strategy and planning activities',
          'Historical strategy, planning and budgeting documents may be referenced when developing new strategy',
          'Historical strategy, planning and budgeting Information is rarely used or referenced after it is created',
          'No Answer',
        ],
      },
    ],
  },
};

export default FormData;
