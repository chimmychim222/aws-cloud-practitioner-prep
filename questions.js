// AWS Certified Cloud Practitioner (CLF-C02) Question Bank
// 400 questions distributed across all 4 domains

window.questionBank = [

  // ============================================================
  // DOMAIN 1: CLOUD CONCEPTS (24%) — 62 questions
  // Task 1.1: Benefits of AWS Cloud
  // ============================================================

  {
    id: 1,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-choice",
    question: "A company wants to avoid large upfront capital expenditures when launching new workloads. Which benefit of the AWS Cloud best addresses this requirement?",
    options: [
      "A) Trade fixed expense for variable expense",
      "B) Benefit from massive economies of scale",
      "C) Increase speed and agility",
      "D) Stop guessing capacity"
    ],
    correctAnswers: [0],
    explanation: "Trading fixed expense for variable expense means you pay only for what you consume instead of investing heavily in data centers before you know how much capacity you need. Economies of scale reduce per-unit cost but don't directly eliminate upfront capital. Speed/agility and capacity planning are separate benefits."
  },
  {
    id: 2,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-choice",
    question: "Which advantage of cloud computing allows AWS to offer lower pay-as-you-go prices compared to what most individual companies can achieve on their own?",
    options: [
      "A) Global infrastructure",
      "B) Economies of scale",
      "C) High availability",
      "D) Elasticity"
    ],
    correctAnswers: [1],
    explanation: "AWS aggregates usage from hundreds of thousands of customers, achieving higher economies of scale. This translates into lower pay-as-you-go prices. Global infrastructure is about geographic reach, high availability is about uptime, and elasticity is about scaling resources dynamically."
  },
  {
    id: 3,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-choice",
    question: "A startup needs to deploy its application in multiple geographic locations to serve users with low latency. Which AWS Cloud benefit makes this feasible without building physical data centers?",
    options: [
      "A) Elasticity",
      "B) Agility",
      "C) Global reach of AWS infrastructure",
      "D) Pay-as-you-go pricing"
    ],
    correctAnswers: [2],
    explanation: "AWS operates Regions and edge locations around the world. A startup can deploy globally in minutes using this existing infrastructure rather than building data centers. Elasticity refers to scaling, agility to speed of deployment, and pay-as-you-go to the pricing model."
  },
  {
    id: 4,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-choice",
    question: "An e-commerce company experiences a surge in traffic every holiday season. Which cloud benefit allows the company to automatically handle this fluctuation without over-provisioning?",
    options: [
      "A) Agility",
      "B) Elasticity",
      "C) Economies of scale",
      "D) Fault tolerance"
    ],
    correctAnswers: [1],
    explanation: "Elasticity is the ability to acquire resources as you need them and release them when you no longer need them. This allows the company to automatically scale up during holiday surges and scale down afterward. Agility relates to speed of innovation, economies of scale to cost, and fault tolerance to resilience."
  },
  {
    id: 5,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-choice",
    question: "Which benefit of the AWS Cloud allows a development team to experiment with new features and quickly roll back if they fail, with minimal cost?",
    options: [
      "A) High availability",
      "B) Elasticity",
      "C) Increased speed and agility",
      "D) Global infrastructure"
    ],
    correctAnswers: [2],
    explanation: "Increased speed and agility means teams can quickly spin up resources, test ideas, and tear them down if they don't work — all at a fraction of what it would cost on-premises. High availability is about uptime, elasticity about scaling, and global infrastructure about geographic reach."
  },
  {
    id: 6,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-choice",
    question: "A company currently maintains a data center and must plan hardware purchases 3-4 months in advance. Moving to AWS would help the company stop doing which of the following?",
    options: [
      "A) Paying for compute resources",
      "B) Guessing infrastructure capacity needs",
      "C) Managing security of their data",
      "D) Developing software applications"
    ],
    correctAnswers: [1],
    explanation: "One of the six advantages of cloud computing is to stop guessing capacity. With AWS, you can scale up or down as demand changes, eliminating the need to predict capacity months in advance. You still pay for resources, manage data security (shared responsibility), and develop applications."
  },
  {
    id: 7,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-response",
    question: "Which TWO of the following are advantages of cloud computing as defined by AWS? (Select TWO.)",
    options: [
      "A) Eliminate the need for IT staff entirely",
      "B) Go global in minutes",
      "C) Benefit from massive economies of scale",
      "D) Guarantee 100% uptime for all services",
      "E) Avoid all security responsibilities"
    ],
    correctAnswers: [1, 2],
    explanation: "Going global in minutes and benefiting from massive economies of scale are two of the six advantages of cloud computing listed by AWS. You still need IT staff (though in different roles), no service guarantees 100% uptime, and customers still share security responsibilities under the shared responsibility model."
  },
  {
    id: 8,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-choice",
    question: "Which cloud computing advantage enables a company to focus its engineering efforts on business-differentiating activities rather than managing hardware?",
    options: [
      "A) Benefit from massive economies of scale",
      "B) Stop spending money running and maintaining data centers",
      "C) Trade fixed expense for variable expense",
      "D) Increase speed and agility"
    ],
    correctAnswers: [1],
    explanation: "When you stop spending money running and maintaining data centers, your teams can focus on projects that differentiate your business instead of on infrastructure management. The other options describe different advantages: cost model shift, aggregate purchasing power, and faster innovation."
  },
  {
    id: 9,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-choice",
    question: "A company wants to ensure its application remains available even if a single data center experiences a failure. Which AWS Cloud concept supports this?",
    options: [
      "A) Elasticity",
      "B) High availability through multiple Availability Zones",
      "C) Pay-as-you-go pricing",
      "D) Economies of scale"
    ],
    correctAnswers: [1],
    explanation: "AWS Regions consist of multiple isolated Availability Zones. By deploying across multiple AZs, applications remain available even if one AZ (data center cluster) fails. Elasticity is about scaling, pay-as-you-go about billing, and economies of scale about cost reduction."
  },
  {
    id: 10,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-choice",
    question: "What does the concept of 'agility' mean in the context of AWS Cloud computing?",
    options: [
      "A) The ability to scale resources up and down automatically",
      "B) The ability to quickly develop, test, and launch applications",
      "C) The guarantee that services will never experience downtime",
      "D) The ability to pay only for resources that are consumed"
    ],
    correctAnswers: [1],
    explanation: "In the cloud context, agility refers to the speed at which you can develop, test, and launch applications. It reduces the time from idea to implementation. Automatic scaling is elasticity, guaranteed uptime is not achievable, and pay-per-use is a pricing model benefit."
  },

  // Task 1.2: Design principles / Well-Architected Framework

  {
    id: 11,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.2",
    type: "multiple-choice",
    question: "Which pillar of the AWS Well-Architected Framework focuses on running workloads effectively, gaining insight into operations, and continuously improving processes?",
    options: [
      "A) Security",
      "B) Reliability",
      "C) Operational Excellence",
      "D) Performance Efficiency"
    ],
    correctAnswers: [2],
    explanation: "Operational Excellence focuses on running and monitoring systems to deliver business value and continually improving supporting processes and procedures. Security focuses on protecting data, Reliability on recovery and meeting demand, and Performance Efficiency on using resources efficiently."
  },
  {
    id: 12,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.2",
    type: "multiple-choice",
    question: "A solutions architect wants to ensure an application can recover from infrastructure failures automatically. Which Well-Architected Framework pillar is most relevant?",
    options: [
      "A) Cost Optimization",
      "B) Reliability",
      "C) Sustainability",
      "D) Operational Excellence"
    ],
    correctAnswers: [1],
    explanation: "The Reliability pillar focuses on ensuring a workload performs its intended function correctly and consistently, including the ability to recover from failures and meet demand. Cost Optimization focuses on spending, Sustainability on environmental impact, and Operational Excellence on operations improvement."
  },
  {
    id: 13,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.2",
    type: "multiple-choice",
    question: "Which pillar of the Well-Architected Framework emphasizes protecting information, systems, and assets through risk assessment and mitigation strategies?",
    options: [
      "A) Reliability",
      "B) Security",
      "C) Performance Efficiency",
      "D) Operational Excellence"
    ],
    correctAnswers: [1],
    explanation: "The Security pillar focuses on protecting data, systems, and assets by leveraging cloud technologies and applying best practices for risk assessment and mitigation. Reliability is about fault tolerance, Performance Efficiency about resource usage, and Operational Excellence about operations."
  },
  {
    id: 14,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.2",
    type: "multiple-choice",
    question: "A team is selecting instance types and storage options to maximize throughput while minimizing waste. Which Well-Architected Framework pillar guides this decision?",
    options: [
      "A) Reliability",
      "B) Security",
      "C) Performance Efficiency",
      "D) Cost Optimization"
    ],
    correctAnswers: [2],
    explanation: "Performance Efficiency focuses on using IT and computing resources efficiently, including selecting the right resource types and sizes. While Cost Optimization also cares about waste, Performance Efficiency is specifically about using resources efficiently to meet system requirements."
  },
  {
    id: 15,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.2",
    type: "multiple-choice",
    question: "Which Well-Architected Framework pillar helps an organization avoid unnecessary costs and understand where money is being spent?",
    options: [
      "A) Performance Efficiency",
      "B) Sustainability",
      "C) Cost Optimization",
      "D) Operational Excellence"
    ],
    correctAnswers: [2],
    explanation: "The Cost Optimization pillar focuses on avoiding unnecessary costs, understanding spending, selecting the most appropriate and right number of resource types, and scaling to meet business needs without overspending."
  },
  {
    id: 16,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.2",
    type: "multiple-choice",
    question: "Which pillar of the AWS Well-Architected Framework addresses reducing the environmental impact of running cloud workloads?",
    options: [
      "A) Reliability",
      "B) Sustainability",
      "C) Cost Optimization",
      "D) Security"
    ],
    correctAnswers: [1],
    explanation: "The Sustainability pillar focuses on minimizing the environmental impacts of running cloud workloads. It includes guidance on energy consumption reduction, resource efficiency, and selecting efficient hardware. This was added as the sixth pillar of the framework."
  },
  {
    id: 17,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.2",
    type: "multiple-response",
    question: "Which THREE are pillars of the AWS Well-Architected Framework? (Select THREE.)",
    options: [
      "A) Operational Excellence",
      "B) Scalability",
      "C) Reliability",
      "D) Elasticity",
      "E) Security"
    ],
    correctAnswers: [0, 2, 4],
    explanation: "The six pillars of the AWS Well-Architected Framework are: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability. Scalability and Elasticity are cloud computing concepts but not named pillars of the framework."
  },
  {
    id: 18,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.2",
    type: "multiple-choice",
    question: "A design principle recommends that systems should automatically recover from failure. This principle aligns with which Well-Architected Framework pillar?",
    options: [
      "A) Operational Excellence",
      "B) Performance Efficiency",
      "C) Reliability",
      "D) Cost Optimization"
    ],
    correctAnswers: [2],
    explanation: "Automatic recovery from failure is a key design principle of the Reliability pillar. It involves monitoring workloads for key performance indicators and triggering automation when a threshold is breached to remediate issues automatically."
  },
  {
    id: 19,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.2",
    type: "multiple-choice",
    question: "Which design principle involves performing operations as code, including defining your entire infrastructure through code templates?",
    options: [
      "A) Security pillar — Automate security best practices",
      "B) Operational Excellence pillar — Perform operations as code",
      "C) Performance Efficiency pillar — Democratize advanced technologies",
      "D) Cost Optimization pillar — Implement cloud financial management"
    ],
    correctAnswers: [1],
    explanation: "Performing operations as code is a key design principle of the Operational Excellence pillar. It means you define your entire workload (applications, infrastructure) as code and update it with code, enabling automation and reducing human error."
  },
  {
    id: 20,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.2",
    type: "multiple-choice",
    question: "How many pillars does the AWS Well-Architected Framework have?",
    options: [
      "A) 4",
      "B) 5",
      "C) 6",
      "D) 7"
    ],
    correctAnswers: [2],
    explanation: "The AWS Well-Architected Framework has six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability. Sustainability was added as the sixth pillar."
  },

  // Task 1.3: Migration strategies

  {
    id: 21,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.3",
    type: "multiple-choice",
    question: "A company wants to move an application to AWS with minimal changes, running it on EC2 instances instead of on-premises servers. Which migration strategy is this?",
    options: [
      "A) Refactor",
      "B) Rehost (lift and shift)",
      "C) Replatform",
      "D) Retire"
    ],
    correctAnswers: [1],
    explanation: "Rehosting (lift and shift) involves moving an application to the cloud without making changes to it. The application is simply moved from on-premises servers to EC2 instances. Refactoring involves re-architecting, Replatforming involves minor optimizations, and Retiring means decommissioning."
  },
  {
    id: 22,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.3",
    type: "multiple-choice",
    question: "A company migrates its on-premises MySQL database to Amazon RDS MySQL without changing application code. Which migration strategy does this represent?",
    options: [
      "A) Rehost",
      "B) Replatform (lift, tinker, and shift)",
      "C) Refactor",
      "D) Repurchase"
    ],
    correctAnswers: [1],
    explanation: "Replatforming involves making a few cloud optimizations to achieve tangible benefit without changing the core architecture. Moving a self-managed MySQL to RDS MySQL leverages a managed service while keeping the same database engine. Rehosting would mean running MySQL on EC2. Refactoring would mean switching to a cloud-native database like DynamoDB."
  },
  {
    id: 23,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.3",
    type: "multiple-choice",
    question: "A company decides to replace its legacy CRM application with a SaaS-based CRM solution. Which migration strategy is being used?",
    options: [
      "A) Rehost",
      "B) Replatform",
      "C) Repurchase",
      "D) Retain"
    ],
    correctAnswers: [2],
    explanation: "Repurchase involves moving to a different product, typically by purchasing a SaaS solution to replace the existing application. Moving from a legacy CRM to a SaaS CRM is a classic repurchase scenario. Retain means keeping the application on-premises."
  },
  {
    id: 24,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.3",
    type: "multiple-choice",
    question: "During a migration assessment, a company identifies several applications that are no longer useful and will be decommissioned. Which migration strategy applies?",
    options: [
      "A) Retain",
      "B) Retire",
      "C) Rehost",
      "D) Repurchase"
    ],
    correctAnswers: [1],
    explanation: "Retire means removing applications that are no longer needed. During migration assessments, companies often discover IT assets that are no longer useful and can be turned off. This simplifies the migration and reduces costs. Retain means keeping something on-premises for now."
  },
  {
    id: 25,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.3",
    type: "multiple-choice",
    question: "A company re-architects its monolithic application into microservices running on AWS Lambda and Amazon DynamoDB. Which migration strategy is this?",
    options: [
      "A) Rehost",
      "B) Replatform",
      "C) Refactor / Re-architect",
      "D) Repurchase"
    ],
    correctAnswers: [2],
    explanation: "Refactoring (re-architecting) involves fundamentally changing how an application is designed and developed, typically using cloud-native features. Moving from a monolith to microservices on Lambda and DynamoDB is a significant re-architecture that leverages cloud-native services."
  },
  {
    id: 26,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.3",
    type: "multiple-choice",
    question: "Which AWS service is used to physically transport large amounts of data (up to petabytes) to AWS using a ruggedized shipping container?",
    options: [
      "A) AWS Direct Connect",
      "B) AWS DataSync",
      "C) AWS Snowball Edge",
      "D) Amazon Kinesis"
    ],
    correctAnswers: [2],
    explanation: "AWS Snowball Edge is a physical device shipped to your location for transferring large amounts of data to AWS. It is useful when network transfer would be too slow or expensive. Direct Connect is a dedicated network connection, DataSync transfers data over the network, and Kinesis is for streaming data."
  },
  {
    id: 27,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.3",
    type: "multiple-response",
    question: "Which TWO are migration strategies included in the 6 R's of cloud migration? (Select TWO.)",
    options: [
      "A) Rebuild",
      "B) Retain",
      "C) Rehost",
      "D) Resize",
      "E) Reallocate"
    ],
    correctAnswers: [1, 2],
    explanation: "The 6 R's of migration are: Rehost, Replatform, Refactor/Re-architect, Repurchase, Retain, and Retire. Rebuild, Resize, and Reallocate are not part of the standard 6 R's framework."
  },
  {
    id: 28,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.3",
    type: "multiple-choice",
    question: "The AWS Cloud Adoption Framework (AWS CAF) organizes guidance into several perspectives. Which perspective focuses on ensuring IT workloads meet business requirements?",
    options: [
      "A) Business perspective",
      "B) Platform perspective",
      "C) Governance perspective",
      "D) People perspective"
    ],
    correctAnswers: [2],
    explanation: "The Governance perspective focuses on maximizing business value and minimizing risk. It helps ensure that IT investments align with business strategy and that governance processes are in place. The Business perspective focuses on business outcomes, Platform on cloud architecture, and People on organizational change."
  },
  {
    id: 29,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.3",
    type: "multiple-choice",
    question: "A company has 100 TB of data to migrate to AWS. Network transfer would take several weeks. Which AWS Snow Family device is most appropriate for this volume?",
    options: [
      "A) AWS Snowcone",
      "B) AWS Snowball Edge",
      "C) AWS Snowmobile",
      "D) AWS DataSync"
    ],
    correctAnswers: [1],
    explanation: "AWS Snowball Edge can handle up to 80 TB per device and is ideal for transferring 100 TB of data. Multiple devices can be used. Snowcone is smaller (8-14 TB), Snowmobile is for exabyte-scale transfers (too large for 100 TB), and DataSync is a network-based transfer service."
  },
  {
    id: 30,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.3",
    type: "multiple-choice",
    question: "Which perspective of the AWS Cloud Adoption Framework (CAF) helps bridge the gap between business and IT by training and organizing staff for cloud adoption?",
    options: [
      "A) Business perspective",
      "B) People perspective",
      "C) Platform perspective",
      "D) Security perspective"
    ],
    correctAnswers: [1],
    explanation: "The People perspective focuses on evaluating organizational structures and roles, identifying new skills requirements, and managing change. It helps organizations bridge the gap between business and IT staff through training and organizational alignment."
  },
  {
    id: 31,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.3",
    type: "multiple-choice",
    question: "A company decides to keep some legacy applications on-premises because they are too complex to migrate right now. Which of the 6 R's describes this decision?",
    options: [
      "A) Retire",
      "B) Retain",
      "C) Rehost",
      "D) Replatform"
    ],
    correctAnswers: [1],
    explanation: "Retain means keeping certain applications in their current environment, typically because they are too complex to migrate right away or still require further assessment. Retire means decommissioning, while Rehost and Replatform involve actively migrating."
  },

  // Task 1.4: Cloud economics

  {
    id: 32,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.4",
    type: "multiple-choice",
    question: "A company's on-premises servers run at 15% average utilization. Which cloud economics concept best describes the financial benefit of moving to the cloud?",
    options: [
      "A) Benefit from massive economies of scale",
      "B) Right-sizing to match demand reduces wasted spend",
      "C) Trade fixed expense for variable expense",
      "D) Go global in minutes"
    ],
    correctAnswers: [1],
    explanation: "Right-sizing means matching instance types and sizes to workload requirements. When on-premises servers run at 15% utilization, most of the hardware investment is wasted. In the cloud, you can use smaller instances and scale as needed, eliminating that waste."
  },
  {
    id: 33,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.4",
    type: "multiple-choice",
    question: "When comparing the Total Cost of Ownership (TCO) of on-premises vs. cloud, which of the following is an often-overlooked on-premises cost that the cloud eliminates?",
    options: [
      "A) Application development costs",
      "B) Employee salaries for developers",
      "C) Data center facilities, power, and cooling costs",
      "D) Software licensing for third-party applications"
    ],
    correctAnswers: [2],
    explanation: "Data center facilities, power, cooling, and physical security are significant costs of running on-premises infrastructure that are eliminated when moving to the cloud. Application development and developer salaries exist in both models. Third-party licensing may still apply in the cloud."
  },
  {
    id: 34,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.4",
    type: "multiple-choice",
    question: "Which statement correctly describes the cloud cost model compared to traditional on-premises?",
    options: [
      "A) Cloud computing always costs more than on-premises in the long run",
      "B) Cloud computing replaces capital expenditure (CapEx) with operational expenditure (OpEx)",
      "C) On-premises computing has no upfront costs",
      "D) Cloud computing requires multi-year hardware purchase commitments"
    ],
    correctAnswers: [1],
    explanation: "Cloud computing shifts IT spending from capital expenditure (buying hardware) to operational expenditure (paying for what you use). This eliminates the need for large upfront investments. On-premises always has upfront costs, and cloud doesn't require hardware purchase commitments."
  },
  {
    id: 35,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.4",
    type: "multiple-choice",
    question: "A company is evaluating whether to move to the cloud. They want to compare the total cost of running infrastructure on-premises versus on AWS. Which tool should they use?",
    options: [
      "A) AWS Cost Explorer",
      "B) AWS Pricing Calculator",
      "C) AWS Budgets",
      "D) AWS Trusted Advisor"
    ],
    correctAnswers: [1],
    explanation: "The AWS Pricing Calculator helps estimate the cost of AWS services for a given workload, which can then be compared against on-premises costs for a TCO analysis. Cost Explorer analyzes existing AWS spend, Budgets sets spending alerts, and Trusted Advisor provides optimization recommendations."
  },
  {
    id: 36,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.4",
    type: "multiple-choice",
    question: "Which of the following is a benefit of cloud computing that reduces the need for long-term hardware procurement planning?",
    options: [
      "A) Fixed-cost contracts",
      "B) Variable expense model with on-demand resources",
      "C) Guaranteed lowest prices for all services",
      "D) Automatic software development"
    ],
    correctAnswers: [1],
    explanation: "The variable expense model lets you provision resources on demand without long-term hardware procurement. You pay only for what you use and can adjust instantly. Cloud does not offer fixed-cost contracts as its primary model, doesn't guarantee lowest prices universally, and doesn't automate software development."
  },
  {
    id: 37,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.4",
    type: "multiple-response",
    question: "Which TWO cost-related factors should be included when calculating the Total Cost of Ownership (TCO) for on-premises infrastructure? (Select TWO.)",
    options: [
      "A) AWS Lambda invocation costs",
      "B) Server hardware depreciation",
      "C) Physical security and facility maintenance",
      "D) Amazon S3 storage costs",
      "E) AWS Support plan fees"
    ],
    correctAnswers: [1, 2],
    explanation: "TCO for on-premises includes hardware depreciation and facility costs such as physical security, power, cooling, and maintenance. AWS Lambda, S3 storage, and AWS Support fees are cloud costs, not on-premises costs."
  },
  {
    id: 38,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.4",
    type: "multiple-choice",
    question: "A company uses software licensed per physical CPU core on-premises. When moving to AWS, how can they optimize licensing costs?",
    options: [
      "A) AWS does not support any commercial software licenses",
      "B) They can use the AWS License Manager and consider Bring Your Own License (BYOL) options",
      "C) All software licenses are automatically included free with EC2",
      "D) They must purchase entirely new licenses from AWS Marketplace only"
    ],
    correctAnswers: [1],
    explanation: "AWS License Manager helps manage software licenses and supports Bring Your Own License (BYOL) arrangements. Many commercial software vendors allow their licenses to be used on AWS, and License Manager tracks compliance. Not all licenses are free or unavailable; it depends on the vendor agreement."
  },
  {
    id: 39,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.4",
    type: "multiple-choice",
    question: "Which of the following best describes the difference between Capital Expenditure (CapEx) and Operational Expenditure (OpEx)?",
    options: [
      "A) CapEx is a recurring monthly payment; OpEx is a one-time payment",
      "B) CapEx is an upfront investment in physical assets; OpEx is ongoing spending on services and operations",
      "C) CapEx applies only to cloud computing; OpEx applies only to on-premises",
      "D) There is no difference between CapEx and OpEx"
    ],
    correctAnswers: [1],
    explanation: "Capital Expenditure (CapEx) is money spent on physical assets like servers and data centers — an upfront investment. Operational Expenditure (OpEx) is ongoing operational spending such as cloud service fees. Cloud computing primarily uses OpEx, while on-premises primarily uses CapEx."
  },
  {
    id: 40,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.4",
    type: "multiple-choice",
    question: "A company has unpredictable workloads that vary significantly from week to week. Which cloud economic benefit is MOST relevant?",
    options: [
      "A) Dedicated Host pricing",
      "B) Pay only for what you use with on-demand pricing",
      "C) Annual upfront Reserved Instance pricing",
      "D) Long-term data center leasing"
    ],
    correctAnswers: [1],
    explanation: "For unpredictable workloads, on-demand pay-as-you-go pricing is most beneficial because you only pay for resources when they are used. Reserved Instances and Dedicated Hosts require commitments that don't suit unpredictable demand. Data center leasing is an on-premises model."
  },

  // Additional Domain 1 questions to reach ~62

  {
    id: 41,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-choice",
    question: "Which cloud computing model allows users to access applications over the internet without managing any underlying infrastructure or platform?",
    options: [
      "A) Infrastructure as a Service (IaaS)",
      "B) Platform as a Service (PaaS)",
      "C) Software as a Service (SaaS)",
      "D) Function as a Service (FaaS)"
    ],
    correctAnswers: [2],
    explanation: "Software as a Service (SaaS) provides a complete application managed by the provider. Users only interact with the software. IaaS gives access to fundamental computing resources, PaaS provides a platform for developing applications, and FaaS is a subset of serverless computing."
  },
  {
    id: 42,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-choice",
    question: "Which cloud deployment model uses a combination of on-premises infrastructure and cloud services, connected by a network?",
    options: [
      "A) Public cloud",
      "B) Private cloud",
      "C) Hybrid cloud",
      "D) Multi-cloud"
    ],
    correctAnswers: [2],
    explanation: "A hybrid cloud deployment connects on-premises infrastructure (or a private cloud) to public cloud resources. This allows organizations to extend their existing infrastructure to the cloud. Public cloud is entirely cloud-based, private cloud is entirely on-premises or dedicated, and multi-cloud uses multiple cloud providers."
  },
  {
    id: 43,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.2",
    type: "multiple-choice",
    question: "Which Well-Architected Framework design principle recommends making frequent, small, reversible changes to a workload?",
    options: [
      "A) Anticipate failure",
      "B) Make frequent, small, reversible changes",
      "C) Use serverless architectures",
      "D) Automate with architectural experimentation in mind"
    ],
    correctAnswers: [1],
    explanation: "Making frequent, small, reversible changes is a design principle of the Operational Excellence pillar. Small changes are easier to understand, test, and reverse if needed, reducing the risk and impact of any single change."
  },
  {
    id: 44,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.2",
    type: "multiple-choice",
    question: "The AWS Well-Architected Tool helps organizations do which of the following?",
    options: [
      "A) Automatically migrate workloads to AWS",
      "B) Review workloads against architectural best practices and identify areas for improvement",
      "C) Deploy infrastructure using code templates",
      "D) Monitor application performance in real time"
    ],
    correctAnswers: [1],
    explanation: "The AWS Well-Architected Tool helps you review the state of your workloads against architectural best practices. It identifies areas for improvement across the six pillars. It does not migrate workloads, deploy infrastructure, or monitor performance in real time."
  },
  {
    id: 45,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-choice",
    question: "Which type of cloud computing service gives you the most control over the underlying IT resources?",
    options: [
      "A) Software as a Service (SaaS)",
      "B) Platform as a Service (PaaS)",
      "C) Infrastructure as a Service (IaaS)",
      "D) Desktop as a Service (DaaS)"
    ],
    correctAnswers: [2],
    explanation: "Infrastructure as a Service (IaaS) provides the highest level of flexibility and management control over IT resources. It is the closest to traditional on-premises IT. Amazon EC2 is an example of IaaS. SaaS gives the least control, PaaS provides a managed platform, and DaaS provides virtual desktops."
  },
  {
    id: 46,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.3",
    type: "multiple-choice",
    question: "Which AWS service provides a secure way to transfer data into and out of AWS using a small, portable, rugged edge computing device?",
    options: [
      "A) AWS Snowball Edge",
      "B) AWS Snowcone",
      "C) AWS Snowmobile",
      "D) AWS Transfer Family"
    ],
    correctAnswers: [1],
    explanation: "AWS Snowcone is the smallest member of the Snow Family. It is a small, portable, rugged device for edge computing and data transfer weighing about 4.5 lbs. Snowball Edge is larger, Snowmobile is a shipping container-sized device, and Transfer Family is for file transfer protocols."
  },
  {
    id: 47,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.4",
    type: "multiple-choice",
    question: "A company has predictable and steady-state workloads running 24/7. Which purchasing approach offers the greatest savings compared to On-Demand pricing?",
    options: [
      "A) Spot Instances",
      "B) Reserved Instances or Savings Plans with upfront payment",
      "C) On-Demand Instances",
      "D) Dedicated Hosts"
    ],
    correctAnswers: [1],
    explanation: "For predictable, steady-state workloads, Reserved Instances or Savings Plans with upfront payment offer the greatest savings (up to 72% compared to On-Demand). Spot Instances offer higher savings but can be interrupted. On-Demand is the most expensive, and Dedicated Hosts are for compliance needs."
  },
  {
    id: 48,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-response",
    question: "Which TWO are characteristics of cloud computing? (Select TWO.)",
    options: [
      "A) On-demand self-service",
      "B) Requires long-term contracts for all services",
      "C) Broad network access",
      "D) Limited to a single geographic location",
      "E) Manual capacity provisioning only"
    ],
    correctAnswers: [0, 2],
    explanation: "On-demand self-service and broad network access are essential characteristics of cloud computing as defined by NIST. Cloud computing does not require long-term contracts, is available globally, and supports automated provisioning."
  },
  {
    id: 49,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.2",
    type: "multiple-choice",
    question: "A company wants to implement the principle of least privilege across all its cloud resources. This aligns with which Well-Architected Framework pillar?",
    options: [
      "A) Operational Excellence",
      "B) Security",
      "C) Cost Optimization",
      "D) Reliability"
    ],
    correctAnswers: [1],
    explanation: "The principle of least privilege — granting only the minimum permissions needed to perform a task — is a fundamental design principle of the Security pillar. It helps protect data and systems by limiting access to what is strictly necessary."
  },
  {
    id: 50,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.3",
    type: "multiple-response",
    question: "Which THREE are perspectives in the AWS Cloud Adoption Framework (CAF)? (Select THREE.)",
    options: [
      "A) Business",
      "B) Security",
      "C) Migration",
      "D) Platform",
      "E) Automation"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "The AWS CAF has six perspectives: Business, People, Governance, Platform, Security, and Operations. Migration and Automation are not named perspectives in the CAF, though migration is the overall goal the CAF supports."
  },
  {
    id: 51,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.4",
    type: "multiple-choice",
    question: "Which of the following is NOT a factor typically considered when calculating Total Cost of Ownership (TCO) for on-premises infrastructure?",
    options: [
      "A) Server hardware costs",
      "B) Data center rent and utilities",
      "C) AWS CloudWatch monitoring fees",
      "D) IT staff salaries for hardware maintenance"
    ],
    correctAnswers: [2],
    explanation: "AWS CloudWatch monitoring fees are a cloud cost, not an on-premises cost. TCO for on-premises typically includes server hardware, data center rent, utilities (power and cooling), IT staff salaries, network equipment, and software licensing."
  },
  {
    id: 52,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-choice",
    question: "A company needs to respond rapidly to changing market conditions by deploying new applications in days instead of months. Which cloud benefit enables this?",
    options: [
      "A) Economies of scale",
      "B) High availability",
      "C) Agility",
      "D) Cost optimization"
    ],
    correctAnswers: [2],
    explanation: "Agility in cloud computing means the ability to rapidly develop, test, and launch applications. Resources can be provisioned in minutes, enabling companies to respond to market changes in days rather than the months required for on-premises procurement."
  },
  {
    id: 53,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.2",
    type: "multiple-choice",
    question: "Which Reliability pillar design principle recommends testing recovery procedures to ensure the system can recover from failures?",
    options: [
      "A) Automatically recover from failure",
      "B) Test recovery procedures",
      "C) Scale horizontally to increase aggregate workload availability",
      "D) Stop guessing capacity"
    ],
    correctAnswers: [1],
    explanation: "Testing recovery procedures is a design principle of the Reliability pillar. In the cloud, you can simulate failures and test your recovery processes, something that is difficult and risky to do on-premises. This validates that your workload can recover as expected."
  },
  {
    id: 54,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.4",
    type: "multiple-choice",
    question: "Which of the following helps explain why AWS can offer services at lower prices than most individual companies can achieve on their own?",
    options: [
      "A) AWS has fewer customers than most enterprises",
      "B) AWS passes the savings from aggregated customer usage back to customers as lower prices",
      "C) AWS does not invest in data center infrastructure",
      "D) AWS charges higher prices to enterprise customers to subsidize small customers"
    ],
    correctAnswers: [1],
    explanation: "AWS achieves massive economies of scale from aggregated usage across hundreds of thousands of customers worldwide. These efficiencies translate into lower prices. AWS invests heavily in infrastructure but spreads the cost across its enormous customer base."
  },
  {
    id: 55,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-choice",
    question: "What is the primary difference between scalability and elasticity in cloud computing?",
    options: [
      "A) They are the same thing",
      "B) Scalability is the ability to grow resources; elasticity is the ability to grow AND shrink resources automatically based on demand",
      "C) Elasticity only applies to storage; scalability applies to compute",
      "D) Scalability is automatic; elasticity requires manual intervention"
    ],
    correctAnswers: [1],
    explanation: "Scalability is the ability of a system to handle growing amounts of load by adding resources. Elasticity adds the concept of automatically scaling both up AND down based on actual demand. Elasticity ensures you don't overpay during low-demand periods."
  },
  {
    id: 56,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.3",
    type: "multiple-choice",
    question: "Which AWS CAF perspective focuses on structuring and operating your cloud environment using best practices for cloud architecture?",
    options: [
      "A) Operations perspective",
      "B) People perspective",
      "C) Platform perspective",
      "D) Business perspective"
    ],
    correctAnswers: [2],
    explanation: "The Platform perspective focuses on designing, implementing, and optimizing the cloud environment architecture. It addresses principles and patterns for implementing new solutions and migrating existing workloads. Operations focuses on day-to-day management, People on change management, and Business on business outcomes."
  },
  {
    id: 57,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-choice",
    question: "Fault tolerance in the AWS Cloud means which of the following?",
    options: [
      "A) The system never experiences any hardware failures",
      "B) The system can continue operating properly even when some components fail",
      "C) The system only runs during business hours to avoid failures",
      "D) The system automatically deletes failed components permanently"
    ],
    correctAnswers: [1],
    explanation: "Fault tolerance is the ability of a system to continue operating properly in the event of the failure of some of its components. AWS achieves this through redundancy, such as deploying across multiple Availability Zones. Hardware failures still occur, but the system is designed to handle them."
  },
  {
    id: 58,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.2",
    type: "multiple-response",
    question: "Which TWO design principles belong to the Cost Optimization pillar of the Well-Architected Framework? (Select TWO.)",
    options: [
      "A) Implement cloud financial management",
      "B) Adopt a consumption model",
      "C) Protect data in transit and at rest",
      "D) Scale horizontally to increase availability",
      "E) Perform operations as code"
    ],
    correctAnswers: [0, 1],
    explanation: "Implementing cloud financial management and adopting a consumption model (pay for what you use) are Cost Optimization design principles. Protecting data is Security, scaling horizontally is Reliability, and performing operations as code is Operational Excellence."
  },
  {
    id: 59,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.4",
    type: "multiple-choice",
    question: "A company is running oversized EC2 instances that are using only 10% of their CPU capacity. Which cost optimization strategy should they implement first?",
    options: [
      "A) Purchase Reserved Instances for the current instance sizes",
      "B) Right-size the instances to match actual workload requirements",
      "C) Move all workloads to Spot Instances",
      "D) Move all workloads to AWS Lambda"
    ],
    correctAnswers: [1],
    explanation: "Right-sizing should be done first — reducing instance sizes to match actual requirements eliminates waste immediately. Purchasing Reserved Instances for oversized instances would lock in wasteful spending. Spot Instances may not suit all workloads, and Lambda requires application re-architecture."
  },
  {
    id: 60,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-choice",
    question: "Which of the following is an example of a Platform as a Service (PaaS) offering on AWS?",
    options: [
      "A) Amazon EC2",
      "B) AWS Elastic Beanstalk",
      "C) Amazon S3",
      "D) Amazon VPC"
    ],
    correctAnswers: [1],
    explanation: "AWS Elastic Beanstalk is a PaaS offering that handles infrastructure provisioning, load balancing, scaling, and monitoring while you simply upload your code. EC2 is IaaS, S3 is a storage service, and VPC is a networking service."
  },
  {
    id: 61,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.3",
    type: "multiple-choice",
    question: "An organization wants to move all its data and applications to the cloud and shut down its on-premises data center entirely. Which cloud deployment model will they be using?",
    options: [
      "A) Hybrid cloud",
      "B) On-premises (private cloud)",
      "C) Cloud-based (all-in cloud)",
      "D) Multi-cloud"
    ],
    correctAnswers: [2],
    explanation: "A cloud-based (all-in cloud) deployment means running all parts of the application in the cloud. If shutting down the on-premises data center entirely, the company is going all-in on the cloud. Hybrid keeps some resources on-premises, and multi-cloud uses multiple cloud providers."
  },
  {
    id: 62,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.4",
    type: "multiple-choice",
    question: "Which statement about on-premises costs versus cloud costs is accurate?",
    options: [
      "A) On-premises always has lower total cost than cloud",
      "B) Cloud computing eliminates ALL IT costs",
      "C) On-premises requires upfront capital investment while cloud uses a pay-as-you-go operational model",
      "D) Cloud computing requires more physical data center maintenance than on-premises"
    ],
    correctAnswers: [2],
    explanation: "On-premises requires significant upfront capital investment in hardware, facilities, and staff. Cloud computing uses a pay-as-you-go model that converts these to operational expenses. Cloud does not eliminate all IT costs, and the total cost comparison varies by workload."
  },

  // ============================================================
  // DOMAIN 2: SECURITY AND COMPLIANCE (30%) — 78 questions
  // Task 2.1: Shared Responsibility Model
  // ============================================================

  {
    id: 63,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.1",
    type: "multiple-choice",
    question: "Under the AWS Shared Responsibility Model, which of the following is the customer's responsibility?",
    options: [
      "A) Patching the hypervisor on EC2 host machines",
      "B) Managing security group rules for EC2 instances",
      "C) Physical security of AWS data centers",
      "D) Maintaining the global network infrastructure"
    ],
    correctAnswers: [1],
    explanation: "Customers are responsible for managing security group rules, which control inbound and outbound traffic to EC2 instances. AWS is responsible for the hypervisor, physical security of data centers, and the global network infrastructure."
  },
  {
    id: 64,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.1",
    type: "multiple-choice",
    question: "Under the Shared Responsibility Model, who is responsible for patching the operating system on an Amazon EC2 instance?",
    options: [
      "A) AWS",
      "B) The customer",
      "C) Both AWS and the customer equally",
      "D) Neither — it is handled automatically"
    ],
    correctAnswers: [1],
    explanation: "When using EC2 (IaaS), the customer is responsible for patching and maintaining the guest operating system, including security patches. AWS manages the underlying infrastructure and hypervisor. This is a key distinction in the shared responsibility model."
  },
  {
    id: 65,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.1",
    type: "multiple-choice",
    question: "Which of the following is AWS responsible for under the Shared Responsibility Model?",
    options: [
      "A) Configuring firewall rules for applications",
      "B) Encrypting customer data at rest",
      "C) Physical security of the hardware infrastructure",
      "D) Managing IAM user permissions"
    ],
    correctAnswers: [2],
    explanation: "AWS is responsible for the security OF the cloud, which includes physical security of data centers, hardware, networking, and the virtualization layer. Customers are responsible for firewall rules, data encryption choices, and IAM management."
  },
  {
    id: 66,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.1",
    type: "multiple-choice",
    question: "When using AWS Lambda, who is responsible for patching the underlying operating system?",
    options: [
      "A) The customer",
      "B) AWS",
      "C) A third-party vendor",
      "D) The customer must patch it using SSH"
    ],
    correctAnswers: [1],
    explanation: "AWS Lambda is a serverless service where AWS manages the infrastructure, including the operating system, runtime environment, and patching. The customer is only responsible for their function code and configuration. This is how the shared responsibility model shifts for managed/serverless services."
  },
  {
    id: 67,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.1",
    type: "multiple-response",
    question: "Which TWO are customer responsibilities under the Shared Responsibility Model? (Select TWO.)",
    options: [
      "A) Managing the physical facilities where servers are hosted",
      "B) Configuring encryption for data stored in Amazon S3",
      "C) Patching the guest operating system on EC2 instances",
      "D) Replacing failed hard drives in AWS data centers",
      "E) Managing the AWS global backbone network"
    ],
    correctAnswers: [1, 2],
    explanation: "Customers are responsible for encrypting their data (security IN the cloud) and patching guest operating systems on EC2. AWS handles physical facilities, hardware replacement, and the global network (security OF the cloud)."
  },
  {
    id: 68,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.1",
    type: "multiple-choice",
    question: "How does the Shared Responsibility Model change when a customer uses Amazon RDS instead of running a database on EC2?",
    options: [
      "A) The customer takes on more responsibility with RDS",
      "B) AWS takes on more responsibility, including OS patching and database engine patching",
      "C) The responsibilities remain exactly the same",
      "D) AWS becomes responsible for the customer's data and queries"
    ],
    correctAnswers: [1],
    explanation: "With managed services like RDS, AWS takes on more operational responsibility including OS patching and database engine patching. The customer is still responsible for their data, query optimization, security group configuration, and access management. Responsibility shifts toward AWS as you use more managed services."
  },
  {
    id: 69,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.1",
    type: "multiple-choice",
    question: "In the Shared Responsibility Model, 'security OF the cloud' refers to responsibilities belonging to whom?",
    options: [
      "A) The customer",
      "B) AWS",
      "C) Third-party auditors",
      "D) Both the customer and AWS equally"
    ],
    correctAnswers: [1],
    explanation: "Security OF the cloud is AWS's responsibility. This includes protecting the infrastructure (hardware, software, networking, and facilities) that runs AWS Cloud services. The customer handles security IN the cloud, which includes their data, applications, and configurations."
  },
  {
    id: 70,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.1",
    type: "multiple-choice",
    question: "A customer stores sensitive files in Amazon S3 but does not enable encryption. Under the Shared Responsibility Model, who is responsible for this security gap?",
    options: [
      "A) AWS, because they should encrypt everything automatically",
      "B) The customer, because data encryption configuration is a customer responsibility",
      "C) Neither — S3 data cannot be encrypted",
      "D) The AWS account manager assigned to the customer"
    ],
    correctAnswers: [1],
    explanation: "Under the Shared Responsibility Model, the customer is responsible for managing their data, including encryption. While AWS provides the tools and features for encryption (like SSE-S3, SSE-KMS), the customer must configure and enable them. Note: S3 now encrypts objects by default with SSE-S3, but the responsibility principle remains."
  },

  // Task 2.2: Security, governance, and compliance

  {
    id: 71,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which AWS service provides on-demand access to AWS compliance reports and select online agreements?",
    options: [
      "A) AWS CloudTrail",
      "B) AWS Artifact",
      "C) Amazon Inspector",
      "D) AWS Config"
    ],
    correctAnswers: [1],
    explanation: "AWS Artifact is the go-to central resource for compliance-related information. It provides on-demand access to AWS security and compliance reports (like SOC reports, PCI DSS) and select online agreements. CloudTrail logs API calls, Inspector assesses vulnerabilities, and Config tracks resource configurations."
  },
  {
    id: 72,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which AWS service records API calls made on your account and delivers log files for auditing purposes?",
    options: [
      "A) Amazon CloudWatch",
      "B) AWS CloudTrail",
      "C) AWS Config",
      "D) Amazon GuardDuty"
    ],
    correctAnswers: [1],
    explanation: "AWS CloudTrail records API calls for your AWS account, including who made the call, when, from where, and what was requested. This is essential for security auditing and compliance. CloudWatch monitors metrics and logs, Config tracks resource configuration, and GuardDuty is for threat detection."
  },
  {
    id: 73,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which AWS service continuously monitors your AWS resources and evaluates their configurations against desired settings?",
    options: [
      "A) AWS CloudTrail",
      "B) Amazon Inspector",
      "C) AWS Config",
      "D) AWS Trusted Advisor"
    ],
    correctAnswers: [2],
    explanation: "AWS Config continuously monitors and records resource configurations and allows you to evaluate them against desired configurations using Config rules. CloudTrail tracks API calls, Inspector scans for vulnerabilities, and Trusted Advisor provides best-practice recommendations."
  },
  {
    id: 74,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which AWS service uses machine learning to analyze and detect potential security threats across your AWS accounts?",
    options: [
      "A) AWS Shield",
      "B) Amazon GuardDuty",
      "C) AWS WAF",
      "D) Amazon Macie"
    ],
    correctAnswers: [1],
    explanation: "Amazon GuardDuty is a threat detection service that uses machine learning, anomaly detection, and integrated threat intelligence to identify potential security threats. It analyzes CloudTrail logs, VPC Flow Logs, and DNS logs. Shield protects against DDoS, WAF filters web traffic, and Macie discovers sensitive data."
  },
  {
    id: 75,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "A company needs to assess the security of its EC2 instances by scanning for software vulnerabilities and unintended network exposure. Which service should they use?",
    options: [
      "A) Amazon GuardDuty",
      "B) Amazon Inspector",
      "C) AWS Artifact",
      "D) AWS CloudTrail"
    ],
    correctAnswers: [1],
    explanation: "Amazon Inspector automatically assesses EC2 instances, container images, and Lambda functions for software vulnerabilities and unintended network exposure. GuardDuty detects threats, Artifact provides compliance reports, and CloudTrail logs API activity."
  },
  {
    id: 76,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which AWS service provides protection against DDoS (Distributed Denial of Service) attacks?",
    options: [
      "A) Amazon GuardDuty",
      "B) AWS WAF",
      "C) AWS Shield",
      "D) Amazon Inspector"
    ],
    correctAnswers: [2],
    explanation: "AWS Shield provides managed DDoS protection. Shield Standard is automatically included at no extra cost and protects against common DDoS attacks. Shield Advanced provides enhanced detection and 24/7 access to the DDoS Response Team. WAF filters web application traffic, GuardDuty detects threats, and Inspector scans for vulnerabilities."
  },
  {
    id: 77,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which service allows you to manage encryption keys used to encrypt your data across AWS services?",
    options: [
      "A) AWS Certificate Manager",
      "B) AWS Key Management Service (KMS)",
      "C) AWS Secrets Manager",
      "D) AWS CloudHSM"
    ],
    correctAnswers: [1],
    explanation: "AWS Key Management Service (KMS) lets you create and manage encryption keys for encrypting data across AWS services. Certificate Manager handles SSL/TLS certificates, Secrets Manager stores secrets like database credentials, and CloudHSM provides hardware security modules for key management."
  },
  {
    id: 78,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "A company wants to centrally view and manage security findings across multiple AWS services. Which service should they use?",
    options: [
      "A) Amazon CloudWatch",
      "B) AWS Security Hub",
      "C) AWS Config",
      "D) AWS CloudTrail"
    ],
    correctAnswers: [1],
    explanation: "AWS Security Hub provides a comprehensive view of your security state in AWS. It aggregates, organizes, and prioritizes security findings from services like GuardDuty, Inspector, Macie, and Firewall Manager. CloudWatch monitors metrics, Config tracks configurations, and CloudTrail logs API calls."
  },
  {
    id: 79,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-response",
    question: "Which TWO AWS services help with data encryption? (Select TWO.)",
    options: [
      "A) AWS Key Management Service (KMS)",
      "B) AWS CloudTrail",
      "C) AWS Certificate Manager (ACM)",
      "D) AWS Config",
      "E) Amazon CloudWatch"
    ],
    correctAnswers: [0, 2],
    explanation: "AWS KMS manages encryption keys for data at rest, and AWS Certificate Manager provisions and manages SSL/TLS certificates for encrypting data in transit. CloudTrail is for auditing, Config tracks resource configurations, and CloudWatch monitors operational metrics."
  },
  {
    id: 80,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which service helps discover and protect sensitive data (such as personally identifiable information) stored in Amazon S3?",
    options: [
      "A) Amazon GuardDuty",
      "B) Amazon Macie",
      "C) Amazon Inspector",
      "D) AWS Config"
    ],
    correctAnswers: [1],
    explanation: "Amazon Macie uses machine learning to automatically discover, classify, and protect sensitive data in Amazon S3, such as personally identifiable information (PII). GuardDuty detects threats, Inspector scans for vulnerabilities, and Config tracks resource configurations."
  },
  {
    id: 81,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "An auditor asks a company to prove that AWS meets certain security standards. Where can the company find AWS compliance certifications and audit reports?",
    options: [
      "A) AWS Trusted Advisor",
      "B) AWS CloudTrail",
      "C) AWS Artifact",
      "D) AWS Security Hub"
    ],
    correctAnswers: [2],
    explanation: "AWS Artifact provides access to AWS security and compliance documents such as SOC reports, ISO certifications, and PCI DSS attestations. Trusted Advisor gives optimization recommendations, CloudTrail logs API activity, and Security Hub aggregates security findings."
  },
  {
    id: 82,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which AWS service monitors your account for unusual API activity and can alert you to potentially unauthorized access?",
    options: [
      "A) Amazon CloudWatch Alarms",
      "B) AWS CloudTrail with Amazon EventBridge",
      "C) Amazon GuardDuty",
      "D) AWS Config"
    ],
    correctAnswers: [2],
    explanation: "Amazon GuardDuty continuously monitors for malicious activity and unauthorized behavior by analyzing CloudTrail events, VPC Flow Logs, and DNS logs. While CloudTrail logs activity and CloudWatch can set alarms, GuardDuty specifically uses ML to detect anomalous and potentially unauthorized activity."
  },

  // Task 2.3: Access management

  {
    id: 83,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "Which AWS Identity and Access Management (IAM) component defines a set of permissions for making AWS service requests?",
    options: [
      "A) IAM user",
      "B) IAM group",
      "C) IAM policy",
      "D) IAM role"
    ],
    correctAnswers: [2],
    explanation: "An IAM policy is a JSON document that defines permissions (what actions are allowed or denied on which resources). Policies are attached to users, groups, or roles to grant permissions. Users represent people, groups organize users, and roles provide temporary credentials."
  },
  {
    id: 84,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "A company wants an EC2 instance to access an S3 bucket without storing access keys on the instance. What should they use?",
    options: [
      "A) IAM user with access keys",
      "B) IAM role attached to the EC2 instance",
      "C) Root account credentials",
      "D) Security group rules"
    ],
    correctAnswers: [1],
    explanation: "An IAM role attached to an EC2 instance provides temporary security credentials that are automatically rotated. This eliminates the need to store long-term access keys on the instance. Using IAM users with access keys on instances is a security risk. Root account should never be used for applications, and security groups control network traffic, not API access."
  },
  {
    id: 85,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "What is the recommended best practice for securing the AWS root user account?",
    options: [
      "A) Use the root account for all daily administrative tasks",
      "B) Share root account credentials with the IT team for convenience",
      "C) Enable multi-factor authentication (MFA) and avoid using the root account for daily tasks",
      "D) Delete the root account after creating the first IAM user"
    ],
    correctAnswers: [2],
    explanation: "Best practice is to enable MFA on the root account, create IAM users for daily tasks, and only use root for tasks that specifically require it (like changing account settings). The root account cannot be deleted, should never be shared, and should not be used for routine operations."
  },
  {
    id: 86,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "Which IAM feature allows you to organize IAM users and apply permissions to them collectively?",
    options: [
      "A) IAM roles",
      "B) IAM policies",
      "C) IAM groups",
      "D) IAM identity providers"
    ],
    correctAnswers: [2],
    explanation: "IAM groups let you organize users and attach policies to the group. All users in the group inherit the group's permissions. This simplifies permission management. Roles provide temporary credentials, policies define permissions, and identity providers enable federated access."
  },
  {
    id: 87,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "Which principle states that users should be granted only the minimum permissions necessary to perform their job functions?",
    options: [
      "A) Separation of duties",
      "B) Defense in depth",
      "C) Principle of least privilege",
      "D) Zero trust architecture"
    ],
    correctAnswers: [2],
    explanation: "The principle of least privilege means granting only the permissions needed to perform a specific task and no more. This minimizes the potential impact if credentials are compromised. Separation of duties divides responsibilities, defense in depth uses multiple security layers, and zero trust verifies every request."
  },
  {
    id: 88,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "What is Multi-Factor Authentication (MFA) in the context of AWS IAM?",
    options: [
      "A) Using multiple IAM users to access a single resource",
      "B) Requiring a password plus a code from an authentication device to sign in",
      "C) Encrypting data with multiple encryption keys simultaneously",
      "D) Running the same workload across multiple AWS Regions"
    ],
    correctAnswers: [1],
    explanation: "MFA adds an extra layer of protection by requiring something you know (password) and something you have (a code from a hardware or virtual MFA device) to sign in. This significantly reduces the risk of unauthorized access even if passwords are compromised."
  },
  {
    id: 89,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "Which AWS service provides centralized access management for multiple AWS accounts and business applications using single sign-on?",
    options: [
      "A) IAM Identity Center (AWS SSO)",
      "B) Amazon Cognito",
      "C) AWS Directory Service",
      "D) IAM Access Analyzer"
    ],
    correctAnswers: [0],
    explanation: "IAM Identity Center (formerly AWS SSO) provides centralized access management and single sign-on for multiple AWS accounts and business applications. Cognito is for application user authentication, Directory Service manages Active Directory, and IAM Access Analyzer identifies unintended resource access."
  },
  {
    id: 90,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-response",
    question: "Which TWO actions are recommended best practices for the AWS root user? (Select TWO.)",
    options: [
      "A) Use the root user for daily administrative work",
      "B) Enable MFA on the root account",
      "C) Create access keys for the root user for programmatic access",
      "D) Use the root user only for tasks that require root access",
      "E) Share root credentials with the security team"
    ],
    correctAnswers: [1, 3],
    explanation: "Best practices for the root user are: enable MFA for additional security, and only use root for tasks that specifically require it (such as changing account settings or enabling certain services). Never use root for daily work, avoid creating root access keys, and never share root credentials."
  },
  {
    id: 91,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "An application running outside of AWS needs temporary credentials to access AWS resources. What is the best approach?",
    options: [
      "A) Create an IAM user and embed the access keys in the application code",
      "B) Use the root user credentials",
      "C) Use IAM roles with AWS Security Token Service (STS) to obtain temporary credentials",
      "D) Disable all authentication and make the resources public"
    ],
    correctAnswers: [2],
    explanation: "IAM roles with AWS STS provide temporary security credentials that expire automatically. This is more secure than embedding long-term access keys. Never embed access keys in code, never use root credentials for applications, and never make resources public to avoid authentication."
  },
  {
    id: 92,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "Which IAM policy effect explicitly prevents access to a resource, even if another policy grants access?",
    options: [
      "A) Allow",
      "B) Deny",
      "C) Neutral",
      "D) Override"
    ],
    correctAnswers: [1],
    explanation: "An explicit Deny in an IAM policy always overrides any Allow. This is known as the explicit deny principle. If any policy attached to a user has a Deny for an action, that action is denied regardless of what other policies say. There is no Neutral or Override effect in IAM."
  },

  // Task 2.4: Security resources

  {
    id: 93,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.4",
    type: "multiple-choice",
    question: "Which AWS networking feature acts as a virtual firewall at the instance level, controlling inbound and outbound traffic?",
    options: [
      "A) Network Access Control List (NACL)",
      "B) Security group",
      "C) AWS WAF",
      "D) Route table"
    ],
    correctAnswers: [1],
    explanation: "Security groups act as virtual firewalls at the instance level, controlling inbound and outbound traffic. They are stateful (return traffic is automatically allowed). NACLs operate at the subnet level, WAF protects web applications, and route tables control network traffic routing."
  },
  {
    id: 94,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.4",
    type: "multiple-choice",
    question: "Which AWS networking feature acts as a firewall at the subnet level and is stateless?",
    options: [
      "A) Security group",
      "B) Network Access Control List (NACL)",
      "C) AWS Shield",
      "D) Internet Gateway"
    ],
    correctAnswers: [1],
    explanation: "Network ACLs (NACLs) are stateless firewalls at the subnet level. Being stateless means they evaluate both inbound and outbound rules independently (you must explicitly allow return traffic). Security groups are stateful and operate at the instance level."
  },
  {
    id: 95,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.4",
    type: "multiple-choice",
    question: "What is the key difference between security groups and Network ACLs?",
    options: [
      "A) Security groups are stateless; NACLs are stateful",
      "B) Security groups operate at the subnet level; NACLs operate at the instance level",
      "C) Security groups are stateful and operate at the instance level; NACLs are stateless and operate at the subnet level",
      "D) There is no difference; they are the same service"
    ],
    correctAnswers: [2],
    explanation: "Security groups are stateful (return traffic automatically allowed) and operate at the instance/ENI level. NACLs are stateless (must explicitly allow return traffic) and operate at the subnet level. These are two complementary layers of network security in a VPC."
  },
  {
    id: 96,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.4",
    type: "multiple-choice",
    question: "Which AWS service allows you to create rules that filter web traffic based on conditions such as IP addresses, HTTP headers, and URI strings?",
    options: [
      "A) AWS Shield",
      "B) Amazon GuardDuty",
      "C) AWS WAF (Web Application Firewall)",
      "D) Security groups"
    ],
    correctAnswers: [2],
    explanation: "AWS WAF lets you create rules to filter and monitor HTTP/HTTPS requests forwarded to CloudFront, ALB, or API Gateway. You can block requests based on IP addresses, HTTP headers, request body content, and URI strings. Shield protects against DDoS, GuardDuty detects threats, and security groups filter network traffic at the instance level."
  },
  {
    id: 97,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.4",
    type: "multiple-choice",
    question: "AWS Trusted Advisor provides recommendations in several categories. Which of the following is one of those categories?",
    options: [
      "A) Application development",
      "B) Database optimization",
      "C) Security",
      "D) Machine learning"
    ],
    correctAnswers: [2],
    explanation: "AWS Trusted Advisor provides recommendations in five categories: cost optimization, performance, security, fault tolerance, and service limits. Security checks include items like unrestricted security group rules and MFA on root accounts. Application development, database optimization, and ML are not Trusted Advisor categories."
  },
  {
    id: 98,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.4",
    type: "multiple-choice",
    question: "Which AWS marketplace feature allows customers to find and deploy third-party security solutions?",
    options: [
      "A) AWS Config Rules",
      "B) AWS Marketplace security category listings",
      "C) Amazon Inspector marketplace",
      "D) AWS Shield Advanced marketplace"
    ],
    correctAnswers: [1],
    explanation: "AWS Marketplace includes a security category with third-party security solutions for firewalls, intrusion detection, vulnerability management, and more. Customers can find, purchase, and deploy these solutions directly. AWS Config Rules evaluate configurations, and Inspector/Shield are first-party AWS services."
  },
  {
    id: 99,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.4",
    type: "multiple-response",
    question: "Which TWO are features of security groups in AWS? (Select TWO.)",
    options: [
      "A) They are stateless",
      "B) They are stateful",
      "C) They support allow rules only",
      "D) They support both allow and deny rules",
      "E) They operate at the subnet level"
    ],
    correctAnswers: [1, 2],
    explanation: "Security groups are stateful (return traffic is automatically allowed) and support only allow rules (all traffic is denied by default). NACLs are stateless, support both allow and deny rules, and operate at the subnet level."
  },
  {
    id: 100,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.4",
    type: "multiple-choice",
    question: "A company wants to protect its web application from SQL injection and cross-site scripting (XSS) attacks. Which AWS service should they use?",
    options: [
      "A) AWS Shield Standard",
      "B) Security groups",
      "C) AWS WAF",
      "D) Network ACLs"
    ],
    correctAnswers: [2],
    explanation: "AWS WAF (Web Application Firewall) provides protection against common web exploits like SQL injection and XSS. It allows you to define rules that inspect web requests and block malicious ones. Shield protects against DDoS, and security groups/NACLs operate at the network layer, not the application layer."
  },

  // Additional Domain 2 questions

  {
    id: 101,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which service provides real-time monitoring of AWS resources and applications by collecting and tracking metrics?",
    options: [
      "A) AWS CloudTrail",
      "B) Amazon CloudWatch",
      "C) AWS Config",
      "D) AWS Artifact"
    ],
    correctAnswers: [1],
    explanation: "Amazon CloudWatch collects and tracks metrics, monitors log files, sets alarms, and automatically reacts to changes in AWS resources. CloudTrail logs API calls, Config tracks resource configurations, and Artifact provides compliance documents."
  },
  {
    id: 102,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "Which of the following allows federated users from a corporate directory to access AWS resources without creating individual IAM users?",
    options: [
      "A) IAM groups",
      "B) IAM identity federation",
      "C) IAM access keys",
      "D) IAM password policy"
    ],
    correctAnswers: [1],
    explanation: "IAM identity federation allows users from an external identity provider (like a corporate Active Directory) to access AWS resources using temporary credentials without needing individual IAM users. Groups organize existing IAM users, access keys are for API access, and password policies set password requirements."
  },
  {
    id: 103,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "A company needs to ensure that all S3 buckets in their account have encryption enabled. Which AWS service can automatically check this compliance requirement?",
    options: [
      "A) Amazon S3 Inventory",
      "B) AWS Config with Config rules",
      "C) AWS CloudTrail",
      "D) Amazon GuardDuty"
    ],
    correctAnswers: [1],
    explanation: "AWS Config rules can automatically evaluate whether resources comply with desired configurations. A Config rule can check if all S3 buckets have encryption enabled and flag non-compliant buckets. S3 Inventory lists objects, CloudTrail logs activity, and GuardDuty detects threats."
  },
  {
    id: 104,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.1",
    type: "multiple-choice",
    question: "Under the Shared Responsibility Model, which of the following is AWS responsible for when a customer uses Amazon S3?",
    options: [
      "A) Configuring S3 bucket policies",
      "B) Enabling S3 versioning",
      "C) The physical infrastructure hosting the S3 service",
      "D) Classifying data stored in S3"
    ],
    correctAnswers: [2],
    explanation: "AWS is responsible for the physical infrastructure (hardware, networking, facilities) that hosts S3. The customer is responsible for configuring bucket policies, enabling versioning, and classifying their data. This is the foundation of security OF the cloud vs. security IN the cloud."
  },
  {
    id: 105,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which AWS service can store and automatically rotate database credentials, API keys, and other secrets?",
    options: [
      "A) AWS KMS",
      "B) AWS Secrets Manager",
      "C) AWS Certificate Manager",
      "D) AWS Systems Manager Parameter Store"
    ],
    correctAnswers: [1],
    explanation: "AWS Secrets Manager is designed to store, retrieve, and automatically rotate secrets such as database credentials and API keys. KMS manages encryption keys, Certificate Manager handles SSL/TLS certificates, and Parameter Store can store configuration data but lacks native secret rotation."
  },
  {
    id: 106,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.4",
    type: "multiple-choice",
    question: "Which level of AWS Shield provides 24/7 access to the AWS DDoS Response Team (DRT) and cost protection for DDoS-related scaling?",
    options: [
      "A) AWS Shield Standard",
      "B) AWS Shield Advanced",
      "C) AWS Shield Enterprise",
      "D) AWS Shield Professional"
    ],
    correctAnswers: [1],
    explanation: "AWS Shield Advanced provides enhanced DDoS protection, 24/7 access to the DDoS Response Team (DRT), cost protection against DDoS-related scaling charges, and advanced monitoring. Shield Standard is free and automatic but offers basic protection only. There are no Enterprise or Professional tiers."
  },
  {
    id: 107,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "What is the best way to grant permissions to a group of developers who all need the same level of AWS access?",
    options: [
      "A) Attach the same IAM policy to each developer's IAM user individually",
      "B) Create an IAM group, add all developers to the group, and attach the policy to the group",
      "C) Share a single IAM user account among all developers",
      "D) Use the root account for all developers"
    ],
    correctAnswers: [1],
    explanation: "Creating an IAM group and attaching the policy to the group is the best practice. All users in the group inherit the group permissions. This is easier to manage than individual policies, more secure than sharing accounts, and the root account should never be shared."
  },
  {
    id: 108,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which AWS service helps you detect when an S3 bucket has been made publicly accessible?",
    options: [
      "A) Amazon Inspector",
      "B) AWS Config",
      "C) AWS Trusted Advisor",
      "D) Both B and C"
    ],
    correctAnswers: [3],
    explanation: "Both AWS Config (through config rules) and AWS Trusted Advisor (through security checks) can identify publicly accessible S3 buckets. Config continuously monitors resource configurations, and Trusted Advisor includes specific checks for S3 bucket permissions."
  },
  {
    id: 109,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-response",
    question: "Which TWO AWS services help with threat detection and security monitoring? (Select TWO.)",
    options: [
      "A) Amazon GuardDuty",
      "B) AWS Artifact",
      "C) AWS Security Hub",
      "D) AWS Pricing Calculator",
      "E) AWS Elastic Beanstalk"
    ],
    correctAnswers: [0, 2],
    explanation: "Amazon GuardDuty uses ML for threat detection across accounts, and AWS Security Hub aggregates security findings from multiple services into a centralized dashboard. Artifact is for compliance reports, Pricing Calculator estimates costs, and Elastic Beanstalk deploys applications."
  },
  {
    id: 110,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "Which IAM feature allows you to identify and review external access to resources shared across accounts?",
    options: [
      "A) IAM Access Analyzer",
      "B) IAM groups",
      "C) IAM password policy",
      "D) IAM MFA"
    ],
    correctAnswers: [0],
    explanation: "IAM Access Analyzer helps you identify resources in your organization and accounts that are shared with an external entity. It analyzes resource-based policies to identify unintended access. Groups organize users, password policy sets requirements, and MFA adds authentication factors."
  },
  {
    id: 111,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.4",
    type: "multiple-choice",
    question: "Which Trusted Advisor check category helps identify security groups with unrestricted access (0.0.0.0/0)?",
    options: [
      "A) Cost Optimization",
      "B) Performance",
      "C) Security",
      "D) Fault Tolerance"
    ],
    correctAnswers: [2],
    explanation: "The Security category of Trusted Advisor includes checks for unrestricted security group rules, which allow access from any IP (0.0.0.0/0). This can expose resources to the entire internet. Other categories focus on cost, performance, and resilience."
  },
  {
    id: 112,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which AWS service provides dedicated hardware security modules (HSMs) for managing your own encryption keys in the cloud?",
    options: [
      "A) AWS KMS",
      "B) AWS CloudHSM",
      "C) AWS Certificate Manager",
      "D) AWS Secrets Manager"
    ],
    correctAnswers: [1],
    explanation: "AWS CloudHSM provides dedicated hardware security modules in the AWS Cloud that let you generate and use your own encryption keys. CloudHSM gives you full control of the HSM, unlike KMS which is a shared managed service. Certificate Manager manages SSL/TLS certificates, and Secrets Manager stores secrets."
  },
  {
    id: 113,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.1",
    type: "multiple-choice",
    question: "When using an AWS managed service like Amazon DynamoDB, which of the following is the customer NOT responsible for?",
    options: [
      "A) Managing the data stored in DynamoDB tables",
      "B) Configuring access permissions for DynamoDB",
      "C) Patching the operating system that runs DynamoDB",
      "D) Choosing the data to store in DynamoDB"
    ],
    correctAnswers: [2],
    explanation: "DynamoDB is a fully managed service, so AWS handles the operating system, patching, and underlying infrastructure. The customer is responsible for managing their data, configuring access permissions, and choosing what data to store."
  },
  {
    id: 114,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.4",
    type: "multiple-choice",
    question: "A company wants to block traffic from specific countries to its web application. Which AWS service can help?",
    options: [
      "A) Security groups",
      "B) AWS WAF with geographic match conditions",
      "C) Network ACLs",
      "D) AWS Shield Standard"
    ],
    correctAnswers: [1],
    explanation: "AWS WAF supports geographic match conditions that allow you to block or allow requests based on the country of origin. Security groups and NACLs work with IP addresses but not geographic matching. Shield Standard provides basic DDoS protection, not geographic filtering."
  },
  {
    id: 115,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "Which of the following is a task that ONLY the root user can perform?",
    options: [
      "A) Creating an EC2 instance",
      "B) Changing the AWS account email address",
      "C) Creating an S3 bucket",
      "D) Launching a Lambda function"
    ],
    correctAnswers: [1],
    explanation: "Changing the AWS account email address is a task that can only be performed by the root user. Other root-only tasks include changing the account name, closing the account, and changing the support plan. Regular IAM users can create EC2 instances, S3 buckets, and Lambda functions if they have the appropriate permissions."
  },
  {
    id: 116,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which AWS feature allows you to encrypt data at rest in Amazon S3 using server-side encryption with AWS-managed keys?",
    options: [
      "A) SSE-S3",
      "B) Client-side encryption",
      "C) AWS WAF",
      "D) VPC encryption"
    ],
    correctAnswers: [0],
    explanation: "SSE-S3 (Server-Side Encryption with Amazon S3-Managed Keys) encrypts data at rest in S3 using keys managed by AWS. Each object is encrypted with a unique key, and that key is encrypted with a regularly rotated root key. Client-side encryption happens before upload, WAF is for web security, and there is no service called VPC encryption."
  },
  {
    id: 117,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.4",
    type: "multiple-response",
    question: "Which TWO statements about Network ACLs are correct? (Select TWO.)",
    options: [
      "A) Network ACLs are stateful",
      "B) Network ACLs operate at the subnet level",
      "C) Network ACLs support both allow and deny rules",
      "D) Network ACLs can only have allow rules",
      "E) Network ACLs operate at the instance level"
    ],
    correctAnswers: [1, 2],
    explanation: "Network ACLs operate at the subnet level and support both allow and deny rules. They are stateless (not stateful), meaning return traffic must be explicitly allowed by rules. Security groups operate at the instance level and only support allow rules."
  },
  {
    id: 118,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "A security team wants to receive alerts when someone logs into the AWS Management Console using the root account. Which combination of services should they use?",
    options: [
      "A) AWS Config and Amazon SNS",
      "B) AWS CloudTrail and Amazon EventBridge with SNS notifications",
      "C) Amazon GuardDuty and AWS WAF",
      "D) AWS Artifact and Amazon CloudWatch"
    ],
    correctAnswers: [1],
    explanation: "AWS CloudTrail logs all API calls including console sign-ins. Amazon EventBridge can create rules that trigger on specific CloudTrail events (like root login), and SNS can send notifications. Config tracks resource changes, WAF filters web traffic, and Artifact provides compliance reports."
  },
  {
    id: 119,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "An application needs to authenticate users who sign up with their email or through social identity providers like Google or Facebook. Which AWS service should be used?",
    options: [
      "A) IAM Identity Center",
      "B) Amazon Cognito",
      "C) AWS Directory Service",
      "D) IAM federation"
    ],
    correctAnswers: [1],
    explanation: "Amazon Cognito provides user sign-up, sign-in, and access control for web and mobile applications. It supports social identity providers (Google, Facebook, Apple) and enterprise identity providers via SAML 2.0. IAM Identity Center is for AWS account access, Directory Service manages AD, and IAM federation is for corporate identity providers."
  },
  {
    id: 120,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.1",
    type: "multiple-choice",
    question: "Which of the following is ALWAYS the customer's responsibility regardless of the AWS service used?",
    options: [
      "A) Patching the operating system",
      "B) Managing the physical infrastructure",
      "C) Managing customer data and access to it",
      "D) Maintaining the hypervisor"
    ],
    correctAnswers: [2],
    explanation: "Regardless of the AWS service used, the customer is always responsible for managing their data and controlling who has access to it. OS patching responsibility varies by service type (customer for EC2, AWS for Lambda). Physical infrastructure and hypervisor management are always AWS responsibilities."
  },
  {
    id: 121,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which compliance program validates that AWS meets the security requirements for handling credit card data?",
    options: [
      "A) HIPAA",
      "B) SOC 2",
      "C) PCI DSS",
      "D) FedRAMP"
    ],
    correctAnswers: [2],
    explanation: "PCI DSS (Payment Card Industry Data Security Standard) is the compliance program for handling credit card data. HIPAA is for healthcare data, SOC 2 is for service organization controls related to security and availability, and FedRAMP is for US government cloud security."
  },
  {
    id: 122,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.4",
    type: "multiple-choice",
    question: "Which Trusted Advisor category helps identify opportunities to reduce monthly AWS spending?",
    options: [
      "A) Security",
      "B) Fault Tolerance",
      "C) Cost Optimization",
      "D) Performance"
    ],
    correctAnswers: [2],
    explanation: "The Cost Optimization category of Trusted Advisor identifies opportunities to reduce spending by analyzing idle resources, underutilized instances, and Reserved Instance optimization. Security checks for vulnerabilities, Fault Tolerance for resilience, and Performance for resource utilization."
  },
  {
    id: 123,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which AWS service provides managed threat detection that monitors for cryptocurrency mining activity in your AWS environment?",
    options: [
      "A) Amazon Inspector",
      "B) Amazon GuardDuty",
      "C) AWS Shield",
      "D) AWS WAF"
    ],
    correctAnswers: [1],
    explanation: "Amazon GuardDuty can detect cryptocurrency mining activity by analyzing network traffic patterns and DNS queries. This is one of the many threat types GuardDuty identifies using machine learning and threat intelligence. Inspector scans for vulnerabilities, Shield handles DDoS, and WAF filters web traffic."
  },
  {
    id: 124,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "Which type of IAM policy is attached directly to an AWS resource rather than to an IAM user, group, or role?",
    options: [
      "A) Identity-based policy",
      "B) Resource-based policy",
      "C) Permissions boundary",
      "D) Service control policy"
    ],
    correctAnswers: [1],
    explanation: "Resource-based policies are JSON policies attached directly to AWS resources such as S3 buckets or SQS queues. They specify who can access the resource and what actions they can perform. Identity-based policies attach to users/groups/roles, permissions boundaries limit maximum permissions, and SCPs apply to Organizations."
  },
  {
    id: 125,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "A company wants to encrypt data in transit between their on-premises data center and AWS. Which method should they use?",
    options: [
      "A) Server-side encryption with S3",
      "B) SSL/TLS connections and VPN tunnels",
      "C) Amazon Macie",
      "D) AWS CloudHSM"
    ],
    correctAnswers: [1],
    explanation: "Data in transit should be encrypted using SSL/TLS for web traffic and VPN tunnels for site-to-site connections. Server-side encryption protects data at rest, Macie discovers sensitive data in S3, and CloudHSM manages encryption keys but doesn't encrypt transit by itself."
  },
  {
    id: 126,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.4",
    type: "multiple-choice",
    question: "A company needs a firewall solution that inspects traffic flowing between subnets in their VPC. Which AWS service should they consider?",
    options: [
      "A) Security groups",
      "B) Network ACLs",
      "C) AWS Network Firewall",
      "D) AWS Shield"
    ],
    correctAnswers: [2],
    explanation: "AWS Network Firewall is a managed service that deploys network protections for all traffic entering and leaving your VPC, including traffic between subnets. It provides fine-grained control with stateful inspection. Security groups and NACLs are simpler controls, and Shield handles DDoS protection."
  },
  {
    id: 127,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.1",
    type: "multiple-response",
    question: "Which TWO are AWS responsibilities under the Shared Responsibility Model? (Select TWO.)",
    options: [
      "A) Patching the guest operating system on EC2",
      "B) Maintaining the physical hardware infrastructure",
      "C) Managing the global network connecting AWS Regions",
      "D) Configuring security group rules",
      "E) Encrypting customer application data"
    ],
    correctAnswers: [1, 2],
    explanation: "AWS is responsible for maintaining the physical hardware infrastructure and managing the global network connecting AWS Regions. These are part of security OF the cloud. Customers handle guest OS patching on EC2, security group configuration, and encrypting their application data."
  },
  {
    id: 128,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "What is the purpose of an IAM permissions boundary?",
    options: [
      "A) To define the maximum permissions that an IAM entity can have",
      "B) To grant additional permissions beyond what policies allow",
      "C) To restrict which AWS Regions a user can access",
      "D) To set up multi-factor authentication"
    ],
    correctAnswers: [0],
    explanation: "A permissions boundary is an advanced feature that defines the maximum permissions an IAM entity (user or role) can have. Even if a policy grants broader permissions, the permissions boundary limits the effective permissions. It does not grant additional permissions."
  },
  {
    id: 129,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which AWS service lets you view the operational health of your AWS resources and receive notifications about scheduled maintenance events?",
    options: [
      "A) Amazon CloudWatch",
      "B) AWS Health Dashboard",
      "C) AWS Trusted Advisor",
      "D) AWS Systems Manager"
    ],
    correctAnswers: [1],
    explanation: "The AWS Health Dashboard (formerly Personal Health Dashboard) provides personalized information about the health of AWS services that power your resources, including scheduled maintenance events. CloudWatch monitors metrics, Trusted Advisor gives recommendations, and Systems Manager manages infrastructure."
  },
  {
    id: 130,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.4",
    type: "multiple-choice",
    question: "Which AWS service can help a company detect when an IAM access key has not been rotated in over 90 days?",
    options: [
      "A) Amazon GuardDuty",
      "B) AWS Trusted Advisor",
      "C) Amazon Inspector",
      "D) AWS Shield"
    ],
    correctAnswers: [1],
    explanation: "AWS Trusted Advisor has a security check that identifies IAM access keys that have not been rotated within a specified period. Regular key rotation reduces the risk of compromised credentials. GuardDuty detects threats, Inspector scans for vulnerabilities, and Shield handles DDoS."
  },
  {
    id: 131,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which AWS service is a managed distributed denial of service (DDoS) protection service that comes automatically with all AWS accounts at no additional cost?",
    options: [
      "A) AWS Shield Advanced",
      "B) AWS WAF",
      "C) AWS Shield Standard",
      "D) Amazon GuardDuty"
    ],
    correctAnswers: [2],
    explanation: "AWS Shield Standard is automatically enabled for all AWS accounts at no extra cost. It provides protection against the most common, frequently occurring DDoS attacks. Shield Advanced is a paid service with additional protection and support. WAF is for web application filtering, and GuardDuty is for threat detection."
  },
  {
    id: 132,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "Which of the following is true about IAM roles?",
    options: [
      "A) Roles have permanent long-term credentials like passwords",
      "B) Roles provide temporary security credentials that automatically expire",
      "C) Roles can only be assumed by IAM users, not by AWS services",
      "D) Each AWS account can have a maximum of 5 roles"
    ],
    correctAnswers: [1],
    explanation: "IAM roles provide temporary security credentials that automatically expire and are rotated. Roles do not have permanent passwords or access keys. They can be assumed by IAM users, AWS services (like EC2), and even external identities. There is no practical limit of 5 roles per account."
  },
  {
    id: 133,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "A company subject to HIPAA regulations needs to verify that AWS meets healthcare compliance requirements. Which AWS service provides this documentation?",
    options: [
      "A) AWS Health Dashboard",
      "B) AWS Artifact",
      "C) Amazon HealthLake",
      "D) AWS Config"
    ],
    correctAnswers: [1],
    explanation: "AWS Artifact provides access to compliance documentation including the AWS Business Associate Addendum (BAA) required for HIPAA compliance. Health Dashboard shows service health, HealthLake stores healthcare data, and Config tracks resource configurations."
  },
  {
    id: 134,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.4",
    type: "multiple-choice",
    question: "A default Network ACL allows all inbound and outbound traffic. What does a default security group allow?",
    options: [
      "A) All inbound and all outbound traffic",
      "B) No inbound traffic and all outbound traffic",
      "C) All inbound traffic and no outbound traffic",
      "D) No inbound and no outbound traffic"
    ],
    correctAnswers: [1],
    explanation: "A default security group denies all inbound traffic and allows all outbound traffic. You must explicitly add inbound rules to allow traffic in. A default NACL, in contrast, allows all traffic in both directions. Custom NACLs deny all traffic by default."
  },
  {
    id: 135,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "Which AWS Organizations feature allows you to restrict the maximum permissions available to IAM users and roles across member accounts?",
    options: [
      "A) Service Control Policies (SCPs)",
      "B) IAM permissions boundaries",
      "C) IAM groups",
      "D) Resource-based policies"
    ],
    correctAnswers: [0],
    explanation: "Service Control Policies (SCPs) in AWS Organizations define the maximum permissions for member accounts. Even if an IAM user in a member account has an Allow policy, the SCP can restrict what services or actions are available. Permissions boundaries limit individual entities, while SCPs apply to entire accounts."
  },
  {
    id: 136,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-response",
    question: "Which TWO services can help detect and respond to security events in an AWS account? (Select TWO.)",
    options: [
      "A) AWS Pricing Calculator",
      "B) Amazon GuardDuty",
      "C) AWS CloudTrail",
      "D) AWS Elastic Beanstalk",
      "E) Amazon QuickSight"
    ],
    correctAnswers: [1, 2],
    explanation: "Amazon GuardDuty detects threats using ML and threat intelligence, and AWS CloudTrail records all API calls for forensic analysis and audit trails. Pricing Calculator estimates costs, Elastic Beanstalk deploys applications, and QuickSight provides business intelligence visualizations."
  },
  {
    id: 137,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.4",
    type: "multiple-choice",
    question: "Which AWS Trusted Advisor check category identifies resources that are approaching AWS service limits?",
    options: [
      "A) Cost Optimization",
      "B) Performance",
      "C) Service Limits",
      "D) Security"
    ],
    correctAnswers: [2],
    explanation: "The Service Limits category of Trusted Advisor checks whether your resource usage is approaching or has reached AWS service limits. This helps you request limit increases before they impact your operations. Cost Optimization, Performance, and Security address different areas."
  },
  {
    id: 138,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "A company wants to enforce a policy that requires all IAM user passwords to be at least 14 characters long and include special characters. Which feature should they use?",
    options: [
      "A) IAM MFA",
      "B) IAM password policy",
      "C) IAM Access Analyzer",
      "D) AWS Config rules"
    ],
    correctAnswers: [1],
    explanation: "The IAM password policy allows you to set requirements for IAM user passwords, including minimum length, character requirements (uppercase, lowercase, numbers, special characters), and password rotation. MFA adds an authentication factor, Access Analyzer checks resource sharing, and Config rules monitor resource configurations."
  },
  {
    id: 139,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which AWS service provides a centralized place to manage firewall rules across multiple accounts and resources in your organization?",
    options: [
      "A) AWS Firewall Manager",
      "B) AWS WAF",
      "C) AWS Shield",
      "D) Security groups"
    ],
    correctAnswers: [0],
    explanation: "AWS Firewall Manager lets you centrally configure and manage firewall rules across accounts and applications in AWS Organizations. It works with WAF, Shield Advanced, security groups, and Network Firewall. WAF itself applies to individual resources, Shield handles DDoS, and security groups are per-instance."
  },
  {
    id: 140,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.4",
    type: "multiple-choice",
    question: "A security engineer wants to be notified whenever a new security group rule allows unrestricted SSH access (port 22 open to 0.0.0.0/0). Which service combination achieves this?",
    options: [
      "A) AWS CloudTrail with Amazon S3",
      "B) AWS Config rule with Amazon SNS notification",
      "C) Amazon GuardDuty with AWS Lambda",
      "D) Amazon Inspector with Amazon CloudWatch"
    ],
    correctAnswers: [1],
    explanation: "AWS Config can continuously evaluate security group configurations. A Config rule can detect when a security group allows unrestricted SSH access and trigger an SNS notification. CloudTrail logs changes but doesn't evaluate configurations, GuardDuty detects threats, and Inspector scans for vulnerabilities."
  },

  // ============================================================
  // DOMAIN 3: CLOUD TECHNOLOGY AND SERVICES (34%) — 88 questions
  // Task 3.1: Deployment and operations
  // ============================================================

  {
    id: 141,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.1",
    type: "multiple-choice",
    question: "Which AWS service allows users to manage AWS resources through a web browser?",
    options: [
      "A) AWS CLI",
      "B) AWS SDKs",
      "C) AWS Management Console",
      "D) AWS CloudFormation"
    ],
    correctAnswers: [2],
    explanation: "The AWS Management Console is a web-based interface for managing AWS resources through a browser. The CLI is a command-line tool, SDKs are programming language libraries, and CloudFormation is an infrastructure-as-code service."
  },
  {
    id: 142,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.1",
    type: "multiple-choice",
    question: "A developer wants to automate AWS resource management using scripts from their local terminal. Which tool should they use?",
    options: [
      "A) AWS Management Console",
      "B) AWS CLI",
      "C) AWS CloudFormation",
      "D) AWS Trusted Advisor"
    ],
    correctAnswers: [1],
    explanation: "The AWS CLI (Command Line Interface) allows users to manage AWS services from the command line and automate resource management through scripts. The Console is browser-based, CloudFormation uses templates for infrastructure, and Trusted Advisor provides recommendations."
  },
  {
    id: 143,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.1",
    type: "multiple-choice",
    question: "Which AWS service enables Infrastructure as Code (IaC) by letting you define AWS resources in JSON or YAML templates?",
    options: [
      "A) AWS CLI",
      "B) AWS CodeDeploy",
      "C) AWS CloudFormation",
      "D) AWS Elastic Beanstalk"
    ],
    correctAnswers: [2],
    explanation: "AWS CloudFormation lets you model and provision AWS resources using JSON or YAML templates. This is Infrastructure as Code — your entire infrastructure is defined in code files that can be version-controlled and reused. CLI is for commands, CodeDeploy automates deployment, and Elastic Beanstalk is a PaaS."
  },
  {
    id: 144,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.1",
    type: "multiple-choice",
    question: "Which AWS service lets you interact with AWS programmatically from within your Python application?",
    options: [
      "A) AWS CLI",
      "B) AWS SDK (Boto3 for Python)",
      "C) AWS Management Console",
      "D) AWS CloudShell"
    ],
    correctAnswers: [1],
    explanation: "AWS SDKs provide programming language-specific APIs for interacting with AWS services. Boto3 is the AWS SDK for Python. The CLI is a command-line tool, the Console is browser-based, and CloudShell is a browser-based shell environment."
  },
  {
    id: 145,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.1",
    type: "multiple-response",
    question: "Which TWO are ways to interact with AWS services? (Select TWO.)",
    options: [
      "A) AWS Management Console",
      "B) AWS Artifact",
      "C) AWS CLI",
      "D) AWS Config",
      "E) AWS Shield"
    ],
    correctAnswers: [0, 2],
    explanation: "The AWS Management Console (web browser) and AWS CLI (command line) are two primary ways to interact with AWS services. AWS SDKs are a third way. Artifact provides compliance documents, Config tracks resources, and Shield provides DDoS protection."
  },
  {
    id: 146,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.1",
    type: "multiple-choice",
    question: "A team wants to deploy the same infrastructure consistently across development, staging, and production environments. Which approach is best?",
    options: [
      "A) Manually configure each environment through the Console",
      "B) Use AWS CloudFormation templates to define and deploy infrastructure consistently",
      "C) Use different AWS accounts for each environment with no automation",
      "D) Deploy only to production and skip other environments"
    ],
    correctAnswers: [1],
    explanation: "CloudFormation templates enable consistent, repeatable infrastructure deployment across environments. The same template ensures dev, staging, and production are identical. Manual configuration leads to drift and errors, and skipping environments is poor practice."
  },
  {
    id: 147,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.1",
    type: "multiple-choice",
    question: "Which AWS service provides a browser-based shell environment with the AWS CLI pre-installed, requiring no local setup?",
    options: [
      "A) AWS Cloud9",
      "B) AWS CloudShell",
      "C) Amazon WorkSpaces",
      "D) AWS Systems Manager"
    ],
    correctAnswers: [1],
    explanation: "AWS CloudShell is a browser-based shell that comes pre-authenticated with the AWS CLI, requiring no local installation or configuration. Cloud9 is a cloud IDE, WorkSpaces provides virtual desktops, and Systems Manager manages infrastructure."
  },

  // Task 3.2: Global infrastructure

  {
    id: 148,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.2",
    type: "multiple-choice",
    question: "What is an AWS Region?",
    options: [
      "A) A single data center",
      "B) A geographic area containing two or more Availability Zones",
      "C) A content delivery network endpoint",
      "D) A virtual private cloud"
    ],
    correctAnswers: [1],
    explanation: "An AWS Region is a geographic area that contains two or more isolated Availability Zones. Each Region is completely independent and isolated from other Regions to provide fault tolerance and stability. A single data center is part of an AZ, CDN endpoints are edge locations, and VPC is a networking construct."
  },
  {
    id: 149,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.2",
    type: "multiple-choice",
    question: "What is an AWS Availability Zone?",
    options: [
      "A) A single server rack in an AWS data center",
      "B) One or more discrete data centers with redundant power, networking, and connectivity",
      "C) A geographic area containing multiple Regions",
      "D) A CDN distribution point"
    ],
    correctAnswers: [1],
    explanation: "An Availability Zone consists of one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region. AZs are physically separated and connected through low-latency links, providing isolation from failures in other AZs."
  },
  {
    id: 150,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.2",
    type: "multiple-choice",
    question: "What are AWS edge locations primarily used for?",
    options: [
      "A) Running EC2 instances",
      "B) Hosting databases",
      "C) Caching content for Amazon CloudFront to reduce latency",
      "D) Storing S3 buckets"
    ],
    correctAnswers: [2],
    explanation: "Edge locations are used primarily by Amazon CloudFront to cache content closer to end users, reducing latency. There are more edge locations than Regions or AZs. EC2 instances run in Regions/AZs, databases are hosted in Regions, and S3 buckets are in Regions."
  },
  {
    id: 151,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.2",
    type: "multiple-choice",
    question: "Which factors should a company consider when choosing an AWS Region? (Choose the MOST complete answer.)",
    options: [
      "A) Only the cost of services",
      "B) Compliance requirements, proximity to users, available services, and pricing",
      "C) Only the number of Availability Zones",
      "D) Only proximity to the company's headquarters"
    ],
    correctAnswers: [1],
    explanation: "When selecting a Region, consider data residency/compliance requirements, proximity to customers (latency), which services are available in the Region, and pricing (which varies by Region). All four factors should be weighed together."
  },
  {
    id: 152,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.2",
    type: "multiple-choice",
    question: "Which AWS infrastructure component allows you to run latency-sensitive portions of applications closer to end users in metropolitan areas?",
    options: [
      "A) AWS Regions",
      "B) AWS Local Zones",
      "C) AWS Availability Zones",
      "D) AWS Outposts"
    ],
    correctAnswers: [1],
    explanation: "AWS Local Zones place compute, storage, database, and other AWS services closer to large populations and industry centers, enabling single-digit millisecond latency for latency-sensitive applications. Regions are broader geographic areas, AZs are within Regions, and Outposts bring AWS infrastructure to on-premises locations."
  },
  {
    id: 153,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.2",
    type: "multiple-choice",
    question: "Which AWS service extends AWS infrastructure to 5G network edge locations for ultra-low-latency applications?",
    options: [
      "A) AWS Local Zones",
      "B) AWS Wavelength",
      "C) AWS Outposts",
      "D) Amazon CloudFront"
    ],
    correctAnswers: [1],
    explanation: "AWS Wavelength embeds AWS compute and storage services within telecommunications providers' 5G networks, enabling ultra-low latency for mobile and connected device applications. Local Zones are in metro areas, Outposts are on-premises, and CloudFront is a CDN."
  },
  {
    id: 154,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.2",
    type: "multiple-choice",
    question: "Which AWS service allows you to run AWS infrastructure and services on-premises in your own data center?",
    options: [
      "A) AWS Local Zones",
      "B) AWS Wavelength",
      "C) AWS Outposts",
      "D) AWS Direct Connect"
    ],
    correctAnswers: [2],
    explanation: "AWS Outposts brings native AWS services, infrastructure, and operating models to virtually any data center or on-premises facility. It is a fully managed service that extends AWS infrastructure to your location. Local Zones are in metro areas, Wavelength is at 5G edges, and Direct Connect is a dedicated network connection."
  },

  // Task 3.3: Compute

  {
    id: 155,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-choice",
    question: "Which Amazon EC2 instance family is optimized for compute-intensive tasks that benefit from high-performance processors?",
    options: [
      "A) Memory optimized (R family)",
      "B) Compute optimized (C family)",
      "C) Storage optimized (I family)",
      "D) General purpose (T family)"
    ],
    correctAnswers: [1],
    explanation: "Compute optimized instances (C family) are ideal for compute-intensive tasks like batch processing, high-performance web servers, and scientific modeling. Memory optimized (R) is for memory-intensive workloads, Storage optimized (I) for high I/O, and General purpose (T) for balanced workloads."
  },
  {
    id: 156,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-choice",
    question: "Which AWS service allows you to run code without provisioning or managing servers?",
    options: [
      "A) Amazon EC2",
      "B) AWS Lambda",
      "C) Amazon ECS",
      "D) AWS Elastic Beanstalk"
    ],
    correctAnswers: [1],
    explanation: "AWS Lambda is a serverless compute service that runs your code in response to events without requiring you to provision or manage servers. You pay only for the compute time consumed. EC2 requires server management, ECS manages containers, and Elastic Beanstalk is a PaaS."
  },
  {
    id: 157,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-choice",
    question: "Which AWS service provides a fully managed container orchestration service compatible with Docker?",
    options: [
      "A) AWS Lambda",
      "B) Amazon Elastic Container Service (ECS)",
      "C) Amazon EC2",
      "D) AWS CloudFormation"
    ],
    correctAnswers: [1],
    explanation: "Amazon ECS is a fully managed container orchestration service that supports Docker containers. It allows you to run and manage containerized applications. Lambda is serverless functions, EC2 is virtual machines, and CloudFormation is infrastructure as code."
  },
  {
    id: 158,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-choice",
    question: "Which AWS service runs containers without requiring you to manage the underlying EC2 instances or server infrastructure?",
    options: [
      "A) Amazon ECS on EC2",
      "B) AWS Fargate",
      "C) Amazon EC2",
      "D) AWS Batch"
    ],
    correctAnswers: [1],
    explanation: "AWS Fargate is a serverless compute engine for containers that works with both ECS and EKS. You don't need to provision or manage servers — just define your container and Fargate handles the infrastructure. ECS on EC2 requires managing instances, EC2 is for VMs, and Batch is for batch computing jobs."
  },
  {
    id: 159,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-choice",
    question: "Which AWS service provides managed Kubernetes for running containerized applications?",
    options: [
      "A) Amazon ECS",
      "B) Amazon EKS",
      "C) AWS Fargate",
      "D) AWS Lambda"
    ],
    correctAnswers: [1],
    explanation: "Amazon Elastic Kubernetes Service (EKS) is a managed Kubernetes service that makes it easy to run Kubernetes on AWS. ECS is AWS's own container orchestration service, Fargate is a serverless compute engine for containers, and Lambda runs individual functions."
  },
  {
    id: 160,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-choice",
    question: "An application experiences variable traffic throughout the day. Which AWS feature automatically adjusts the number of EC2 instances to match demand?",
    options: [
      "A) Elastic Load Balancing",
      "B) Amazon EC2 Auto Scaling",
      "C) AWS Lambda",
      "D) Amazon CloudWatch"
    ],
    correctAnswers: [1],
    explanation: "Amazon EC2 Auto Scaling automatically adjusts the number of EC2 instances based on demand or defined scaling policies. Elastic Load Balancing distributes traffic but doesn't add/remove instances. Lambda is serverless, and CloudWatch monitors metrics (which can trigger Auto Scaling)."
  },
  {
    id: 161,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-choice",
    question: "Which AWS service distributes incoming application traffic across multiple EC2 instances to ensure no single instance is overwhelmed?",
    options: [
      "A) Amazon EC2 Auto Scaling",
      "B) Elastic Load Balancing (ELB)",
      "C) Amazon Route 53",
      "D) AWS CloudFormation"
    ],
    correctAnswers: [1],
    explanation: "Elastic Load Balancing automatically distributes incoming application traffic across multiple targets (EC2 instances, containers, IPs) to improve availability and fault tolerance. Auto Scaling adjusts instance count, Route 53 is DNS, and CloudFormation is IaC."
  },
  {
    id: 162,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-choice",
    question: "Which EC2 instance type is best suited for a large in-memory database like SAP HANA?",
    options: [
      "A) Compute optimized",
      "B) Storage optimized",
      "C) Memory optimized",
      "D) General purpose"
    ],
    correctAnswers: [2],
    explanation: "Memory optimized instances are designed for workloads that process large data sets in memory, such as in-memory databases like SAP HANA, Redis, and Memcached. Compute optimized is for CPU-bound tasks, Storage optimized for high I/O, and General purpose for balanced workloads."
  },
  {
    id: 163,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-response",
    question: "Which TWO are types of Elastic Load Balancers? (Select TWO.)",
    options: [
      "A) Application Load Balancer (ALB)",
      "B) Storage Load Balancer",
      "C) Network Load Balancer (NLB)",
      "D) Database Load Balancer",
      "E) Compute Load Balancer"
    ],
    correctAnswers: [0, 2],
    explanation: "AWS offers Application Load Balancer (ALB) for HTTP/HTTPS traffic, Network Load Balancer (NLB) for TCP/UDP/TLS traffic, and Gateway Load Balancer for third-party appliances. There are no Storage, Database, or Compute Load Balancers."
  },
  {
    id: 164,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-choice",
    question: "A company runs a web application that must scale between 2 and 20 EC2 instances based on CPU utilization. Which service should they configure?",
    options: [
      "A) AWS Lambda",
      "B) Amazon EC2 Auto Scaling with a target tracking scaling policy",
      "C) Elastic Load Balancing",
      "D) Amazon CloudFront"
    ],
    correctAnswers: [1],
    explanation: "EC2 Auto Scaling with a target tracking policy lets you define a target CPU utilization. Auto Scaling then adjusts the number of instances (between your min of 2 and max of 20) to maintain that target. Lambda doesn't use EC2, ELB distributes traffic, and CloudFront is a CDN."
  },

  // Task 3.4: Databases

  {
    id: 165,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.4",
    type: "multiple-choice",
    question: "Which AWS service is a managed relational database that supports MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server?",
    options: [
      "A) Amazon DynamoDB",
      "B) Amazon RDS",
      "C) Amazon Redshift",
      "D) Amazon ElastiCache"
    ],
    correctAnswers: [1],
    explanation: "Amazon RDS (Relational Database Service) is a managed service that supports multiple relational database engines including MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server. DynamoDB is NoSQL, Redshift is a data warehouse, and ElastiCache is an in-memory cache."
  },
  {
    id: 166,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.4",
    type: "multiple-choice",
    question: "Which AWS database is a fully managed, serverless, key-value and document NoSQL database?",
    options: [
      "A) Amazon RDS",
      "B) Amazon DynamoDB",
      "C) Amazon Aurora",
      "D) Amazon Redshift"
    ],
    correctAnswers: [1],
    explanation: "Amazon DynamoDB is a fully managed, serverless NoSQL database that provides key-value and document data models with single-digit millisecond performance at any scale. RDS and Aurora are relational, and Redshift is a data warehouse."
  },
  {
    id: 167,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.4",
    type: "multiple-choice",
    question: "Which AWS database is MySQL and PostgreSQL compatible, designed for the cloud, and offers up to five times the throughput of standard MySQL?",
    options: [
      "A) Amazon RDS for MySQL",
      "B) Amazon Aurora",
      "C) Amazon DynamoDB",
      "D) Amazon Neptune"
    ],
    correctAnswers: [1],
    explanation: "Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud. It delivers up to five times the throughput of standard MySQL and three times of PostgreSQL, with high availability and durability. RDS MySQL is standard MySQL managed, DynamoDB is NoSQL, and Neptune is a graph database."
  },
  {
    id: 168,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.4",
    type: "multiple-choice",
    question: "Which AWS service is a fast, fully managed data warehouse that can analyze petabytes of data using SQL?",
    options: [
      "A) Amazon RDS",
      "B) Amazon DynamoDB",
      "C) Amazon Redshift",
      "D) Amazon ElastiCache"
    ],
    correctAnswers: [2],
    explanation: "Amazon Redshift is a fast, fully managed, petabyte-scale data warehouse service that uses SQL for analytics. It is optimized for analyzing large datasets. RDS is for transactional databases, DynamoDB is NoSQL, and ElastiCache is for in-memory caching."
  },
  {
    id: 169,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.4",
    type: "multiple-choice",
    question: "Which AWS service provides an in-memory data store compatible with Redis or Memcached for caching and improving application performance?",
    options: [
      "A) Amazon DynamoDB Accelerator (DAX)",
      "B) Amazon ElastiCache",
      "C) Amazon RDS",
      "D) Amazon Redshift"
    ],
    correctAnswers: [1],
    explanation: "Amazon ElastiCache is a fully managed in-memory data store compatible with Redis and Memcached. It improves application performance by caching frequently accessed data. DAX is specifically for DynamoDB caching, RDS is relational, and Redshift is a data warehouse."
  },
  {
    id: 170,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.4",
    type: "multiple-choice",
    question: "A company needs to migrate its on-premises Oracle database to Amazon Aurora PostgreSQL. Which AWS service helps with this migration?",
    options: [
      "A) AWS DataSync",
      "B) AWS Database Migration Service (DMS)",
      "C) AWS Transfer Family",
      "D) AWS Snowball"
    ],
    correctAnswers: [1],
    explanation: "AWS Database Migration Service (DMS) helps migrate databases to AWS quickly and securely. It supports homogeneous migrations (same engine) and heterogeneous migrations (different engines, using the Schema Conversion Tool). DataSync transfers files, Transfer Family handles FTP/SFTP, and Snowball is for bulk data transfer."
  },
  {
    id: 171,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.4",
    type: "multiple-response",
    question: "Which TWO are characteristics of Amazon DynamoDB? (Select TWO.)",
    options: [
      "A) It is a relational database",
      "B) It provides single-digit millisecond latency at any scale",
      "C) It is a fully managed serverless service",
      "D) It requires you to manage the underlying servers",
      "E) It only supports SQL queries"
    ],
    correctAnswers: [1, 2],
    explanation: "DynamoDB provides single-digit millisecond performance at any scale and is a fully managed serverless NoSQL database. It is not relational, does not require server management, and uses its own query language (not SQL)."
  },

  // Task 3.5: Networking

  {
    id: 172,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.5",
    type: "multiple-choice",
    question: "What is an Amazon Virtual Private Cloud (VPC)?",
    options: [
      "A) A physical data center dedicated to a single customer",
      "B) A logically isolated section of the AWS Cloud where you launch resources in a virtual network",
      "C) An AWS Region",
      "D) A load balancing service"
    ],
    correctAnswers: [1],
    explanation: "A VPC is a logically isolated virtual network that you define in the AWS Cloud. You have complete control over your virtual networking environment, including IP address ranges, subnets, routing, and security. It is not a physical data center, Region, or load balancer."
  },
  {
    id: 173,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.5",
    type: "multiple-choice",
    question: "What is the difference between a public subnet and a private subnet in a VPC?",
    options: [
      "A) Public subnets have larger IP ranges",
      "B) Public subnets have a route to an internet gateway; private subnets do not",
      "C) Private subnets cannot contain any AWS resources",
      "D) There is no difference"
    ],
    correctAnswers: [1],
    explanation: "A public subnet has a route table entry pointing to an internet gateway, allowing resources with public IPs to communicate directly with the internet. A private subnet does not have this route, so resources are not directly accessible from the internet. Both can contain any AWS resources."
  },
  {
    id: 174,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.5",
    type: "multiple-choice",
    question: "Which AWS service provides a scalable Domain Name System (DNS) web service?",
    options: [
      "A) Amazon CloudFront",
      "B) Amazon Route 53",
      "C) Elastic Load Balancing",
      "D) AWS Direct Connect"
    ],
    correctAnswers: [1],
    explanation: "Amazon Route 53 is a highly available and scalable DNS web service that routes end users to applications by translating domain names to IP addresses. CloudFront is a CDN, ELB distributes traffic to targets, and Direct Connect is a dedicated network connection."
  },
  {
    id: 175,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.5",
    type: "multiple-choice",
    question: "Which AWS service provides a Content Delivery Network (CDN) that caches content at edge locations worldwide?",
    options: [
      "A) Amazon Route 53",
      "B) Amazon CloudFront",
      "C) Amazon S3",
      "D) Elastic Load Balancing"
    ],
    correctAnswers: [1],
    explanation: "Amazon CloudFront is a CDN that delivers content to users through a global network of edge locations, reducing latency. Route 53 is DNS, S3 is storage, and ELB distributes traffic across targets within a Region."
  },
  {
    id: 176,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.5",
    type: "multiple-choice",
    question: "A company needs a dedicated, private network connection from their data center to AWS that does not traverse the public internet. Which service should they use?",
    options: [
      "A) AWS Site-to-Site VPN",
      "B) AWS Direct Connect",
      "C) Amazon VPC Peering",
      "D) AWS Transit Gateway"
    ],
    correctAnswers: [1],
    explanation: "AWS Direct Connect establishes a dedicated, private network connection between your on-premises data center and AWS. This provides consistent network performance and does not traverse the public internet. VPN uses encrypted tunnels over the internet, VPC Peering connects VPCs, and Transit Gateway connects multiple VPCs and on-premises networks."
  },
  {
    id: 177,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.5",
    type: "multiple-choice",
    question: "Which VPC component allows resources in a private subnet to access the internet for software updates while preventing inbound connections from the internet?",
    options: [
      "A) Internet Gateway",
      "B) NAT Gateway",
      "C) Virtual Private Gateway",
      "D) VPC Endpoint"
    ],
    correctAnswers: [1],
    explanation: "A NAT (Network Address Translation) Gateway allows instances in a private subnet to initiate outbound connections to the internet while preventing unsolicited inbound traffic. An Internet Gateway provides two-way internet access, Virtual Private Gateway connects to VPN, and VPC Endpoints connect to AWS services privately."
  },
  {
    id: 178,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.5",
    type: "multiple-choice",
    question: "A company wants to establish an encrypted connection over the internet between their corporate network and their AWS VPC. Which service should they use?",
    options: [
      "A) AWS Direct Connect",
      "B) AWS Site-to-Site VPN",
      "C) Amazon CloudFront",
      "D) AWS Transit Gateway"
    ],
    correctAnswers: [1],
    explanation: "AWS Site-to-Site VPN creates an encrypted IPsec connection between your on-premises network and your VPC over the public internet. Direct Connect provides a private physical connection (not over the internet), CloudFront is a CDN, and Transit Gateway is a hub for connecting networks."
  },
  {
    id: 179,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.5",
    type: "multiple-response",
    question: "Which TWO are components of an Amazon VPC? (Select TWO.)",
    options: [
      "A) Subnets",
      "B) EC2 instances",
      "C) Route tables",
      "D) Lambda functions",
      "E) S3 buckets"
    ],
    correctAnswers: [0, 2],
    explanation: "Subnets and route tables are core VPC components. Subnets partition the VPC into segments, and route tables control traffic routing. EC2 instances and Lambda functions are compute resources that run within a VPC, and S3 is a regional storage service outside the VPC."
  },

  // Task 3.6: Storage

  {
    id: 180,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.6",
    type: "multiple-choice",
    question: "Which Amazon S3 storage class offers the lowest cost for data that is rarely accessed and can tolerate retrieval times of 12 hours?",
    options: [
      "A) S3 Standard",
      "B) S3 Standard-Infrequent Access",
      "C) S3 Glacier Deep Archive",
      "D) S3 One Zone-Infrequent Access"
    ],
    correctAnswers: [2],
    explanation: "S3 Glacier Deep Archive is the lowest-cost storage class, designed for data that is rarely accessed and where a retrieval time of 12 hours is acceptable. S3 Standard is for frequently accessed data, S3 Standard-IA for infrequent access with fast retrieval, and One Zone-IA stores data in a single AZ."
  },
  {
    id: 181,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.6",
    type: "multiple-choice",
    question: "Which AWS storage service provides block-level storage volumes for use with EC2 instances?",
    options: [
      "A) Amazon S3",
      "B) Amazon EBS (Elastic Block Store)",
      "C) Amazon EFS (Elastic File System)",
      "D) Amazon Glacier"
    ],
    correctAnswers: [1],
    explanation: "Amazon EBS provides persistent block-level storage volumes that attach to EC2 instances, similar to a hard drive. S3 is object storage, EFS is a shared file system, and Glacier is archival storage."
  },
  {
    id: 182,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.6",
    type: "multiple-choice",
    question: "Which AWS storage service provides a fully managed, scalable, shared file system that can be accessed by multiple EC2 instances simultaneously?",
    options: [
      "A) Amazon EBS",
      "B) Amazon S3",
      "C) Amazon EFS",
      "D) AWS Storage Gateway"
    ],
    correctAnswers: [2],
    explanation: "Amazon EFS (Elastic File System) provides a scalable, fully managed NFS file system that can be mounted by multiple EC2 instances concurrently. EBS volumes attach to a single instance (except multi-attach io1/io2), S3 is object storage, and Storage Gateway connects on-premises storage to AWS."
  },
  {
    id: 183,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.6",
    type: "multiple-choice",
    question: "A company has data with unpredictable access patterns. Which S3 storage class automatically moves data between access tiers to optimize costs?",
    options: [
      "A) S3 Standard",
      "B) S3 Intelligent-Tiering",
      "C) S3 Glacier",
      "D) S3 One Zone-IA"
    ],
    correctAnswers: [1],
    explanation: "S3 Intelligent-Tiering automatically moves data between frequent and infrequent access tiers based on actual access patterns, optimizing costs without performance impact. S3 Standard is always frequent access, Glacier is for archival, and One Zone-IA is for infrequent access in a single AZ."
  },
  {
    id: 184,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.6",
    type: "multiple-choice",
    question: "Which service connects on-premises applications to AWS cloud storage, providing seamless integration with S3?",
    options: [
      "A) AWS DataSync",
      "B) AWS Storage Gateway",
      "C) AWS Snowball",
      "D) Amazon EFS"
    ],
    correctAnswers: [1],
    explanation: "AWS Storage Gateway provides on-premises applications with access to virtually unlimited cloud storage by connecting on-premises storage environments to S3. DataSync is for transferring data, Snowball is for physical data transport, and EFS is a cloud file system."
  },
  {
    id: 185,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.6",
    type: "multiple-choice",
    question: "Which AWS service provides a fully managed backup solution that centralizes and automates the backup of data across AWS services?",
    options: [
      "A) Amazon S3 versioning",
      "B) AWS Backup",
      "C) Amazon EBS snapshots",
      "D) AWS Storage Gateway"
    ],
    correctAnswers: [1],
    explanation: "AWS Backup is a fully managed service that centrally manages and automates backups across AWS services including EBS, RDS, DynamoDB, EFS, and more. S3 versioning keeps object versions, EBS snapshots back up volumes, and Storage Gateway connects on-premises to cloud storage."
  },
  {
    id: 186,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.6",
    type: "multiple-response",
    question: "Which TWO are Amazon S3 storage classes designed for infrequently accessed data? (Select TWO.)",
    options: [
      "A) S3 Standard",
      "B) S3 Standard-Infrequent Access (S3 Standard-IA)",
      "C) S3 One Zone-Infrequent Access (S3 One Zone-IA)",
      "D) S3 Express One Zone",
      "E) S3 Intelligent-Tiering"
    ],
    correctAnswers: [1, 2],
    explanation: "S3 Standard-IA and S3 One Zone-IA are both designed for infrequently accessed data. Standard-IA stores data across multiple AZs, while One Zone-IA stores in a single AZ for lower cost. S3 Standard is for frequent access, Express One Zone is for ultra-low latency, and Intelligent-Tiering auto-tiers."
  },
  {
    id: 187,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.6",
    type: "multiple-choice",
    question: "Which AWS service provides a fully managed Windows or Lustre file system?",
    options: [
      "A) Amazon EFS",
      "B) Amazon FSx",
      "C) Amazon EBS",
      "D) Amazon S3"
    ],
    correctAnswers: [1],
    explanation: "Amazon FSx provides fully managed file systems, including FSx for Windows File Server (Windows-native file system) and FSx for Lustre (high-performance computing). EFS is a Linux NFS file system, EBS is block storage, and S3 is object storage."
  },

  // Task 3.7: AI/ML and Analytics

  {
    id: 188,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.7",
    type: "multiple-choice",
    question: "Which AWS service provides a fully managed platform for building, training, and deploying machine learning models?",
    options: [
      "A) Amazon Rekognition",
      "B) Amazon SageMaker",
      "C) Amazon Lex",
      "D) Amazon Comprehend"
    ],
    correctAnswers: [1],
    explanation: "Amazon SageMaker is a fully managed ML platform that provides tools to build, train, and deploy machine learning models at scale. Rekognition analyzes images/video, Lex builds conversational bots, and Comprehend provides natural language processing."
  },
  {
    id: 189,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.7",
    type: "multiple-choice",
    question: "Which AWS service enables you to build conversational chatbots using voice and text?",
    options: [
      "A) Amazon Polly",
      "B) Amazon Transcribe",
      "C) Amazon Lex",
      "D) Amazon Translate"
    ],
    correctAnswers: [2],
    explanation: "Amazon Lex provides advanced deep learning functionality for building conversational chatbots using voice and text (the same technology behind Alexa). Polly converts text to speech, Transcribe converts speech to text, and Translate provides language translation."
  },
  {
    id: 190,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.7",
    type: "multiple-choice",
    question: "Which AWS service analyzes images and videos to identify objects, people, text, scenes, and activities?",
    options: [
      "A) Amazon Textract",
      "B) Amazon Rekognition",
      "C) Amazon Comprehend",
      "D) Amazon Lex"
    ],
    correctAnswers: [1],
    explanation: "Amazon Rekognition provides image and video analysis using deep learning. It can identify objects, people, text, scenes, and activities in images and videos. Textract extracts text from documents, Comprehend analyzes text for sentiment and entities, and Lex builds chatbots."
  },
  {
    id: 191,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.7",
    type: "multiple-choice",
    question: "Which AWS service provides an intelligent search service powered by machine learning?",
    options: [
      "A) Amazon CloudSearch",
      "B) Amazon Kendra",
      "C) Amazon Elasticsearch",
      "D) Amazon Athena"
    ],
    correctAnswers: [1],
    explanation: "Amazon Kendra is an intelligent enterprise search service powered by machine learning that provides natural language search across various data sources. CloudSearch is a simpler search service, Elasticsearch is now OpenSearch, and Athena queries data in S3 using SQL."
  },
  {
    id: 192,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.7",
    type: "multiple-choice",
    question: "Which AWS service allows you to run SQL queries directly against data stored in Amazon S3 without loading it into a database?",
    options: [
      "A) Amazon Redshift",
      "B) Amazon RDS",
      "C) Amazon Athena",
      "D) Amazon DynamoDB"
    ],
    correctAnswers: [2],
    explanation: "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon S3 using standard SQL. You only pay for the queries you run. Redshift requires loading data, RDS is a relational database, and DynamoDB is NoSQL."
  },
  {
    id: 193,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.7",
    type: "multiple-choice",
    question: "Which AWS service is designed to collect, process, and analyze real-time streaming data?",
    options: [
      "A) Amazon SQS",
      "B) Amazon Kinesis",
      "C) Amazon SNS",
      "D) AWS Batch"
    ],
    correctAnswers: [1],
    explanation: "Amazon Kinesis makes it easy to collect, process, and analyze real-time streaming data such as video, audio, application logs, and IoT telemetry data. SQS is a message queue, SNS is a notification service, and Batch is for batch computing jobs."
  },
  {
    id: 194,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.7",
    type: "multiple-choice",
    question: "Which AWS service is a fully managed ETL (Extract, Transform, Load) service that prepares data for analytics?",
    options: [
      "A) Amazon Kinesis",
      "B) AWS Glue",
      "C) Amazon Athena",
      "D) Amazon Redshift"
    ],
    correctAnswers: [1],
    explanation: "AWS Glue is a fully managed ETL service that makes it easy to prepare and load data for analytics. It includes a data catalog, ETL engine, and crawler that discovers data schemas. Kinesis handles streaming, Athena queries S3, and Redshift is a data warehouse."
  },
  {
    id: 195,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.7",
    type: "multiple-choice",
    question: "Which AWS service provides business intelligence dashboards and visualizations?",
    options: [
      "A) Amazon Athena",
      "B) Amazon QuickSight",
      "C) AWS Glue",
      "D) Amazon Redshift"
    ],
    correctAnswers: [1],
    explanation: "Amazon QuickSight is a cloud-powered business intelligence service that lets you create interactive dashboards and visualizations. Athena runs SQL queries on S3, Glue is ETL, and Redshift is a data warehouse."
  },

  // Additional Domain 3 questions

  {
    id: 196,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-choice",
    question: "A company needs to run a batch processing job that can tolerate interruptions. Which EC2 purchasing option would provide the greatest cost savings?",
    options: [
      "A) On-Demand Instances",
      "B) Reserved Instances",
      "C) Spot Instances",
      "D) Dedicated Hosts"
    ],
    correctAnswers: [2],
    explanation: "Spot Instances offer up to 90% discount compared to On-Demand pricing but can be interrupted by AWS with a two-minute notice. They are ideal for fault-tolerant, flexible workloads like batch processing. Reserved Instances are for steady workloads, and Dedicated Hosts are for compliance needs."
  },
  {
    id: 197,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.5",
    type: "multiple-choice",
    question: "Which Amazon Route 53 routing policy sends traffic to the resource that provides the best latency for the user?",
    options: [
      "A) Simple routing",
      "B) Weighted routing",
      "C) Latency-based routing",
      "D) Failover routing"
    ],
    correctAnswers: [2],
    explanation: "Latency-based routing directs user requests to the AWS Region that provides the lowest latency. Simple routing returns a single resource, Weighted routing distributes traffic by percentages, and Failover routing switches to a backup when the primary is unhealthy."
  },
  {
    id: 198,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.6",
    type: "multiple-choice",
    question: "What is the maximum size of a single object that can be stored in Amazon S3?",
    options: [
      "A) 5 GB",
      "B) 50 GB",
      "C) 5 TB",
      "D) 50 TB"
    ],
    correctAnswers: [2],
    explanation: "The maximum size of a single object in Amazon S3 is 5 TB. For objects larger than 5 GB, you should use multipart upload. S3 has virtually unlimited total storage capacity."
  },
  {
    id: 199,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.4",
    type: "multiple-choice",
    question: "Which AWS database service is a managed graph database?",
    options: [
      "A) Amazon RDS",
      "B) Amazon DynamoDB",
      "C) Amazon Neptune",
      "D) Amazon DocumentDB"
    ],
    correctAnswers: [2],
    explanation: "Amazon Neptune is a fully managed graph database service that supports the popular graph models Property Graph and RDF. It is ideal for applications like social networking, recommendation engines, and fraud detection. RDS is relational, DynamoDB is key-value/document, and DocumentDB is MongoDB-compatible."
  },
  {
    id: 200,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.1",
    type: "multiple-choice",
    question: "Which AWS service provides a managed integrated development environment (IDE) in the cloud?",
    options: [
      "A) AWS CloudShell",
      "B) AWS Cloud9",
      "C) AWS CodeBuild",
      "D) AWS CodeCommit"
    ],
    correctAnswers: [1],
    explanation: "AWS Cloud9 is a cloud-based IDE that lets you write, run, and debug code from a browser. CloudShell is a browser-based shell, CodeBuild compiles and tests code, and CodeCommit is a source code repository."
  },
  {
    id: 201,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-choice",
    question: "Which EC2 instance family is best suited for workloads requiring high sequential read and write access to very large data sets on local storage?",
    options: [
      "A) General purpose",
      "B) Compute optimized",
      "C) Memory optimized",
      "D) Storage optimized"
    ],
    correctAnswers: [3],
    explanation: "Storage optimized instances (I, D, H families) are designed for workloads that require high sequential read/write access to very large data sets on local storage. They provide high I/O throughput. General purpose is balanced, Compute optimized is for CPU tasks, and Memory optimized is for RAM-intensive workloads."
  },
  {
    id: 202,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.5",
    type: "multiple-choice",
    question: "Which VPC component allows private resources to access AWS services like S3 and DynamoDB without going through the internet?",
    options: [
      "A) NAT Gateway",
      "B) Internet Gateway",
      "C) VPC Endpoint",
      "D) Virtual Private Gateway"
    ],
    correctAnswers: [2],
    explanation: "A VPC Endpoint enables private connections between your VPC and supported AWS services without requiring internet access, a NAT device, or a VPN connection. NAT Gateway provides outbound internet access, Internet Gateway provides two-way internet access, and Virtual Private Gateway connects to VPN."
  },
  {
    id: 203,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.7",
    type: "multiple-choice",
    question: "Which AWS service can extract text and data from scanned documents such as forms and tables?",
    options: [
      "A) Amazon Rekognition",
      "B) Amazon Textract",
      "C) Amazon Comprehend",
      "D) Amazon Translate"
    ],
    correctAnswers: [1],
    explanation: "Amazon Textract uses ML to automatically extract text, handwriting, and data from scanned documents, going beyond simple OCR to identify the contents of forms and tables. Rekognition analyzes images/video, Comprehend analyzes text sentiment, and Translate handles language translation."
  },
  {
    id: 204,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-choice",
    question: "Which AWS service allows you to deploy and scale web applications without managing the underlying infrastructure, while still providing access to the underlying resources if needed?",
    options: [
      "A) AWS Lambda",
      "B) AWS Elastic Beanstalk",
      "C) Amazon ECS",
      "D) Amazon Lightsail"
    ],
    correctAnswers: [1],
    explanation: "AWS Elastic Beanstalk handles capacity provisioning, load balancing, scaling, and monitoring while you simply upload your code. You retain full control over the underlying resources. Lambda is serverless with no server access, ECS is container orchestration, and Lightsail is a simplified compute service."
  },
  {
    id: 205,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.6",
    type: "multiple-choice",
    question: "An application needs to store session data that can be accessed quickly across multiple EC2 instances. Which storage option is best?",
    options: [
      "A) Amazon EBS",
      "B) Amazon S3",
      "C) Amazon ElastiCache (Redis)",
      "D) Instance store"
    ],
    correctAnswers: [2],
    explanation: "Amazon ElastiCache (Redis) is ideal for session data because it provides in-memory, low-latency access shared across multiple instances. EBS attaches to individual instances, S3 has higher latency for frequent small reads, and instance store data is lost when the instance stops."
  },
  {
    id: 206,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.5",
    type: "multiple-choice",
    question: "Which AWS service acts as a central hub that connects multiple VPCs and on-premises networks through a single gateway?",
    options: [
      "A) VPC Peering",
      "B) AWS Transit Gateway",
      "C) AWS Direct Connect",
      "D) Internet Gateway"
    ],
    correctAnswers: [1],
    explanation: "AWS Transit Gateway acts as a hub that controls how traffic is routed between all connected networks (VPCs and on-premises). It simplifies network architecture by replacing complex VPC peering meshes. VPC Peering is point-to-point, Direct Connect is on-premises to AWS, and Internet Gateway connects to the internet."
  },
  {
    id: 207,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.1",
    type: "multiple-choice",
    question: "Which AWS service enables you to automate software deployments to a variety of compute services such as EC2, Fargate, and Lambda?",
    options: [
      "A) AWS CloudFormation",
      "B) AWS CodeDeploy",
      "C) AWS CodePipeline",
      "D) AWS CodeBuild"
    ],
    correctAnswers: [1],
    explanation: "AWS CodeDeploy automates code deployments to any instance, including EC2, Fargate, and Lambda. CloudFormation provisions infrastructure, CodePipeline orchestrates CI/CD pipelines, and CodeBuild compiles and tests code."
  },
  {
    id: 208,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.2",
    type: "multiple-choice",
    question: "How many Availability Zones does a typical AWS Region have at minimum?",
    options: [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 5"
    ],
    correctAnswers: [2],
    explanation: "AWS Regions typically have a minimum of three Availability Zones (most have three or more). This provides high availability and fault tolerance for applications deployed across multiple AZs."
  },
  {
    id: 209,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.4",
    type: "multiple-choice",
    question: "Which Amazon RDS feature provides a standby replica in a different Availability Zone for high availability and automatic failover?",
    options: [
      "A) Read Replicas",
      "B) Multi-AZ deployment",
      "C) Automated backups",
      "D) Enhanced monitoring"
    ],
    correctAnswers: [1],
    explanation: "Multi-AZ deployment maintains a synchronous standby replica in a different AZ. If the primary database fails, RDS automatically fails over to the standby. Read Replicas improve read performance but don't provide automatic failover, backups provide point-in-time recovery, and enhanced monitoring provides detailed metrics."
  },
  {
    id: 210,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.6",
    type: "multiple-choice",
    question: "What happens to data stored on an EC2 instance store volume when the instance is stopped or terminated?",
    options: [
      "A) Data is preserved indefinitely",
      "B) Data is automatically backed up to S3",
      "C) Data is lost (ephemeral storage)",
      "D) Data is moved to EBS automatically"
    ],
    correctAnswers: [2],
    explanation: "Instance store volumes provide temporary (ephemeral) block-level storage. Data on these volumes is lost when the instance is stopped, terminated, or if the underlying disk fails. For persistent storage, use Amazon EBS. Data is not automatically backed up or moved."
  },
  {
    id: 211,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-choice",
    question: "A company wants a simple, cost-effective way to launch a virtual private server with a fixed monthly price. Which AWS service is most appropriate?",
    options: [
      "A) Amazon EC2",
      "B) Amazon Lightsail",
      "C) AWS Lambda",
      "D) Amazon ECS"
    ],
    correctAnswers: [1],
    explanation: "Amazon Lightsail provides virtual private servers with a simple, predictable monthly price that includes compute, storage, and data transfer. It is ideal for simpler workloads and users who want an easy-to-use alternative to EC2. EC2 offers more complexity and flexibility, Lambda is serverless, and ECS is for containers."
  },
  {
    id: 212,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.7",
    type: "multiple-response",
    question: "Which TWO are AWS AI/ML services that work with natural language? (Select TWO.)",
    options: [
      "A) Amazon Rekognition",
      "B) Amazon Comprehend",
      "C) Amazon Lex",
      "D) Amazon SageMaker Ground Truth",
      "E) Amazon Kinesis"
    ],
    correctAnswers: [1, 2],
    explanation: "Amazon Comprehend uses NLP to extract insights from text (sentiment, entities, key phrases), and Amazon Lex builds conversational interfaces using voice and text. Rekognition works with images/video, SageMaker Ground Truth labels data, and Kinesis processes streaming data."
  },
  {
    id: 213,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.1",
    type: "multiple-choice",
    question: "Which AWS service provides a continuous delivery pipeline that automates the build, test, and deploy phases of your release process?",
    options: [
      "A) AWS CodeBuild",
      "B) AWS CodeDeploy",
      "C) AWS CodePipeline",
      "D) AWS CodeCommit"
    ],
    correctAnswers: [2],
    explanation: "AWS CodePipeline is a continuous delivery service that automates the release pipeline by orchestrating the build, test, and deploy phases. CodeBuild compiles code, CodeDeploy handles deployment, and CodeCommit is a source control repository."
  },
  {
    id: 214,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.5",
    type: "multiple-choice",
    question: "Which Route 53 routing policy is used to route traffic to a healthy endpoint when the primary endpoint is unhealthy?",
    options: [
      "A) Simple routing",
      "B) Weighted routing",
      "C) Failover routing",
      "D) Geolocation routing"
    ],
    correctAnswers: [2],
    explanation: "Failover routing is used for active-passive failover configurations. Route 53 monitors the health of the primary resource and automatically routes traffic to the secondary (backup) resource when the primary becomes unhealthy. Simple returns one resource, Weighted splits by percentages, and Geolocation routes by user location."
  },
  {
    id: 215,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-choice",
    question: "What is the maximum execution time for a single AWS Lambda function invocation?",
    options: [
      "A) 5 minutes",
      "B) 15 minutes",
      "C) 60 minutes",
      "D) No time limit"
    ],
    correctAnswers: [1],
    explanation: "AWS Lambda functions can run for a maximum of 15 minutes (900 seconds) per invocation. For longer-running tasks, consider using EC2, ECS, or Step Functions to orchestrate multiple Lambda invocations."
  },
  {
    id: 216,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.4",
    type: "multiple-choice",
    question: "A company needs a document database compatible with MongoDB workloads. Which AWS service should they use?",
    options: [
      "A) Amazon DynamoDB",
      "B) Amazon DocumentDB",
      "C) Amazon Neptune",
      "D) Amazon RDS"
    ],
    correctAnswers: [1],
    explanation: "Amazon DocumentDB is a managed document database service that is compatible with MongoDB. It supports MongoDB workloads and APIs. DynamoDB is a key-value/document store but not MongoDB-compatible, Neptune is a graph database, and RDS is relational."
  },
  {
    id: 217,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.6",
    type: "multiple-choice",
    question: "Which feature of Amazon S3 allows you to automatically transition objects between storage classes based on their age?",
    options: [
      "A) S3 Versioning",
      "B) S3 Lifecycle policies",
      "C) S3 Replication",
      "D) S3 Transfer Acceleration"
    ],
    correctAnswers: [1],
    explanation: "S3 Lifecycle policies automate transitioning objects between storage classes (e.g., move to Standard-IA after 30 days, Glacier after 90 days) and can also expire objects after a defined period. Versioning keeps object versions, Replication copies objects, and Transfer Acceleration speeds uploads."
  },
  {
    id: 218,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-choice",
    question: "Which of the following is a benefit of using AWS Lambda compared to running applications on EC2 instances?",
    options: [
      "A) Lambda provides more control over the operating system",
      "B) Lambda automatically scales and you pay only for the compute time used",
      "C) Lambda allows you to run any programming language without restrictions",
      "D) Lambda has no limits on execution time"
    ],
    correctAnswers: [1],
    explanation: "Lambda automatically scales based on the number of requests and you pay only for the compute time consumed (per-millisecond billing). EC2 gives more OS control, Lambda supports specific runtimes (though custom runtimes are possible), and Lambda has a 15-minute execution limit."
  },
  {
    id: 219,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.2",
    type: "multiple-response",
    question: "Which TWO statements about AWS Availability Zones are correct? (Select TWO.)",
    options: [
      "A) All AZs in a Region share the same physical data center",
      "B) AZs within a Region are connected with low-latency links",
      "C) Each AZ consists of one or more discrete data centers",
      "D) AZs in different Regions are interconnected",
      "E) A Region can have only one AZ"
    ],
    correctAnswers: [1, 2],
    explanation: "AZs within a Region are connected through low-latency, high-bandwidth private fiber links, and each AZ consists of one or more discrete data centers with redundant infrastructure. AZs do not share data centers, are within the same Region (not across Regions), and Regions have multiple AZs."
  },
  {
    id: 220,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.7",
    type: "multiple-choice",
    question: "Which AWS service converts text to lifelike speech?",
    options: [
      "A) Amazon Transcribe",
      "B) Amazon Polly",
      "C) Amazon Lex",
      "D) Amazon Translate"
    ],
    correctAnswers: [1],
    explanation: "Amazon Polly converts text to realistic speech using deep learning, supporting multiple languages and voices. Transcribe converts speech to text (opposite direction), Lex builds chatbots, and Translate handles language translation."
  },
  {
    id: 221,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.5",
    type: "multiple-choice",
    question: "A company needs to connect its on-premises network to AWS with consistent network performance and wishes to avoid internet-based connectivity. Which service should they use?",
    options: [
      "A) AWS Site-to-Site VPN",
      "B) AWS Direct Connect",
      "C) Amazon CloudFront",
      "D) AWS Global Accelerator"
    ],
    correctAnswers: [1],
    explanation: "AWS Direct Connect provides a dedicated, private network connection from on-premises to AWS that does not traverse the internet, offering consistent bandwidth and latency. VPN goes over the internet, CloudFront is a CDN, and Global Accelerator improves application performance using the AWS network."
  },
  {
    id: 222,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.1",
    type: "multiple-choice",
    question: "Which AWS service lets you manage a fleet of EC2 instances, apply patches, and run commands across multiple instances simultaneously?",
    options: [
      "A) AWS CloudFormation",
      "B) AWS Systems Manager",
      "C) Amazon CloudWatch",
      "D) AWS Config"
    ],
    correctAnswers: [1],
    explanation: "AWS Systems Manager provides a unified interface to manage EC2 instances and on-premises servers. It includes features like Session Manager, Patch Manager, and Run Command for remote administration. CloudFormation is IaC, CloudWatch monitors metrics, and Config tracks resource configurations."
  },
  {
    id: 223,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-choice",
    question: "Which AWS service provides a simple way to set up and manage a virtual private server with a pre-configured application stack (like WordPress)?",
    options: [
      "A) Amazon EC2 with AMI",
      "B) Amazon Lightsail",
      "C) AWS Elastic Beanstalk",
      "D) AWS Lambda"
    ],
    correctAnswers: [1],
    explanation: "Amazon Lightsail offers pre-configured blueprints for popular applications like WordPress, Joomla, and LAMP stacks with simple pricing. While EC2 with AMIs can achieve similar results, Lightsail is specifically designed for simplicity. Elastic Beanstalk is a PaaS, and Lambda is serverless."
  },
  {
    id: 224,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.7",
    type: "multiple-choice",
    question: "A data analyst needs to catalog metadata from data sources across the organization and prepare data for analytics. Which AWS service should they use?",
    options: [
      "A) Amazon Kinesis",
      "B) AWS Glue Data Catalog",
      "C) Amazon Athena",
      "D) Amazon Redshift Spectrum"
    ],
    correctAnswers: [1],
    explanation: "AWS Glue Data Catalog is a central repository of metadata that stores table definitions and schemas. Glue crawlers automatically discover and catalog data. Kinesis is for streaming, Athena queries S3, and Redshift Spectrum queries data in S3 from Redshift."
  },
  {
    id: 225,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.1",
    type: "multiple-choice",
    question: "A company wants to use pre-built templates to create repeatable infrastructure deployments that can be version-controlled. Which service should they use?",
    options: [
      "A) AWS Systems Manager",
      "B) AWS CloudFormation",
      "C) AWS CodeDeploy",
      "D) AWS OpsWorks"
    ],
    correctAnswers: [1],
    explanation: "AWS CloudFormation uses templates (JSON/YAML) to define infrastructure that can be version-controlled in source repositories and repeatedly deployed across environments. Systems Manager manages instances, CodeDeploy handles application deployment, and OpsWorks is a configuration management service."
  },
  {
    id: 226,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.5",
    type: "multiple-choice",
    question: "Which service improves the performance of TCP and UDP traffic by routing it through the AWS global network rather than the public internet?",
    options: [
      "A) Amazon CloudFront",
      "B) AWS Global Accelerator",
      "C) Amazon Route 53",
      "D) Elastic Load Balancing"
    ],
    correctAnswers: [1],
    explanation: "AWS Global Accelerator uses the AWS global network to route TCP and UDP traffic to optimal endpoints, improving performance by reducing internet hops. CloudFront caches HTTP content, Route 53 is DNS, and ELB distributes traffic within a Region."
  },
  {
    id: 227,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.6",
    type: "multiple-choice",
    question: "Which Amazon S3 feature enables faster file uploads for large objects by splitting them into parts and uploading them in parallel?",
    options: [
      "A) S3 Transfer Acceleration",
      "B) S3 Multipart Upload",
      "C) S3 Versioning",
      "D) S3 Replication"
    ],
    correctAnswers: [1],
    explanation: "S3 Multipart Upload allows you to upload large objects in parts, which can be uploaded in parallel for faster uploads and can be resumed if a part fails. Transfer Acceleration uses CloudFront edge locations for faster uploads, Versioning keeps object versions, and Replication copies objects across buckets."
  },
  {
    id: 228,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-response",
    question: "Which TWO are serverless compute services on AWS? (Select TWO.)",
    options: [
      "A) Amazon EC2",
      "B) AWS Lambda",
      "C) AWS Fargate",
      "D) Amazon ECS on EC2",
      "E) Amazon Lightsail"
    ],
    correctAnswers: [1, 2],
    explanation: "AWS Lambda and AWS Fargate are both serverless compute services — you don't need to manage servers. Lambda runs functions, and Fargate runs containers without managing EC2 instances. EC2, ECS on EC2, and Lightsail all involve managing server infrastructure."
  },

  // ============================================================
  // DOMAIN 4: BILLING, PRICING, AND SUPPORT (12%) — 37 questions
  // Task 4.1: Pricing models
  // ============================================================

  {
    id: 229,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.1",
    type: "multiple-choice",
    question: "A company wants to run EC2 instances 24/7 for a three-year project with predictable resource needs. Which pricing model offers the greatest discount?",
    options: [
      "A) On-Demand",
      "B) Spot Instances",
      "C) Reserved Instances (3-year, All Upfront)",
      "D) Savings Plans (1-year, No Upfront)"
    ],
    correctAnswers: [2],
    explanation: "A 3-year Reserved Instance with All Upfront payment provides the greatest discount (up to 72% off On-Demand). Longer terms and upfront payments yield bigger discounts. On-Demand is full price, Spot is cheapest but interruptible, and a 1-year Savings Plan with No Upfront provides less discount."
  },
  {
    id: 230,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.1",
    type: "multiple-choice",
    question: "Which EC2 pricing model is best suited for a development and test environment that needs to run during business hours only?",
    options: [
      "A) Reserved Instances",
      "B) On-Demand Instances",
      "C) Dedicated Hosts",
      "D) Spot Instances"
    ],
    correctAnswers: [1],
    explanation: "On-Demand Instances are ideal for short-term, irregular workloads like dev/test environments that run only during business hours. You pay by the second (Linux) or hour (Windows) with no commitments. Reserved Instances require long-term commitments, Dedicated Hosts are for compliance, and Spot can be interrupted."
  },
  {
    id: 231,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.1",
    type: "multiple-choice",
    question: "Which AWS pricing model provides significant discounts for unused EC2 capacity that AWS can reclaim with a two-minute warning?",
    options: [
      "A) Reserved Instances",
      "B) On-Demand Instances",
      "C) Spot Instances",
      "D) Savings Plans"
    ],
    correctAnswers: [2],
    explanation: "Spot Instances let you use unused EC2 capacity at up to 90% discount. However, AWS can reclaim them with a two-minute interruption notice. They are ideal for fault-tolerant, flexible workloads. Reserved Instances and Savings Plans require commitments, and On-Demand is full price."
  },
  {
    id: 232,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.1",
    type: "multiple-choice",
    question: "Which AWS pricing model provides flexibility to change instance types, operating systems, and tenancy while still receiving a discount?",
    options: [
      "A) Standard Reserved Instances",
      "B) Convertible Reserved Instances",
      "C) Spot Instances",
      "D) On-Demand Instances"
    ],
    correctAnswers: [1],
    explanation: "Convertible Reserved Instances allow you to change the instance family, operating system, tenancy, and payment option during the term. Standard Reserved Instances offer a higher discount but less flexibility. Spot Instances are interruptible, and On-Demand provides no discount."
  },
  {
    id: 233,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.1",
    type: "multiple-choice",
    question: "Which pricing option provides a flexible pricing model that applies to EC2, Lambda, and Fargate usage, offering discounts for committing to a consistent amount of compute usage?",
    options: [
      "A) Reserved Instances",
      "B) Spot Instances",
      "C) AWS Savings Plans",
      "D) AWS Free Tier"
    ],
    correctAnswers: [2],
    explanation: "AWS Savings Plans offer savings of up to 72% on compute usage in exchange for committing to a consistent amount of usage (measured in $/hour) for 1 or 3 years. They apply across EC2, Lambda, and Fargate, providing more flexibility than Reserved Instances which are specific to EC2."
  },
  {
    id: 234,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.1",
    type: "multiple-choice",
    question: "Which AWS Free Tier type provides specific services that are always free up to certain limits, regardless of how long the account has been active?",
    options: [
      "A) 12-month free tier",
      "B) Always Free tier",
      "C) Trial offers",
      "D) Student tier"
    ],
    correctAnswers: [1],
    explanation: "The Always Free tier offers certain services that are always free up to specified limits, such as 1 million Lambda requests per month and 25 GB of DynamoDB storage. The 12-month free tier expires after a year, trials have limited durations, and there is no official student tier."
  },
  {
    id: 235,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.1",
    type: "multiple-response",
    question: "Which TWO services are included in the AWS Free Tier Always Free category? (Select TWO.)",
    options: [
      "A) Amazon EC2 (t2.micro for 12 months)",
      "B) AWS Lambda (1 million requests per month)",
      "C) Amazon DynamoDB (25 GB of storage)",
      "D) Amazon RDS (750 hours per month for 12 months)",
      "E) Amazon Redshift (2-month trial)"
    ],
    correctAnswers: [1, 2],
    explanation: "AWS Lambda (1 million free requests/month) and DynamoDB (25 GB free storage) are Always Free — they don't expire. EC2 t2.micro and RDS are 12-month free tier offerings, and Redshift is a trial offer."
  },
  {
    id: 236,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.1",
    type: "multiple-choice",
    question: "Which EC2 pricing option is most suitable for a compliance requirement that mandates a single-tenant physical server?",
    options: [
      "A) On-Demand Instances",
      "B) Spot Instances",
      "C) Reserved Instances",
      "D) Dedicated Hosts"
    ],
    correctAnswers: [3],
    explanation: "Dedicated Hosts provide a physical server fully dedicated to your use, meeting compliance requirements for single-tenant hardware. They also help with per-socket, per-core, or per-VM licensing. On-Demand, Spot, and standard Reserved Instances run on shared hardware."
  },
  {
    id: 237,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.1",
    type: "multiple-choice",
    question: "For which AWS service is there no charge for inbound data transfer?",
    options: [
      "A) Data transfer is always charged in both directions",
      "B) Only Amazon S3",
      "C) All AWS services — inbound data transfer is free",
      "D) Only Amazon EC2"
    ],
    correctAnswers: [2],
    explanation: "Inbound data transfer (data IN to AWS from the internet) is free for all AWS services across all Regions. Outbound data transfer (data OUT from AWS to the internet) is charged. Data transfer between Regions and between AZs may also incur charges."
  },

  // Task 4.2: Billing and account management

  {
    id: 238,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.2",
    type: "multiple-choice",
    question: "Which AWS service allows a company to manage multiple AWS accounts centrally under a single organization?",
    options: [
      "A) AWS IAM",
      "B) AWS Organizations",
      "C) AWS Control Tower",
      "D) AWS Systems Manager"
    ],
    correctAnswers: [1],
    explanation: "AWS Organizations lets you centrally manage and govern multiple AWS accounts. It provides consolidated billing, service control policies, and organizational units. IAM manages identities within an account, Control Tower sets up a multi-account environment, and Systems Manager manages resources."
  },
  {
    id: 239,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.2",
    type: "multiple-choice",
    question: "Which feature of AWS Organizations combines the usage across all accounts to potentially qualify for volume-based pricing discounts?",
    options: [
      "A) Service Control Policies",
      "B) Consolidated billing",
      "C) Organizational Units",
      "D) AWS Config aggregation"
    ],
    correctAnswers: [1],
    explanation: "Consolidated billing combines usage from all accounts in the organization into a single bill. This aggregated usage can qualify for volume pricing discounts and Reserved Instance sharing. SCPs restrict permissions, OUs group accounts, and Config aggregation collects configuration data."
  },
  {
    id: 240,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.2",
    type: "multiple-choice",
    question: "Which AWS service allows you to set custom cost and usage budgets and receive alerts when thresholds are exceeded?",
    options: [
      "A) AWS Cost Explorer",
      "B) AWS Budgets",
      "C) AWS Cost and Usage Report",
      "D) AWS Pricing Calculator"
    ],
    correctAnswers: [1],
    explanation: "AWS Budgets lets you set custom budgets for cost, usage, and Reserved Instance utilization. You receive alerts when your actual or forecasted spending exceeds the threshold. Cost Explorer visualizes spending, Cost and Usage Report provides detailed data, and Pricing Calculator estimates future costs."
  },
  {
    id: 241,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.2",
    type: "multiple-choice",
    question: "Which AWS tool provides a graphical interface to visualize, understand, and manage your AWS costs and usage over time?",
    options: [
      "A) AWS Budgets",
      "B) AWS Cost Explorer",
      "C) AWS Pricing Calculator",
      "D) AWS Billing Dashboard"
    ],
    correctAnswers: [1],
    explanation: "AWS Cost Explorer provides an interactive graphical interface to visualize and analyze your AWS spending patterns over time. You can filter by service, account, tag, and more. Budgets sets alerts, Pricing Calculator estimates costs, and the Billing Dashboard shows the current month summary."
  },
  {
    id: 242,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.2",
    type: "multiple-choice",
    question: "Which AWS report provides the most detailed and comprehensive view of AWS costs and usage data, deliverable to an S3 bucket?",
    options: [
      "A) AWS Cost Explorer",
      "B) AWS Budgets report",
      "C) AWS Cost and Usage Report (CUR)",
      "D) AWS Trusted Advisor report"
    ],
    correctAnswers: [2],
    explanation: "The AWS Cost and Usage Report (CUR) is the most comprehensive billing report available. It contains detailed line-item data for each service and can be delivered to S3 for analysis. Cost Explorer provides visual analysis, Budgets sends alerts, and Trusted Advisor gives optimization recommendations."
  },
  {
    id: 243,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.2",
    type: "multiple-choice",
    question: "How can a company use AWS resource tags to manage billing?",
    options: [
      "A) Tags automatically reduce the cost of resources",
      "B) Tags can be used as cost allocation tags to categorize and track costs by project, department, or environment",
      "C) Tags encrypt billing data",
      "D) Tags are only for technical purposes and cannot be used for billing"
    ],
    correctAnswers: [1],
    explanation: "Cost allocation tags allow you to categorize and track AWS costs by business dimensions such as project, department, team, or environment. When activated, they appear in billing reports for cost attribution. Tags don't reduce costs or encrypt data."
  },
  {
    id: 244,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.2",
    type: "multiple-response",
    question: "Which TWO are benefits of AWS Organizations consolidated billing? (Select TWO.)",
    options: [
      "A) A single payment method for all member accounts",
      "B) Automatic data encryption across all accounts",
      "C) Volume pricing discounts from aggregated usage",
      "D) Free AWS Support for all member accounts",
      "E) Automatic compliance with all regulations"
    ],
    correctAnswers: [0, 2],
    explanation: "Consolidated billing provides a single payment method for all accounts and aggregates usage across accounts to potentially qualify for volume pricing discounts (like S3 tiered pricing). It does not provide free support, automatic encryption, or regulatory compliance."
  },
  {
    id: 245,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.2",
    type: "multiple-choice",
    question: "Which AWS service helps you set up a secure, multi-account AWS environment based on best practices?",
    options: [
      "A) AWS Organizations",
      "B) AWS Control Tower",
      "C) AWS Config",
      "D) AWS CloudFormation"
    ],
    correctAnswers: [1],
    explanation: "AWS Control Tower provides an easy way to set up and govern a secure, multi-account AWS environment (called a landing zone) based on best practices. Organizations is the underlying service for account management, Config monitors configurations, and CloudFormation deploys infrastructure."
  },

  // Task 4.3: Technical support resources

  {
    id: 246,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.3",
    type: "multiple-choice",
    question: "Which AWS Support plan provides access to a Technical Account Manager (TAM)?",
    options: [
      "A) Basic",
      "B) Developer",
      "C) Business",
      "D) Enterprise"
    ],
    correctAnswers: [3],
    explanation: "Only the Enterprise Support plan provides a designated Technical Account Manager (TAM) who serves as your primary technical point of contact. Basic and Developer plans do not include TAM access, and Business provides access to AWS Support engineers but not a dedicated TAM."
  },
  {
    id: 247,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.3",
    type: "multiple-choice",
    question: "Which AWS Support plan is included for all AWS accounts at no additional cost?",
    options: [
      "A) Developer",
      "B) Business",
      "C) Basic",
      "D) Enterprise"
    ],
    correctAnswers: [2],
    explanation: "The Basic Support plan is included for all AWS accounts at no cost. It provides access to documentation, whitepapers, support forums, the AWS Health Dashboard, and limited Trusted Advisor checks. Developer, Business, and Enterprise plans have additional costs."
  },
  {
    id: 248,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.3",
    type: "multiple-choice",
    question: "A company needs 24/7 access to AWS Support engineers via phone, chat, and email for production system issues. What is the minimum Support plan needed?",
    options: [
      "A) Basic",
      "B) Developer",
      "C) Business",
      "D) Enterprise"
    ],
    correctAnswers: [2],
    explanation: "The Business Support plan is the minimum plan that provides 24/7 access to Cloud Support Engineers via phone, chat, and email. Basic provides no technical support, and Developer provides email access during business hours only."
  },
  {
    id: 249,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.3",
    type: "multiple-choice",
    question: "Which AWS Support plan provides a less-than-15-minute response time for business-critical system down events?",
    options: [
      "A) Developer",
      "B) Business",
      "C) Enterprise",
      "D) Basic"
    ],
    correctAnswers: [2],
    explanation: "The Enterprise Support plan provides a less-than-15-minute response time for business-critical system down cases. Business provides less than 1 hour for production system down, Developer provides less than 12 hours for system impaired, and Basic provides no case-based support."
  },
  {
    id: 250,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.3",
    type: "multiple-choice",
    question: "Which AWS service provides real-time guidance to help provision resources following best practices for cost optimization, security, fault tolerance, performance, and service limits?",
    options: [
      "A) AWS Config",
      "B) AWS CloudTrail",
      "C) AWS Trusted Advisor",
      "D) AWS Systems Manager"
    ],
    correctAnswers: [2],
    explanation: "AWS Trusted Advisor inspects your AWS environment and provides real-time recommendations across five categories: cost optimization, performance, security, fault tolerance, and service limits. Config tracks configurations, CloudTrail logs API calls, and Systems Manager manages infrastructure."
  },
  {
    id: 251,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.3",
    type: "multiple-choice",
    question: "Which AWS Support plan provides access to ALL Trusted Advisor checks?",
    options: [
      "A) Basic",
      "B) Developer",
      "C) Business or Enterprise",
      "D) All plans include full Trusted Advisor"
    ],
    correctAnswers: [2],
    explanation: "Business and Enterprise Support plans provide access to all Trusted Advisor checks. Basic and Developer plans only include a limited set of core Trusted Advisor checks (6 security checks and service limit checks)."
  },
  {
    id: 252,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.3",
    type: "multiple-choice",
    question: "Which AWS tool provides a personalized view of the health of AWS services and any scheduled activities that may affect your resources?",
    options: [
      "A) AWS Trusted Advisor",
      "B) AWS Health Dashboard",
      "C) Amazon CloudWatch",
      "D) AWS Status Page"
    ],
    correctAnswers: [1],
    explanation: "The AWS Health Dashboard provides personalized information about AWS service health as it relates to your resources. It shows proactive notifications about scheduled activities and can trigger automated remediation. Trusted Advisor gives optimization advice, CloudWatch monitors metrics, and the Status Page shows general AWS health."
  },
  {
    id: 253,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.3",
    type: "multiple-response",
    question: "Which TWO benefits are available with the AWS Enterprise Support plan but NOT with Business Support? (Select TWO.)",
    options: [
      "A) 24/7 phone and chat support",
      "B) Technical Account Manager (TAM)",
      "C) Concierge support team for billing and account assistance",
      "D) Access to Trusted Advisor",
      "E) AWS documentation and forums"
    ],
    correctAnswers: [1, 2],
    explanation: "The Enterprise Support plan uniquely provides a designated Technical Account Manager (TAM) and a Concierge support team for billing/account best practices. 24/7 support and full Trusted Advisor are available with Business plan, and documentation/forums are available to all plans."
  },

  // Additional Domain 4 questions

  {
    id: 254,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.1",
    type: "multiple-choice",
    question: "A company has a web application with variable traffic that spikes unpredictably. Most of the time the traffic is moderate. Which combination of pricing models provides the best cost optimization?",
    options: [
      "A) All On-Demand Instances",
      "B) All Spot Instances",
      "C) Reserved Instances or Savings Plans for baseline, On-Demand for spikes",
      "D) All Dedicated Hosts"
    ],
    correctAnswers: [2],
    explanation: "The optimal strategy combines Reserved Instances or Savings Plans for the predictable baseline capacity (at a discount) with On-Demand instances to handle unpredictable spikes. All On-Demand is expensive, all Spot is risky for web apps, and Dedicated Hosts are for compliance."
  },
  {
    id: 255,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.2",
    type: "multiple-choice",
    question: "A finance team wants to receive an email alert when the monthly AWS bill is forecasted to exceed $10,000. Which service should they configure?",
    options: [
      "A) AWS Cost Explorer",
      "B) AWS Budgets",
      "C) AWS Pricing Calculator",
      "D) AWS Cost and Usage Report"
    ],
    correctAnswers: [1],
    explanation: "AWS Budgets allows you to set budget thresholds and configure alerts (via email or SNS) when actual or forecasted costs exceed the specified amount. Cost Explorer visualizes spending, Pricing Calculator estimates costs, and CUR provides detailed billing data."
  },
  {
    id: 256,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.3",
    type: "multiple-choice",
    question: "Which AWS Support plan provides email-only access to Cloud Support Associates during business hours?",
    options: [
      "A) Basic",
      "B) Developer",
      "C) Business",
      "D) Enterprise"
    ],
    correctAnswers: [1],
    explanation: "The Developer Support plan provides email access to Cloud Support Associates during business hours, with a response time of less than 24 hours for general guidance and less than 12 hours for system impaired. Basic has no technical support, and Business/Enterprise provide 24/7 phone/chat/email."
  },
  {
    id: 257,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.1",
    type: "multiple-choice",
    question: "Which statement about Amazon S3 pricing is correct?",
    options: [
      "A) You pay a flat monthly fee regardless of storage used",
      "B) You pay per GB stored, per request, and for data transfer out",
      "C) S3 Standard storage is always free",
      "D) There is no charge for data transfer between S3 and the internet"
    ],
    correctAnswers: [1],
    explanation: "S3 pricing includes charges for the amount of data stored (per GB/month), the number of requests (PUT, GET, etc.), and data transfer out to the internet. There is no flat fee, S3 Standard is not free (though the free tier includes some), and outbound data transfer is charged."
  },
  {
    id: 258,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.2",
    type: "multiple-choice",
    question: "Which AWS Organizations feature allows you to group accounts into hierarchical organizational units (OUs)?",
    options: [
      "A) Consolidated billing",
      "B) Service Control Policies",
      "C) Organizational Units",
      "D) AWS Control Tower"
    ],
    correctAnswers: [2],
    explanation: "Organizational Units (OUs) allow you to group AWS accounts into a hierarchical structure within AWS Organizations. You can apply policies to OUs to govern the accounts within them. Consolidated billing is for payment, SCPs restrict permissions, and Control Tower automates landing zone setup."
  },
  {
    id: 259,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.3",
    type: "multiple-choice",
    question: "A startup is using AWS but has a limited budget for support. They want access to best-practice checks and basic technical support during business hours. Which Support plan should they choose?",
    options: [
      "A) Basic (free)",
      "B) Developer",
      "C) Business",
      "D) Enterprise"
    ],
    correctAnswers: [1],
    explanation: "The Developer plan is the most cost-effective paid option, providing email access to support during business hours and access to general guidance. Basic is free but has no technical support. Business and Enterprise are more expensive and provide 24/7 support."
  },
  {
    id: 260,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.1",
    type: "multiple-choice",
    question: "Which of the following is a characteristic of the AWS Free Tier 12-month offering?",
    options: [
      "A) It is available only to enterprise customers",
      "B) It provides a limited amount of specific services for free during the first 12 months after account creation",
      "C) It provides unlimited usage of all AWS services for 12 months",
      "D) It requires a minimum monthly spend of $100"
    ],
    correctAnswers: [1],
    explanation: "The 12-month Free Tier provides limited usage of specific services (like 750 hours of t2.micro EC2 and 5 GB of S3 Standard storage) for free during the first 12 months after account creation. It is available to all new accounts, not just enterprise, and has usage limits."
  },
  {
    id: 261,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.2",
    type: "multiple-choice",
    question: "A company wants to analyze which AWS services are costing the most and identify cost trends over the past 6 months. Which tool is best suited for this?",
    options: [
      "A) AWS Budgets",
      "B) AWS Pricing Calculator",
      "C) AWS Cost Explorer",
      "D) AWS Billing Dashboard"
    ],
    correctAnswers: [2],
    explanation: "AWS Cost Explorer is the best tool for analyzing cost trends over time. It provides interactive graphs that let you filter spending by service, account, tag, and more. Budgets sets alerts, Pricing Calculator estimates future costs, and the Billing Dashboard shows current month summary."
  },
  {
    id: 262,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.3",
    type: "multiple-choice",
    question: "Which of the following is available to ALL AWS customers regardless of their Support plan?",
    options: [
      "A) 24/7 phone support",
      "B) Technical Account Manager",
      "C) AWS documentation, whitepapers, and community forums",
      "D) Infrastructure event management"
    ],
    correctAnswers: [2],
    explanation: "AWS documentation, whitepapers, and community forums are available to all customers including those on the Basic (free) Support plan. Phone support requires Business or higher, TAM requires Enterprise, and infrastructure event management is available with Business (for a fee) and Enterprise."
  },
  {
    id: 263,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.1",
    type: "multiple-response",
    question: "Which TWO statements about AWS pricing are correct? (Select TWO.)",
    options: [
      "A) You pay for outbound data transfer from AWS to the internet",
      "B) You pay for inbound data transfer from the internet to AWS",
      "C) Reserved Instances require a commitment of 1 or 3 years",
      "D) Spot Instances are guaranteed to run without interruption",
      "E) On-Demand pricing requires a minimum 1-year commitment"
    ],
    correctAnswers: [0, 2],
    explanation: "Outbound data transfer is charged (inbound is free), and Reserved Instances come in 1-year or 3-year terms. Inbound data is free, Spot Instances can be interrupted, and On-Demand has no commitment requirements."
  },
  {
    id: 264,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.2",
    type: "multiple-choice",
    question: "Which AWS service helps you track and manage software licenses from vendors like Microsoft and Oracle when running workloads on AWS?",
    options: [
      "A) AWS License Manager",
      "B) AWS Organizations",
      "C) AWS Marketplace",
      "D) AWS Service Catalog"
    ],
    correctAnswers: [0],
    explanation: "AWS License Manager helps you manage software licenses from vendors like Microsoft, SAP, and Oracle. It tracks license usage, helps maintain compliance, and supports Bring Your Own License (BYOL) scenarios. Organizations manages accounts, Marketplace sells software, and Service Catalog manages approved products."
  },
  {
    id: 265,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.3",
    type: "multiple-choice",
    question: "Which AWS service helps a company discover, deploy, and manage third-party software and services that run on AWS?",
    options: [
      "A) AWS Service Catalog",
      "B) AWS Marketplace",
      "C) AWS License Manager",
      "D) AWS Partner Network"
    ],
    correctAnswers: [1],
    explanation: "AWS Marketplace is a digital catalog of thousands of software listings from independent vendors that can be deployed on AWS. It includes AMIs, SaaS applications, and data products. Service Catalog manages internally approved products, License Manager tracks licenses, and Partner Network is for consulting/technology partners."
  },

  // ============================================================
  // NEW QUESTIONS 266–400 (135 additional)
  // DOMAIN 1: Cloud Concepts — 30 new questions (266–295)
  // DOMAIN 2: Security and Compliance — 38 new questions (296–333)
  // DOMAIN 3: Cloud Technology and Services — 45 new questions (334–378)
  // DOMAIN 4: Billing, Pricing, and Support — 22 new questions (379–400)
  // ============================================================

  // ============================================================
  // DOMAIN 1: CLOUD CONCEPTS — 30 new questions
  // ============================================================

  {
    id: 266,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-choice",
    question: "A retail company experiences a 10x traffic spike every Black Friday but minimal traffic most other days. Which cloud computing benefit directly addresses this scenario?",
    options: [
      "A) High availability",
      "B) Elasticity",
      "C) Fault tolerance",
      "D) Security"
    ],
    correctAnswers: [1],
    explanation: "Elasticity allows the company to automatically scale resources up to handle the Black Friday spike and scale back down afterward, paying only for what is used. High availability keeps services running but doesn't address scaling. Fault tolerance recovers from failures. Security protects against threats."
  },
  {
    id: 267,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-choice",
    question: "A CTO wants to reduce the time it takes to provision new development environments from weeks to hours. Which benefit of the AWS Cloud is most relevant?",
    options: [
      "A) Economies of scale",
      "B) Global reach",
      "C) Increase speed and agility",
      "D) Trade fixed expense for variable expense"
    ],
    correctAnswers: [2],
    explanation: "Speed and agility is the cloud benefit that reduces provisioning from weeks to minutes or hours. Resources are available on-demand, accelerating experimentation and development. Economies of scale relates to cost reduction, global reach is geographic, and variable expense is about billing models."
  },
  {
    id: 268,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-response",
    question: "A company is migrating to AWS and wants to understand which operational responsibilities AWS takes over. Which TWO of the following does AWS manage in a cloud deployment? (Select TWO.)",
    options: [
      "A) Patching the guest operating system on EC2 instances",
      "B) Maintaining physical hardware in data centers",
      "C) Configuring application-level firewalls",
      "D) Replacing failed physical network components",
      "E) Managing IAM user passwords"
    ],
    correctAnswers: [1, 3],
    explanation: "AWS manages the physical infrastructure, including hardware maintenance and replacing failed network components. Patching guest OS, configuring application firewalls, and managing IAM passwords are customer responsibilities under the shared responsibility model."
  },
  {
    id: 269,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.2",
    type: "multiple-choice",
    question: "A solutions architect is reviewing a workload and wants to ensure it can withstand component failures without downtime. Which pillar of the AWS Well-Architected Framework should they focus on?",
    options: [
      "A) Cost Optimization",
      "B) Performance Efficiency",
      "C) Reliability",
      "D) Operational Excellence"
    ],
    correctAnswers: [2],
    explanation: "The Reliability pillar focuses on the ability of a workload to recover from failures and meet demand. It includes designing for fault tolerance and high availability. Cost Optimization minimizes costs, Performance Efficiency uses resources efficiently, and Operational Excellence improves operational processes."
  },
  {
    id: 270,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.2",
    type: "multiple-choice",
    question: "A team is building a new application and wants to follow the Well-Architected Framework principle of automating changes to infrastructure. Which pillar does this best align with?",
    options: [
      "A) Security",
      "B) Operational Excellence",
      "C) Sustainability",
      "D) Performance Efficiency"
    ],
    correctAnswers: [1],
    explanation: "Operational Excellence includes making frequent, small, reversible changes and automating operations. Infrastructure as code and automated deployments are key practices of this pillar. Security focuses on protecting data, Sustainability on environmental impact, and Performance Efficiency on resource utilization."
  },
  {
    id: 271,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.2",
    type: "multiple-response",
    question: "Which TWO pillars of the AWS Well-Architected Framework would be most relevant when a company wants to minimize its environmental impact while also reducing unnecessary spending? (Select TWO.)",
    options: [
      "A) Security",
      "B) Sustainability",
      "C) Reliability",
      "D) Cost Optimization",
      "E) Operational Excellence"
    ],
    correctAnswers: [1, 3],
    explanation: "The Sustainability pillar focuses on minimizing environmental impact by right-sizing workloads, using efficient hardware, and reducing waste. Cost Optimization focuses on eliminating unnecessary spending. Both pillars share the practice of right-sizing resources. Security, Reliability, and Operational Excellence address different concerns."
  },
  {
    id: 272,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.2",
    type: "multiple-choice",
    question: "Which Well-Architected Framework design principle recommends using managed services to reduce operational burden?",
    options: [
      "A) Design for failure",
      "B) Stop guessing your capacity needs",
      "C) Implement automation",
      "D) Go serverless and use managed services"
    ],
    correctAnswers: [3],
    explanation: "Using managed and serverless services reduces the operational burden of maintaining servers, patching, and scaling. AWS handles those tasks, freeing teams to focus on business logic. Design for failure is about resilience, capacity guessing is about elasticity, and automation is about operational efficiency."
  },
  {
    id: 273,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.3",
    type: "multiple-choice",
    question: "An enterprise is planning a large-scale migration to AWS and needs a structured approach to align technology, business, people, and governance. Which AWS framework should they use?",
    options: [
      "A) AWS Well-Architected Framework",
      "B) AWS Cloud Adoption Framework (CAF)",
      "C) AWS Migration Hub",
      "D) AWS Application Discovery Service"
    ],
    correctAnswers: [1],
    explanation: "The AWS Cloud Adoption Framework (CAF) provides a comprehensive approach to cloud migration covering six perspectives: Business, People, Governance, Platform, Security, and Operations. The Well-Architected Framework evaluates workload architecture. Migration Hub tracks migrations. Application Discovery Service discovers on-premises servers."
  },
  {
    id: 274,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.3",
    type: "multiple-choice",
    question: "A company wants to move its on-premises Oracle database to AWS with minimal changes. Which migration strategy best describes this approach?",
    options: [
      "A) Refactor",
      "B) Rehost (lift and shift)",
      "C) Replatform (lift, tinker, and shift)",
      "D) Retire"
    ],
    correctAnswers: [1],
    explanation: "Rehosting (lift and shift) moves applications to the cloud with minimal or no changes. Replatforming makes minor optimizations during migration. Refactoring re-architects the application to be cloud-native. Retiring eliminates applications no longer needed."
  },
  {
    id: 275,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.3",
    type: "multiple-choice",
    question: "A company decides to move its MySQL database from EC2 to Amazon RDS during migration to take advantage of managed patching and backups. Which migration strategy is this?",
    options: [
      "A) Rehost",
      "B) Repurchase",
      "C) Replatform",
      "D) Refactor"
    ],
    correctAnswers: [2],
    explanation: "Replatforming (lift, tinker, and shift) involves making minor optimizations during migration without changing the core architecture. Moving from self-managed MySQL on EC2 to managed RDS is a classic replatform. Rehosting would keep it on EC2. Repurchasing moves to a different product. Refactoring rewrites the application."
  },
  {
    id: 276,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.3",
    type: "multiple-response",
    question: "Which TWO of the following are perspectives in the AWS Cloud Adoption Framework (CAF)? (Select TWO.)",
    options: [
      "A) Governance",
      "B) Elasticity",
      "C) People",
      "D) Scalability",
      "E) Automation"
    ],
    correctAnswers: [0, 2],
    explanation: "The AWS CAF has six perspectives: Business, People, Governance, Platform, Security, and Operations. Elasticity, Scalability, and Automation are cloud concepts but not CAF perspectives."
  },
  {
    id: 277,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.4",
    type: "multiple-choice",
    question: "A company runs its data center at only 20% average utilization to handle occasional peak loads. Which cloud economics concept explains why this on-premises approach is wasteful?",
    options: [
      "A) Elasticity eliminates the need for capacity",
      "B) Fixed costs are incurred regardless of usage",
      "C) AWS guarantees zero unused capacity",
      "D) On-premises hardware never depreciates"
    ],
    correctAnswers: [1],
    explanation: "With on-premises infrastructure, the company pays for 100% of provisioned capacity whether it is used or not. The fixed costs of servers, power, and cooling are incurred regardless of utilization. In the cloud, you pay for what you use, converting fixed costs to variable. AWS does not guarantee zero unused capacity, and hardware does depreciate."
  },
  {
    id: 278,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.4",
    type: "multiple-choice",
    question: "Which concept describes the ability to experiment with new ideas on AWS at very low cost since you can terminate resources at any time?",
    options: [
      "A) Right-sizing",
      "B) Low cost of failure",
      "C) Total cost of ownership",
      "D) Reserved capacity"
    ],
    correctAnswers: [1],
    explanation: "The low cost of failure in the cloud means companies can experiment freely because they only pay for the time resources are running. If an experiment fails, they simply terminate the resources with minimal cost. Right-sizing optimizes existing resources. TCO compares overall costs. Reserved capacity locks in pricing."
  },
  {
    id: 279,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.4",
    type: "multiple-choice",
    question: "Which AWS tool helps estimate the cost savings of migrating on-premises workloads to the AWS Cloud by comparing total cost of ownership?",
    options: [
      "A) AWS Pricing Calculator",
      "B) AWS Migration Evaluator",
      "C) AWS Cost Explorer",
      "D) AWS Budgets"
    ],
    correctAnswers: [1],
    explanation: "AWS Migration Evaluator (formerly TSO Logic) provides a TCO analysis to build a business case for migration by comparing on-premises costs with projected AWS costs. AWS Pricing Calculator estimates AWS service costs. Cost Explorer analyzes existing AWS spend. Budgets sets spending alerts."
  },
  {
    id: 280,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-choice",
    question: "A media company wants to deploy its video streaming service to users in Europe and Asia without building data centers in those regions. Which cloud benefit makes this possible?",
    options: [
      "A) Elasticity",
      "B) Go global in minutes",
      "C) Economy of scale",
      "D) Pay-as-you-go pricing"
    ],
    correctAnswers: [1],
    explanation: "Going global in minutes means you can deploy your application in multiple AWS Regions around the world with just a few clicks. This eliminates the need to build physical data centers. Elasticity is about scaling resources, economy of scale about cost advantages, and pay-as-you-go about billing."
  },
  {
    id: 281,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-choice",
    question: "Which cloud computing model allows a company to use virtual servers, storage, and networking without managing the underlying physical infrastructure?",
    options: [
      "A) Software as a Service (SaaS)",
      "B) Platform as a Service (PaaS)",
      "C) Infrastructure as a Service (IaaS)",
      "D) Function as a Service (FaaS)"
    ],
    correctAnswers: [2],
    explanation: "IaaS provides virtualized computing resources like virtual servers, storage, and networking. The cloud provider manages the physical infrastructure while the customer manages the OS and above. SaaS delivers complete applications, PaaS provides a platform for developing apps, and FaaS runs code in response to events."
  },
  {
    id: 282,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.2",
    type: "multiple-choice",
    question: "Which Well-Architected pillar emphasizes using the most efficient types of resources for your workload and maintaining that efficiency as demand changes?",
    options: [
      "A) Operational Excellence",
      "B) Reliability",
      "C) Performance Efficiency",
      "D) Cost Optimization"
    ],
    correctAnswers: [2],
    explanation: "Performance Efficiency focuses on using computing resources efficiently, selecting the right resource types and sizes, and maintaining efficiency as requirements evolve. It includes using advanced technologies and monitoring performance. Operational Excellence focuses on operations, Reliability on recovery, and Cost Optimization on spending."
  },
  {
    id: 283,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.2",
    type: "multiple-choice",
    question: "Which design principle of the Well-Architected Framework recommends performing operations as code to limit human error and enable consistent responses to events?",
    options: [
      "A) Anticipate failure",
      "B) Make frequent, small, reversible changes",
      "C) Perform operations as code",
      "D) Learn from all operational events"
    ],
    correctAnswers: [2],
    explanation: "Performing operations as code means defining your entire workload (applications, infrastructure) as code and triggering operations with code. This limits human error and enables consistent, repeatable responses. The other options are also Operational Excellence principles but address different concerns."
  },
  {
    id: 284,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.3",
    type: "multiple-choice",
    question: "A company wants to replace its on-premises CRM with Salesforce running on AWS. Which migration strategy does this represent?",
    options: [
      "A) Rehost",
      "B) Replatform",
      "C) Repurchase",
      "D) Retain"
    ],
    correctAnswers: [2],
    explanation: "Repurchasing means moving to a different product, typically a SaaS offering. Replacing an on-premises CRM with Salesforce is a classic repurchase. Rehosting moves the same application, replatforming makes small optimizations, and retaining keeps the application on-premises."
  },
  {
    id: 285,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.4",
    type: "multiple-choice",
    question: "A startup chose AWS instead of building its own data center. Which financial benefit BEST describes avoiding the upfront cost of purchasing servers, storage, and networking equipment?",
    options: [
      "A) Reduced variable costs",
      "B) Elimination of operational expenses",
      "C) Reduced capital expenditure (CapEx)",
      "D) Elimination of all IT costs"
    ],
    correctAnswers: [2],
    explanation: "Moving to AWS reduces or eliminates capital expenditure (CapEx) by removing the need to purchase physical hardware upfront. Costs shift to operational expenditure (OpEx). Variable costs still exist (pay-per-use). Operational expenses are not eliminated; they shift. All IT costs are not eliminated."
  },
  {
    id: 286,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.4",
    type: "multiple-response",
    question: "Which TWO of the following are direct financial benefits of using the AWS Cloud compared to on-premises infrastructure? (Select TWO.)",
    options: [
      "A) No need for IT governance policies",
      "B) Reduced need for upfront hardware investment",
      "C) Elimination of all compliance costs",
      "D) Pay-per-use pricing based on consumption",
      "E) Free unlimited data transfer between Regions"
    ],
    correctAnswers: [1, 3],
    explanation: "Reduced upfront hardware investment converts CapEx to OpEx, and pay-per-use pricing means you pay only for consumed resources. IT governance is still needed. Compliance costs still exist. Data transfer between Regions incurs charges."
  },
  {
    id: 287,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-choice",
    question: "Which deployment model gives an organization full control over its cloud infrastructure while running in a dedicated environment on AWS?",
    options: [
      "A) Public cloud",
      "B) Hybrid cloud",
      "C) Private cloud (on-premises)",
      "D) Multi-cloud"
    ],
    correctAnswers: [0],
    explanation: "A public cloud like AWS provides on-demand resources. AWS also offers dedicated infrastructure options (like Dedicated Hosts and Outposts) while still being considered public cloud. A private cloud runs on-premises. Hybrid cloud combines on-premises with cloud. Multi-cloud uses multiple cloud providers."
  },
  {
    id: 288,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.3",
    type: "multiple-choice",
    question: "Which AWS service provides an automated tool to plan and track application migration to AWS from on-premises environments?",
    options: [
      "A) AWS CloudFormation",
      "B) AWS Migration Hub",
      "C) AWS Config",
      "D) AWS CloudTrail"
    ],
    correctAnswers: [1],
    explanation: "AWS Migration Hub provides a single location to track the progress of application migrations across multiple AWS and partner solutions. CloudFormation provisions infrastructure as code. Config tracks resource configurations. CloudTrail logs API calls."
  },
  {
    id: 289,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.2",
    type: "multiple-choice",
    question: "Which Well-Architected pillar includes the practice of encrypting data at rest and in transit?",
    options: [
      "A) Operational Excellence",
      "B) Reliability",
      "C) Security",
      "D) Performance Efficiency"
    ],
    correctAnswers: [2],
    explanation: "The Security pillar encompasses protecting data through encryption at rest and in transit, implementing strong identity foundations, enabling traceability, and automating security best practices. The other pillars focus on operations, availability, and resource efficiency respectively."
  },
  {
    id: 290,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-choice",
    question: "A company operates only during business hours and shuts down all development servers each evening. Which cloud advantage does this demonstrate?",
    options: [
      "A) Fault tolerance",
      "B) High availability",
      "C) Pay-as-you-go pricing",
      "D) Global infrastructure"
    ],
    correctAnswers: [2],
    explanation: "Pay-as-you-go pricing means you pay only when resources are running. By shutting down dev servers overnight, the company avoids paying for idle time. Fault tolerance handles failures, high availability keeps services running, and global infrastructure is about geographic reach."
  },
  {
    id: 291,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.4",
    type: "multiple-choice",
    question: "Which concept describes choosing the smallest EC2 instance type that meets an application's performance requirements to avoid overpaying?",
    options: [
      "A) Elasticity",
      "B) Right-sizing",
      "C) Auto Scaling",
      "D) Load balancing"
    ],
    correctAnswers: [1],
    explanation: "Right-sizing means selecting the most appropriate resource size for your workload to balance performance and cost. Elasticity automatically adjusts capacity. Auto Scaling adds or removes instances based on demand. Load balancing distributes traffic across instances."
  },
  {
    id: 292,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.3",
    type: "multiple-response",
    question: "Which TWO are valid migration strategies (the 7 Rs) defined by AWS? (Select TWO.)",
    options: [
      "A) Rebuild",
      "B) Rehost",
      "C) Reboot",
      "D) Relocate",
      "E) Reinstall"
    ],
    correctAnswers: [1, 3],
    explanation: "The 7 Rs of migration are: Refactor, Replatform, Repurchase, Rehost, Relocate, Retain, and Retire. Rebuild and Reinstall are not part of this framework. Reboot is an operational action, not a migration strategy."
  },
  {
    id: 293,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.1",
    type: "multiple-choice",
    question: "Which characteristic of cloud computing means resources can be provisioned and released with minimal management effort?",
    options: [
      "A) Measured service",
      "B) On-demand self-service",
      "C) Resource pooling",
      "D) Broad network access"
    ],
    correctAnswers: [1],
    explanation: "On-demand self-service means a consumer can provision computing capabilities automatically without requiring human interaction with the service provider. Measured service tracks usage. Resource pooling serves multiple consumers. Broad network access means capabilities are available over the network."
  },
  {
    id: 294,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.2",
    type: "multiple-choice",
    question: "A company wants to use the AWS Well-Architected Tool. What does this tool provide?",
    options: [
      "A) Automatic remediation of all architectural issues",
      "B) A review of workloads against best practices with improvement recommendations",
      "C) Free architecture consulting from AWS Solutions Architects",
      "D) Automated deployment of well-architected infrastructure"
    ],
    correctAnswers: [1],
    explanation: "The AWS Well-Architected Tool helps you review workloads against the six pillars and provides improvement recommendations. It does not automatically fix issues, provide free consulting, or deploy infrastructure."
  },
  {
    id: 295,
    domain: 1,
    domainName: "Cloud Concepts",
    topic: "1.4",
    type: "multiple-choice",
    question: "When comparing on-premises to cloud, which cost component is typically ELIMINATED by moving to AWS?",
    options: [
      "A) Software licensing costs",
      "B) Employee salaries for cloud engineers",
      "C) Physical data center facility costs",
      "D) Application development costs"
    ],
    correctAnswers: [2],
    explanation: "Moving to AWS eliminates physical data center costs like rent, power, cooling, and physical security. Software licensing may still apply (BYOL or marketplace). Cloud engineers are still needed. Application development costs remain regardless of deployment model."
  },

  // ============================================================
  // DOMAIN 2: SECURITY AND COMPLIANCE — 38 new questions
  // ============================================================

  {
    id: 296,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.1",
    type: "multiple-choice",
    question: "Under the AWS Shared Responsibility Model, a customer running an application on Amazon EC2 is responsible for which of the following?",
    options: [
      "A) Replacing failed physical hard drives in the data center",
      "B) Patching the hypervisor software",
      "C) Applying security patches to the guest operating system",
      "D) Maintaining the physical security of the data center"
    ],
    correctAnswers: [2],
    explanation: "With EC2 (IaaS), the customer is responsible for managing the guest OS, including applying security patches. AWS is responsible for the underlying infrastructure: physical hardware, hypervisor, and data center security."
  },
  {
    id: 297,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.1",
    type: "multiple-choice",
    question: "For which AWS service does AWS handle operating system patching as part of the Shared Responsibility Model?",
    options: [
      "A) Amazon EC2",
      "B) Amazon RDS",
      "C) Amazon EBS",
      "D) Amazon VPC"
    ],
    correctAnswers: [1],
    explanation: "Amazon RDS is a managed database service where AWS handles OS patching, database engine patching, and hardware maintenance. With EC2, the customer patches the OS. EBS is a storage service (no OS). VPC is a networking service."
  },
  {
    id: 298,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.1",
    type: "multiple-response",
    question: "Under the Shared Responsibility Model, which TWO tasks are the customer's responsibility when using Amazon S3? (Select TWO.)",
    options: [
      "A) Configuring bucket policies and access controls",
      "B) Managing the physical storage infrastructure",
      "C) Encrypting data before uploading to S3",
      "D) Ensuring durability of stored objects",
      "E) Maintaining S3's global endpoint availability"
    ],
    correctAnswers: [0, 2],
    explanation: "Customers are responsible for configuring access controls (bucket policies, ACLs) and client-side encryption for S3. AWS manages the physical storage infrastructure, ensures 11 nines of durability, and maintains S3 endpoint availability."
  },
  {
    id: 299,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which AWS service continuously monitors your AWS environment for security findings and consolidates them from multiple services like GuardDuty, Inspector, and Macie?",
    options: [
      "A) Amazon Detective",
      "B) AWS Security Hub",
      "C) AWS CloudTrail",
      "D) AWS Config"
    ],
    correctAnswers: [1],
    explanation: "AWS Security Hub provides a comprehensive view of your security state by aggregating findings from GuardDuty, Inspector, Macie, and other services. Detective investigates root causes. CloudTrail logs API calls. Config tracks resource configurations."
  },
  {
    id: 300,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "A company needs to identify whether any of its S3 buckets contain personally identifiable information (PII). Which AWS service should they use?",
    options: [
      "A) Amazon GuardDuty",
      "B) Amazon Inspector",
      "C) Amazon Macie",
      "D) AWS Shield"
    ],
    correctAnswers: [2],
    explanation: "Amazon Macie uses machine learning to discover, classify, and protect sensitive data such as PII stored in S3 buckets. GuardDuty detects threats. Inspector assesses vulnerabilities in EC2 and containers. Shield protects against DDoS attacks."
  },
  {
    id: 301,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which AWS service provides intelligent threat detection by analyzing AWS CloudTrail logs, VPC Flow Logs, and DNS logs for suspicious activity?",
    options: [
      "A) AWS WAF",
      "B) Amazon GuardDuty",
      "C) Amazon Macie",
      "D) AWS Trusted Advisor"
    ],
    correctAnswers: [1],
    explanation: "Amazon GuardDuty is a threat detection service that continuously analyzes CloudTrail, VPC Flow Logs, and DNS logs to identify malicious activity. WAF filters web traffic. Macie finds sensitive data in S3. Trusted Advisor provides best practice recommendations."
  },
  {
    id: 302,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "A company wants to grant temporary access to AWS resources for a mobile application's users without creating individual IAM users. Which service should they use?",
    options: [
      "A) AWS IAM Access Analyzer",
      "B) Amazon Cognito",
      "C) AWS Directory Service",
      "D) AWS IAM Identity Center"
    ],
    correctAnswers: [1],
    explanation: "Amazon Cognito provides authentication and authorization for mobile and web applications. It can issue temporary AWS credentials to app users without requiring individual IAM users. IAM Access Analyzer reviews permissions. Directory Service provides managed Active Directory. IAM Identity Center manages workforce access."
  },
  {
    id: 303,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "What is the BEST practice for securing the AWS root user account?",
    options: [
      "A) Use it for daily administrative tasks",
      "B) Share root credentials with all administrators",
      "C) Enable multi-factor authentication (MFA) and use it only when absolutely necessary",
      "D) Delete the root user after creating an IAM admin user"
    ],
    correctAnswers: [2],
    explanation: "Best practice is to enable MFA on the root account and use it only for tasks that specifically require root access (like changing billing info or closing the account). Root should never be used for daily tasks or shared. The root user cannot be deleted."
  },
  {
    id: 304,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-response",
    question: "Which TWO are IAM best practices recommended by AWS? (Select TWO.)",
    options: [
      "A) Grant maximum permissions to all users for flexibility",
      "B) Use IAM roles instead of long-term access keys for applications on EC2",
      "C) Store access keys in source code for easy deployment",
      "D) Enable MFA for privileged users",
      "E) Use the root user for daily operational tasks"
    ],
    correctAnswers: [1, 3],
    explanation: "Using IAM roles on EC2 eliminates the need for long-term credentials, and MFA adds an extra layer of security for privileged users. Granting maximum permissions violates least privilege. Access keys should never be in source code. Root should not be used for daily tasks."
  },
  {
    id: 305,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "A web application is being targeted by SQL injection attacks. Which AWS service can help block these requests at the application layer?",
    options: [
      "A) AWS Shield",
      "B) Security Groups",
      "C) AWS WAF",
      "D) Network ACLs"
    ],
    correctAnswers: [2],
    explanation: "AWS WAF (Web Application Firewall) operates at the application layer (Layer 7) and can create rules to block SQL injection, cross-site scripting, and other common attacks. Shield protects against DDoS. Security Groups and NACLs operate at Layers 3/4 and cannot inspect application-layer content."
  },
  {
    id: 306,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which AWS service provides managed DDoS protection and is automatically included at no extra cost for all AWS customers?",
    options: [
      "A) AWS WAF",
      "B) AWS Shield Standard",
      "C) AWS Shield Advanced",
      "D) Amazon GuardDuty"
    ],
    correctAnswers: [1],
    explanation: "AWS Shield Standard is automatically enabled for all AWS customers at no additional cost and provides protection against common DDoS attacks. Shield Advanced is a paid service with enhanced protection. WAF is a separate paid service. GuardDuty is a threat detection service."
  },
  {
    id: 307,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "A developer needs programmatic access to AWS services from a local development machine. What should be created in IAM?",
    options: [
      "A) An IAM role",
      "B) An IAM group",
      "C) Access keys for an IAM user",
      "D) A resource-based policy"
    ],
    correctAnswers: [2],
    explanation: "Access keys (access key ID and secret access key) provide programmatic access from external environments like a developer's local machine. IAM roles are for AWS services or temporary access. IAM groups organize users. Resource-based policies are attached to resources like S3 buckets."
  },
  {
    id: 308,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "An application running on an EC2 instance needs to access an S3 bucket. What is the MOST secure way to grant this access?",
    options: [
      "A) Store IAM user credentials in the application code",
      "B) Attach an IAM role with the required S3 permissions to the EC2 instance",
      "C) Make the S3 bucket public",
      "D) Store access keys in an environment variable on the instance"
    ],
    correctAnswers: [1],
    explanation: "Attaching an IAM role to the EC2 instance is the most secure approach. The instance receives temporary credentials that are automatically rotated. Storing credentials in code or environment variables risks exposure. Making the bucket public is a security risk."
  },
  {
    id: 309,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which AWS service allows you to centrally manage encryption keys used to encrypt data across AWS services?",
    options: [
      "A) AWS Certificate Manager",
      "B) AWS Key Management Service (KMS)",
      "C) AWS Secrets Manager",
      "D) AWS CloudHSM"
    ],
    correctAnswers: [1],
    explanation: "AWS KMS provides centralized management of encryption keys and integrates with many AWS services for server-side encryption. Certificate Manager manages SSL/TLS certificates. Secrets Manager stores application secrets. CloudHSM provides dedicated hardware security modules for key storage."
  },
  {
    id: 310,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "A company must store database credentials securely and rotate them automatically. Which AWS service should they use?",
    options: [
      "A) AWS Systems Manager Parameter Store",
      "B) AWS Secrets Manager",
      "C) AWS KMS",
      "D) Amazon S3 with encryption"
    ],
    correctAnswers: [1],
    explanation: "AWS Secrets Manager is designed to store, rotate, and manage secrets like database credentials, API keys, and tokens. It supports automatic rotation. Parameter Store can store secrets but lacks built-in rotation. KMS manages encryption keys, not secrets directly. S3 is not designed for secret management."
  },
  {
    id: 311,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.4",
    type: "multiple-choice",
    question: "Where can a customer find AWS compliance certifications and audit reports such as SOC and ISO reports?",
    options: [
      "A) AWS Trusted Advisor",
      "B) AWS Artifact",
      "C) AWS Config",
      "D) AWS CloudTrail"
    ],
    correctAnswers: [1],
    explanation: "AWS Artifact provides on-demand access to AWS compliance documentation, including SOC reports, ISO certifications, and PCI reports. Trusted Advisor gives best practice recommendations. Config tracks resource compliance. CloudTrail logs API activity."
  },
  {
    id: 312,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-response",
    question: "Which TWO services help protect against distributed denial-of-service (DDoS) attacks on AWS? (Select TWO.)",
    options: [
      "A) AWS Shield",
      "B) Amazon Macie",
      "C) AWS WAF",
      "D) Amazon Inspector",
      "E) AWS Artifact"
    ],
    correctAnswers: [0, 2],
    explanation: "AWS Shield provides DDoS protection at the infrastructure layer, while AWS WAF can mitigate application-layer DDoS attacks by rate-limiting or blocking suspicious traffic patterns. Macie discovers sensitive data. Inspector assesses vulnerabilities. Artifact provides compliance reports."
  },
  {
    id: 313,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "What does an IAM policy document use to define permissions?",
    options: [
      "A) XML tags specifying users and resources",
      "B) JSON statements with Effect, Action, and Resource elements",
      "C) YAML configuration with role bindings",
      "D) Plain text lists of allowed services"
    ],
    correctAnswers: [1],
    explanation: "IAM policies are JSON documents containing statements with Effect (Allow/Deny), Action (what operations), and Resource (which AWS resources). They may also include Condition elements. IAM policies do not use XML, YAML, or plain text formats."
  },
  {
    id: 314,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which AWS service scans EC2 instances and container images for software vulnerabilities and unintended network exposure?",
    options: [
      "A) Amazon GuardDuty",
      "B) Amazon Inspector",
      "C) AWS Config",
      "D) Amazon Detective"
    ],
    correctAnswers: [1],
    explanation: "Amazon Inspector automatically discovers and scans EC2 instances and container images in ECR for software vulnerabilities and unintended network exposure. GuardDuty detects threats from logs. Config tracks configuration compliance. Detective investigates security findings."
  },
  {
    id: 315,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "A company has 50 developers who need the same set of AWS permissions. What is the most efficient way to manage their access?",
    options: [
      "A) Attach the same IAM policy to each developer's IAM user individually",
      "B) Create an IAM group, attach the policy to the group, and add users to the group",
      "C) Create 50 separate IAM roles, one per developer",
      "D) Use the root user account and share it among developers"
    ],
    correctAnswers: [1],
    explanation: "IAM groups allow you to attach policies once to a group and then add users. All users in the group inherit the group's permissions. Managing policies individually does not scale. Separate roles per developer is unnecessary. Sharing root credentials is a severe security violation."
  },
  {
    id: 316,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.1",
    type: "multiple-choice",
    question: "When using AWS Lambda, which of the following is the customer's responsibility?",
    options: [
      "A) Patching the underlying operating system",
      "B) Managing the runtime environment capacity",
      "C) Securing the function code and managing IAM permissions",
      "D) Maintaining the physical servers running the functions"
    ],
    correctAnswers: [2],
    explanation: "With Lambda (serverless), AWS manages the OS, runtime scaling, and physical infrastructure. The customer is responsible for their function code, IAM permissions, and data. This represents the most AWS-managed end of the shared responsibility model."
  },
  {
    id: 317,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which AWS service provides a single pane of glass to manage firewall rules across multiple AWS accounts and VPCs?",
    options: [
      "A) AWS Network Firewall",
      "B) AWS Firewall Manager",
      "C) AWS Security Hub",
      "D) Amazon GuardDuty"
    ],
    correctAnswers: [1],
    explanation: "AWS Firewall Manager centrally configures and manages firewall rules across accounts in an AWS Organization, including WAF rules, Shield Advanced protections, Security Groups, and Network Firewall policies. Network Firewall protects individual VPCs. Security Hub aggregates findings. GuardDuty detects threats."
  },
  {
    id: 318,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.4",
    type: "multiple-choice",
    question: "A company in the healthcare industry needs to verify that its AWS deployment meets HIPAA compliance requirements. Which AWS resource provides guidance on achieving HIPAA compliance?",
    options: [
      "A) AWS Config conformance packs",
      "B) AWS Compliance Center and HIPAA whitepaper",
      "C) AWS Trusted Advisor HIPAA check",
      "D) Amazon GuardDuty HIPAA scanner"
    ],
    correctAnswers: [1],
    explanation: "AWS provides HIPAA compliance guidance through the AWS Compliance Center and published whitepapers, including the HIPAA whitepaper that details eligible services and architecture guidance. Config conformance packs help track compliance but are not specific HIPAA guidance. Trusted Advisor and GuardDuty do not have HIPAA-specific features."
  },
  {
    id: 319,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which service provides hardware-based key storage and allows you to generate and use your own encryption keys within a dedicated, single-tenant hardware security module?",
    options: [
      "A) AWS KMS",
      "B) AWS CloudHSM",
      "C) AWS Certificate Manager",
      "D) AWS Secrets Manager"
    ],
    correctAnswers: [1],
    explanation: "AWS CloudHSM provides dedicated, single-tenant hardware security modules (HSMs) in the AWS Cloud for generating and managing encryption keys. KMS is a shared, multi-tenant service. Certificate Manager handles SSL/TLS certificates. Secrets Manager stores application secrets."
  },
  {
    id: 320,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "Which IAM feature allows you to analyze resource policies and identify resources shared with external entities?",
    options: [
      "A) IAM Policy Simulator",
      "B) IAM Access Analyzer",
      "C) IAM Credential Report",
      "D) AWS Organizations SCP"
    ],
    correctAnswers: [1],
    explanation: "IAM Access Analyzer identifies resources (S3 buckets, IAM roles, KMS keys, etc.) that are shared with external entities by analyzing resource-based policies. Policy Simulator tests policy effects. Credential Report lists all users and credential status. SCPs restrict permissions across an Organization."
  },
  {
    id: 321,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-response",
    question: "Which TWO methods provide multi-factor authentication (MFA) for IAM users in AWS? (Select TWO.)",
    options: [
      "A) SMS text message codes",
      "B) Virtual MFA device (authenticator app)",
      "C) Biometric retina scan through AWS Console",
      "D) Hardware TOTP token",
      "E) Voice recognition through Alexa"
    ],
    correctAnswers: [1, 3],
    explanation: "AWS supports virtual MFA devices (like Google Authenticator or Authy) and hardware TOTP tokens as MFA methods. AWS does not support SMS-based MFA for IAM users, biometric retina scans, or voice recognition through Alexa for authentication."
  },
  {
    id: 322,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "A security team wants to record all API calls made in their AWS account for auditing purposes. Which service should they enable?",
    options: [
      "A) Amazon CloudWatch",
      "B) AWS CloudTrail",
      "C) AWS Config",
      "D) VPC Flow Logs"
    ],
    correctAnswers: [1],
    explanation: "AWS CloudTrail records all API calls made in your AWS account, including who made the call, when, from where, and what was changed. CloudWatch monitors metrics and logs. Config tracks resource configurations. VPC Flow Logs capture network traffic metadata."
  },
  {
    id: 323,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which AWS service helps you assess whether your AWS resources comply with your organization's policies and standards?",
    options: [
      "A) AWS CloudTrail",
      "B) AWS Config",
      "C) Amazon CloudWatch",
      "D) AWS Trusted Advisor"
    ],
    correctAnswers: [1],
    explanation: "AWS Config evaluates resource configurations against rules you define, flagging resources that are non-compliant. CloudTrail logs API calls. CloudWatch monitors performance metrics. Trusted Advisor provides general best practice recommendations."
  },
  {
    id: 324,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.1",
    type: "multiple-choice",
    question: "In the Shared Responsibility Model, who is responsible for the security OF the cloud?",
    options: [
      "A) The customer",
      "B) AWS",
      "C) Both AWS and the customer equally",
      "D) A third-party auditor"
    ],
    correctAnswers: [1],
    explanation: "AWS is responsible for security OF the cloud — the infrastructure including hardware, software, networking, and facilities that run AWS services. The customer is responsible for security IN the cloud — their data, configurations, and applications."
  },
  {
    id: 325,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "Which AWS service provides centralized management of user access to multiple AWS accounts within an AWS Organization?",
    options: [
      "A) Amazon Cognito",
      "B) AWS IAM Identity Center (formerly AWS SSO)",
      "C) AWS Directory Service",
      "D) AWS Resource Access Manager"
    ],
    correctAnswers: [1],
    explanation: "AWS IAM Identity Center (formerly AWS SSO) provides centralized access management for multiple AWS accounts and business applications. Cognito is for application end-users. Directory Service provides managed Active Directory. Resource Access Manager shares resources across accounts."
  },
  {
    id: 326,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "A company wants to automatically encrypt all new objects uploaded to an S3 bucket. Which feature should they configure?",
    options: [
      "A) S3 Versioning",
      "B) S3 Default Encryption",
      "C) S3 Object Lock",
      "D) S3 Transfer Acceleration"
    ],
    correctAnswers: [1],
    explanation: "S3 Default Encryption ensures all new objects are automatically encrypted when stored in the bucket. Versioning keeps multiple versions of objects. Object Lock prevents deletion. Transfer Acceleration speeds up uploads."
  },
  {
    id: 327,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.4",
    type: "multiple-choice",
    question: "Which AWS program helps customers understand the security controls inherited from AWS by providing independent third-party audit reports?",
    options: [
      "A) AWS Well-Architected Review",
      "B) AWS Artifact",
      "C) AWS Config Rules",
      "D) AWS Systems Manager"
    ],
    correctAnswers: [1],
    explanation: "AWS Artifact provides access to third-party audit reports (SOC, ISO, PCI DSS, etc.) that help customers understand the controls AWS has in place. Well-Architected Reviews assess workload design. Config Rules check resource compliance. Systems Manager manages infrastructure."
  },
  {
    id: 328,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.3",
    type: "multiple-choice",
    question: "What is the principle of least privilege in IAM?",
    options: [
      "A) Giving users the minimum permissions necessary to perform their tasks",
      "B) Creating the least number of IAM users possible",
      "C) Using the least expensive AWS services",
      "D) Minimizing the number of AWS Regions used"
    ],
    correctAnswers: [0],
    explanation: "Least privilege means granting only the permissions required to perform a specific task and nothing more. This minimizes the potential impact of compromised credentials. It is about permissions scope, not the number of users, service costs, or Regions."
  },
  {
    id: 329,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-response",
    question: "Which TWO of the following are encryption-related services provided by AWS? (Select TWO.)",
    options: [
      "A) AWS KMS",
      "B) AWS CloudFormation",
      "C) AWS Certificate Manager",
      "D) Amazon SQS",
      "E) AWS CodeDeploy"
    ],
    correctAnswers: [0, 2],
    explanation: "AWS KMS manages encryption keys for data encryption, and AWS Certificate Manager provisions and manages SSL/TLS certificates for encrypting data in transit. CloudFormation is for infrastructure as code. SQS is a message queue. CodeDeploy automates deployments."
  },
  {
    id: 330,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.1",
    type: "multiple-choice",
    question: "A company uses Amazon DynamoDB. Under the Shared Responsibility Model, which is the CUSTOMER's responsibility?",
    options: [
      "A) Patching the DynamoDB database engine",
      "B) Controlling access to DynamoDB tables through IAM policies",
      "C) Managing the underlying server infrastructure",
      "D) Ensuring data replication across Availability Zones"
    ],
    correctAnswers: [1],
    explanation: "DynamoDB is a fully managed service. The customer is responsible for controlling access to tables via IAM policies, choosing encryption options, and managing their data. AWS handles engine patching, server infrastructure, and built-in replication across AZs."
  },
  {
    id: 331,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "Which AWS service can automatically investigate the root cause of security findings identified by GuardDuty?",
    options: [
      "A) AWS Security Hub",
      "B) Amazon Detective",
      "C) Amazon Macie",
      "D) AWS CloudTrail"
    ],
    correctAnswers: [1],
    explanation: "Amazon Detective automatically collects log data from AWS resources and uses machine learning to help investigate the root cause of security issues. Security Hub aggregates findings. Macie discovers sensitive data. CloudTrail logs API calls but does not perform investigation."
  },
  {
    id: 332,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.4",
    type: "multiple-choice",
    question: "Which AWS service or feature allows you to restrict which AWS services and actions are available to IAM users and roles across all accounts in an AWS Organization?",
    options: [
      "A) IAM permission boundaries",
      "B) Service Control Policies (SCPs)",
      "C) AWS Config Rules",
      "D) Resource-based policies"
    ],
    correctAnswers: [1],
    explanation: "Service Control Policies (SCPs) in AWS Organizations define the maximum permissions for accounts. SCPs apply to all IAM users and roles within member accounts, even the account root user. Permission boundaries limit individual entities. Config Rules check compliance. Resource-based policies are per-resource."
  },
  {
    id: 333,
    domain: 2,
    domainName: "Security and Compliance",
    topic: "2.2",
    type: "multiple-choice",
    question: "A company wants to protect its Amazon CloudFront distributions from common web exploits. Which service integrates directly with CloudFront for this purpose?",
    options: [
      "A) AWS Shield Standard only",
      "B) AWS WAF",
      "C) Amazon Inspector",
      "D) Security Groups"
    ],
    correctAnswers: [1],
    explanation: "AWS WAF integrates directly with CloudFront to filter and block malicious web requests based on custom rules. While Shield Standard automatically protects CloudFront against DDoS, WAF provides granular application-layer protection. Inspector scans EC2/containers. Security Groups apply to EC2 instances."
  },

  // ============================================================
  // DOMAIN 3: CLOUD TECHNOLOGY AND SERVICES — 45 new questions
  // ============================================================

  {
    id: 334,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.1",
    type: "multiple-choice",
    question: "A company wants to deploy its application identically across development, staging, and production environments. Which AWS service should they use?",
    options: [
      "A) AWS CodeDeploy",
      "B) AWS CloudFormation",
      "C) AWS CodePipeline",
      "D) AWS CodeBuild"
    ],
    correctAnswers: [1],
    explanation: "AWS CloudFormation uses templates to deploy identical infrastructure consistently across environments. CodeDeploy automates code deployments. CodePipeline orchestrates CI/CD pipelines. CodeBuild compiles and tests code."
  },
  {
    id: 335,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.1",
    type: "multiple-choice",
    question: "Which AWS service provides a fully managed platform for deploying web applications without managing the underlying infrastructure, while still allowing access to the OS if needed?",
    options: [
      "A) Amazon EC2",
      "B) AWS Elastic Beanstalk",
      "C) AWS Lambda",
      "D) Amazon Lightsail"
    ],
    correctAnswers: [1],
    explanation: "AWS Elastic Beanstalk is a PaaS that handles deployment, capacity provisioning, load balancing, and scaling while still giving you access to the underlying EC2 instances. EC2 requires full management. Lambda is serverless with no OS access. Lightsail is simplified but less automated."
  },
  {
    id: 336,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.2",
    type: "multiple-choice",
    question: "A company needs to deploy its application in a geographic area where AWS does not have a Region. They want to run AWS infrastructure on-premises. Which service should they use?",
    options: [
      "A) AWS Local Zones",
      "B) AWS Outposts",
      "C) AWS Wavelength",
      "D) Amazon CloudFront"
    ],
    correctAnswers: [1],
    explanation: "AWS Outposts extends AWS infrastructure and services to your on-premises data center. Local Zones place compute closer to end users in metropolitan areas. Wavelength embeds compute within 5G networks. CloudFront is a CDN that caches content at edge locations."
  },
  {
    id: 337,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.2",
    type: "multiple-choice",
    question: "What is the relationship between AWS Regions and Availability Zones?",
    options: [
      "A) Each Availability Zone contains multiple Regions",
      "B) Each Region contains two or more physically separate Availability Zones",
      "C) Regions and Availability Zones are the same thing",
      "D) Availability Zones span multiple Regions"
    ],
    correctAnswers: [1],
    explanation: "Each AWS Region consists of two or more Availability Zones (typically three), which are physically separate data center clusters within that geographic area. AZs are connected by low-latency networking within a Region. Regions are isolated from each other."
  },
  {
    id: 338,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.2",
    type: "multiple-response",
    question: "Which TWO factors should a company consider when choosing an AWS Region for deployment? (Select TWO.)",
    options: [
      "A) Proximity to end users for low latency",
      "B) The number of edge locations in that Region",
      "C) Data residency and compliance requirements",
      "D) The number of IAM users in the account",
      "E) The programming language of the application"
    ],
    correctAnswers: [0, 2],
    explanation: "Latency to end users and data residency/compliance requirements are primary Region selection criteria. Other factors include service availability and pricing. Edge locations are independent of Regions. IAM users and programming language do not affect Region selection."
  },
  {
    id: 339,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-choice",
    question: "A company needs a compute solution that automatically scales based on demand and charges only for the execution time of code. Which service should they use?",
    options: [
      "A) Amazon EC2",
      "B) Amazon ECS",
      "C) AWS Lambda",
      "D) AWS Elastic Beanstalk"
    ],
    correctAnswers: [2],
    explanation: "AWS Lambda is a serverless compute service that runs code in response to events, automatically scales, and charges only for compute time consumed. EC2 requires instance management. ECS manages containers. Elastic Beanstalk deploys web apps but uses underlying EC2 instances."
  },
  {
    id: 340,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-choice",
    question: "Which EC2 instance type is optimized for applications that require high-performance local storage for large datasets, such as data warehousing?",
    options: [
      "A) Compute optimized (C family)",
      "B) Memory optimized (R family)",
      "C) Storage optimized (I/D family)",
      "D) General purpose (T/M family)"
    ],
    correctAnswers: [2],
    explanation: "Storage optimized instances (I and D families) are designed for workloads requiring high sequential read/write access to large datasets on local storage. Compute optimized suits CPU-intensive tasks. Memory optimized suits in-memory databases. General purpose provides a balance of resources."
  },
  {
    id: 341,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-choice",
    question: "A company wants to run Docker containers on AWS without managing the underlying server infrastructure. Which service combination should they use?",
    options: [
      "A) Amazon ECS on EC2",
      "B) Amazon ECS on AWS Fargate",
      "C) Amazon EC2 with Docker installed",
      "D) AWS Elastic Beanstalk with Docker"
    ],
    correctAnswers: [1],
    explanation: "Amazon ECS on AWS Fargate runs containers without managing servers. Fargate is a serverless compute engine for containers. ECS on EC2 still requires managing EC2 instances. Running Docker on EC2 is fully self-managed. Elastic Beanstalk with Docker still uses underlying EC2 instances."
  },
  {
    id: 342,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.4",
    type: "multiple-choice",
    question: "Which AWS database service is a fully managed, serverless, key-value and document database?",
    options: [
      "A) Amazon RDS",
      "B) Amazon DynamoDB",
      "C) Amazon Redshift",
      "D) Amazon Aurora"
    ],
    correctAnswers: [1],
    explanation: "Amazon DynamoDB is a fully managed, serverless NoSQL database supporting both key-value and document data models. RDS is managed relational databases. Redshift is a data warehouse. Aurora is a managed relational database compatible with MySQL and PostgreSQL."
  },
  {
    id: 343,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.4",
    type: "multiple-choice",
    question: "A company needs to run a PostgreSQL-compatible database that provides up to 5x the throughput of standard PostgreSQL. Which AWS service should they choose?",
    options: [
      "A) Amazon RDS for PostgreSQL",
      "B) Amazon Aurora",
      "C) Amazon DynamoDB",
      "D) Amazon DocumentDB"
    ],
    correctAnswers: [1],
    explanation: "Amazon Aurora is a MySQL and PostgreSQL-compatible relational database that provides up to 5x the throughput of standard MySQL and 3x of PostgreSQL. RDS for PostgreSQL runs standard PostgreSQL. DynamoDB is NoSQL. DocumentDB is MongoDB-compatible."
  },
  {
    id: 344,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.5",
    type: "multiple-choice",
    question: "Which AWS service provides a logically isolated section of the AWS Cloud where you can launch resources in a virtual network you define?",
    options: [
      "A) AWS Direct Connect",
      "B) Amazon VPC",
      "C) Amazon Route 53",
      "D) AWS Transit Gateway"
    ],
    correctAnswers: [1],
    explanation: "Amazon VPC (Virtual Private Cloud) provides a logically isolated network where you control IP ranges, subnets, route tables, and gateways. Direct Connect is a dedicated network connection. Route 53 is DNS. Transit Gateway connects multiple VPCs and on-premises networks."
  },
  {
    id: 345,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.5",
    type: "multiple-choice",
    question: "A company wants to establish a private, dedicated network connection between their on-premises data center and AWS. Which service should they use?",
    options: [
      "A) AWS VPN",
      "B) AWS Direct Connect",
      "C) VPC Peering",
      "D) AWS Transit Gateway"
    ],
    correctAnswers: [1],
    explanation: "AWS Direct Connect provides a dedicated, private physical network connection from on-premises to AWS, offering consistent performance and reduced bandwidth costs. VPN creates an encrypted tunnel over the internet. VPC Peering connects VPCs. Transit Gateway is a network hub for VPCs."
  },
  {
    id: 346,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.5",
    type: "multiple-response",
    question: "Which TWO are valid methods to connect an on-premises data center to an AWS VPC? (Select TWO.)",
    options: [
      "A) AWS Site-to-Site VPN",
      "B) Amazon CloudFront",
      "C) AWS Direct Connect",
      "D) Amazon Route 53",
      "E) Elastic Load Balancer"
    ],
    correctAnswers: [0, 2],
    explanation: "AWS Site-to-Site VPN creates an encrypted tunnel over the internet, and AWS Direct Connect provides a dedicated private connection. Both connect on-premises networks to AWS VPCs. CloudFront is a CDN. Route 53 is DNS. ELB distributes traffic within AWS."
  },
  {
    id: 347,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.6",
    type: "multiple-choice",
    question: "A company needs to store 50 TB of archived data that is rarely accessed but must be retrievable within 12 hours. Which S3 storage class is the MOST cost-effective?",
    options: [
      "A) S3 Standard",
      "B) S3 Standard-Infrequent Access",
      "C) S3 Glacier Deep Archive",
      "D) S3 One Zone-Infrequent Access"
    ],
    correctAnswers: [2],
    explanation: "S3 Glacier Deep Archive is the lowest-cost storage class designed for data accessed once or twice a year with retrieval times of 12-48 hours. S3 Standard is for frequent access. S3 Standard-IA and One Zone-IA are for less frequent access but with faster retrieval, at higher cost."
  },
  {
    id: 348,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.6",
    type: "multiple-choice",
    question: "Which AWS storage service provides a file system interface and can be mounted by multiple EC2 instances simultaneously across Availability Zones?",
    options: [
      "A) Amazon EBS",
      "B) Amazon EFS",
      "C) Amazon S3",
      "D) AWS Storage Gateway"
    ],
    correctAnswers: [1],
    explanation: "Amazon EFS (Elastic File System) is a managed NFS file system that can be mounted by multiple EC2 instances concurrently across AZs. EBS volumes attach to a single EC2 instance (in most cases). S3 is object storage with an API, not a file system. Storage Gateway connects on-premises to cloud storage."
  },
  {
    id: 349,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.6",
    type: "multiple-choice",
    question: "A database administrator needs high-performance block storage with consistent low latency for an EC2-hosted database. Which storage service is BEST suited?",
    options: [
      "A) Amazon S3",
      "B) Amazon EFS",
      "C) Amazon EBS",
      "D) Amazon FSx"
    ],
    correctAnswers: [2],
    explanation: "Amazon EBS provides block-level storage volumes with consistent, low-latency performance ideal for databases. S3 is object storage, not suited for database files. EFS is a file system with higher latency than EBS. FSx provides managed file systems for specific use cases."
  },
  {
    id: 350,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.7",
    type: "multiple-choice",
    question: "A company wants to add image recognition capabilities to its application without building custom machine learning models. Which AWS service should they use?",
    options: [
      "A) Amazon SageMaker",
      "B) Amazon Rekognition",
      "C) Amazon Comprehend",
      "D) Amazon Textract"
    ],
    correctAnswers: [1],
    explanation: "Amazon Rekognition provides pre-built image and video analysis capabilities including object detection, facial analysis, and content moderation. SageMaker is for building custom ML models. Comprehend analyzes text with NLP. Textract extracts text from documents."
  },
  {
    id: 351,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.7",
    type: "multiple-choice",
    question: "Which AWS service provides a managed environment for building, training, and deploying custom machine learning models?",
    options: [
      "A) Amazon Rekognition",
      "B) Amazon SageMaker",
      "C) Amazon Lex",
      "D) Amazon Polly"
    ],
    correctAnswers: [1],
    explanation: "Amazon SageMaker provides a fully managed platform for the entire ML workflow: data labeling, model building, training, tuning, and deployment. Rekognition provides pre-built image analysis. Lex builds conversational interfaces. Polly converts text to speech."
  },
  {
    id: 352,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-response",
    question: "Which TWO EC2 purchasing options can provide cost savings of up to 72% compared to On-Demand pricing? (Select TWO.)",
    options: [
      "A) Spot Instances",
      "B) Dedicated Hosts",
      "C) Reserved Instances (Standard 3-year)",
      "D) On-Demand Instances",
      "E) Elastic IP addresses"
    ],
    correctAnswers: [0, 2],
    explanation: "Spot Instances offer up to 90% savings (but can be interrupted) and Standard 3-year Reserved Instances offer up to 72% savings with a commitment. Dedicated Hosts are for compliance needs and cost more. On-Demand has no discount. Elastic IPs are not a purchasing option."
  },
  {
    id: 353,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.5",
    type: "multiple-choice",
    question: "Which AWS networking feature acts as a virtual firewall at the subnet level, supports both allow and deny rules, and is stateless?",
    options: [
      "A) Security Group",
      "B) Network Access Control List (NACL)",
      "C) AWS WAF",
      "D) AWS Network Firewall"
    ],
    correctAnswers: [1],
    explanation: "Network ACLs operate at the subnet level, are stateless (you must define both inbound and outbound rules), and support both allow and deny rules. Security Groups operate at the instance level and are stateful. WAF filters web traffic. Network Firewall provides advanced VPC protection."
  },
  {
    id: 354,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.5",
    type: "multiple-choice",
    question: "Which AWS service provides a scalable DNS web service to route end users to applications?",
    options: [
      "A) Amazon CloudFront",
      "B) Elastic Load Balancing",
      "C) Amazon Route 53",
      "D) AWS Global Accelerator"
    ],
    correctAnswers: [2],
    explanation: "Amazon Route 53 is a scalable DNS service that routes end users to applications using domain name resolution. CloudFront is a CDN. ELB distributes traffic across targets. Global Accelerator improves availability using the AWS global network."
  },
  {
    id: 355,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-choice",
    question: "A company has a workload that can tolerate interruptions and wants the lowest possible compute cost. Which EC2 purchasing option should they choose?",
    options: [
      "A) On-Demand Instances",
      "B) Reserved Instances",
      "C) Spot Instances",
      "D) Dedicated Instances"
    ],
    correctAnswers: [2],
    explanation: "Spot Instances offer the lowest cost (up to 90% off On-Demand) but can be interrupted by AWS with a two-minute notice when capacity is needed. They are ideal for fault-tolerant, flexible workloads. On-Demand has no discount. Reserved requires commitment. Dedicated is more expensive."
  },
  {
    id: 356,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.6",
    type: "multiple-response",
    question: "Which TWO S3 features help protect against accidental data deletion? (Select TWO.)",
    options: [
      "A) S3 Versioning",
      "B) S3 Transfer Acceleration",
      "C) S3 MFA Delete",
      "D) S3 Lifecycle Policies",
      "E) S3 Cross-Region Replication"
    ],
    correctAnswers: [0, 2],
    explanation: "S3 Versioning keeps multiple versions of objects so deleted or overwritten objects can be recovered. MFA Delete requires multi-factor authentication to delete object versions, adding protection. Transfer Acceleration speeds uploads. Lifecycle Policies manage transitions. Cross-Region Replication copies data but doesn't prevent deletion."
  },
  {
    id: 357,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.4",
    type: "multiple-choice",
    question: "Which AWS service provides a fully managed in-memory data store compatible with Redis or Memcached?",
    options: [
      "A) Amazon RDS",
      "B) Amazon DynamoDB",
      "C) Amazon ElastiCache",
      "D) Amazon Redshift"
    ],
    correctAnswers: [2],
    explanation: "Amazon ElastiCache provides managed in-memory caching with Redis or Memcached compatibility, delivering sub-millisecond latency. RDS is a relational database. DynamoDB is a NoSQL database. Redshift is a data warehouse."
  },
  {
    id: 358,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.7",
    type: "multiple-choice",
    question: "A company wants to build a chatbot that can understand natural language and respond to customer inquiries. Which AWS service should they use?",
    options: [
      "A) Amazon Polly",
      "B) Amazon Lex",
      "C) Amazon Transcribe",
      "D) Amazon Translate"
    ],
    correctAnswers: [1],
    explanation: "Amazon Lex provides natural language understanding and automatic speech recognition for building conversational interfaces (chatbots). Polly converts text to speech. Transcribe converts speech to text. Translate provides language translation."
  },
  {
    id: 359,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.1",
    type: "multiple-choice",
    question: "Which AWS service orchestrates a continuous integration and continuous delivery (CI/CD) pipeline by automating build, test, and deploy phases?",
    options: [
      "A) AWS CodeCommit",
      "B) AWS CodeBuild",
      "C) AWS CodePipeline",
      "D) AWS CodeDeploy"
    ],
    correctAnswers: [2],
    explanation: "AWS CodePipeline is a CI/CD service that orchestrates the build, test, and deploy phases of a release process. CodeCommit hosts Git repositories. CodeBuild compiles and tests code. CodeDeploy automates application deployments."
  },
  {
    id: 360,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.2",
    type: "multiple-choice",
    question: "Which AWS service caches content at edge locations worldwide to deliver content with low latency?",
    options: [
      "A) AWS Global Accelerator",
      "B) Amazon CloudFront",
      "C) Amazon Route 53",
      "D) Elastic Load Balancing"
    ],
    correctAnswers: [1],
    explanation: "Amazon CloudFront is a CDN that caches content at edge locations around the world for low-latency delivery. Global Accelerator uses the AWS network but does not cache. Route 53 is DNS. ELB distributes traffic within a Region."
  },
  {
    id: 361,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-choice",
    question: "Which AWS service automatically distributes incoming application traffic across multiple targets such as EC2 instances, containers, and IP addresses?",
    options: [
      "A) Amazon Route 53",
      "B) AWS Auto Scaling",
      "C) Elastic Load Balancing",
      "D) Amazon CloudFront"
    ],
    correctAnswers: [2],
    explanation: "Elastic Load Balancing (ELB) automatically distributes incoming traffic across multiple targets. Route 53 provides DNS routing. Auto Scaling adjusts the number of instances. CloudFront is a CDN."
  },
  {
    id: 362,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.4",
    type: "multiple-choice",
    question: "A company needs to analyze petabytes of structured data using standard SQL queries for business intelligence. Which AWS service is BEST suited?",
    options: [
      "A) Amazon RDS",
      "B) Amazon DynamoDB",
      "C) Amazon Redshift",
      "D) Amazon Aurora"
    ],
    correctAnswers: [2],
    explanation: "Amazon Redshift is a fully managed data warehouse designed for large-scale data analytics using SQL. RDS and Aurora are transactional databases not optimized for analytics at petabyte scale. DynamoDB is a NoSQL database not designed for SQL analytics."
  },
  {
    id: 363,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.7",
    type: "multiple-choice",
    question: "Which AWS service extracts text, handwriting, and data from scanned documents?",
    options: [
      "A) Amazon Comprehend",
      "B) Amazon Rekognition",
      "C) Amazon Textract",
      "D) Amazon Translate"
    ],
    correctAnswers: [2],
    explanation: "Amazon Textract uses ML to automatically extract text, handwriting, and structured data from scanned documents. Comprehend performs NLP on text. Rekognition analyzes images and video. Translate converts text between languages."
  },
  {
    id: 364,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.6",
    type: "multiple-choice",
    question: "A company wants to automatically move infrequently accessed S3 objects to a cheaper storage class. Which feature should they use?",
    options: [
      "A) S3 Versioning",
      "B) S3 Lifecycle Policies",
      "C) S3 Cross-Region Replication",
      "D) S3 Object Lock"
    ],
    correctAnswers: [1],
    explanation: "S3 Lifecycle Policies automate transitioning objects between storage classes based on age or access patterns, reducing costs. Versioning manages object versions. Cross-Region Replication copies data to another Region. Object Lock prevents deletion."
  },
  {
    id: 365,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.5",
    type: "multiple-choice",
    question: "A company needs to connect hundreds of VPCs and on-premises networks through a central hub. Which service should they use?",
    options: [
      "A) VPC Peering",
      "B) AWS Transit Gateway",
      "C) AWS Direct Connect",
      "D) Internet Gateway"
    ],
    correctAnswers: [1],
    explanation: "AWS Transit Gateway acts as a cloud router connecting multiple VPCs and on-premises networks through a central hub. VPC Peering only connects two VPCs at a time. Direct Connect connects on-premises to AWS. Internet Gateway provides internet access to a VPC."
  },
  {
    id: 366,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-choice",
    question: "Which AWS service provides simplified virtual private servers with a predictable monthly price, ideal for small projects and simple web applications?",
    options: [
      "A) Amazon EC2",
      "B) AWS Lambda",
      "C) Amazon Lightsail",
      "D) AWS Fargate"
    ],
    correctAnswers: [2],
    explanation: "Amazon Lightsail provides easy-to-use virtual private servers with a predictable monthly price that includes compute, storage, and data transfer. EC2 offers more flexibility but is more complex. Lambda is serverless. Fargate runs containers without servers."
  },
  {
    id: 367,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.1",
    type: "multiple-choice",
    question: "A developer wants to deploy and manage infrastructure using familiar programming languages like Python or TypeScript instead of JSON/YAML templates. Which AWS tool supports this?",
    options: [
      "A) AWS CloudFormation",
      "B) AWS CDK (Cloud Development Kit)",
      "C) AWS CLI",
      "D) AWS SDK"
    ],
    correctAnswers: [1],
    explanation: "AWS CDK lets you define cloud infrastructure using programming languages like Python, TypeScript, Java, and C#. It synthesizes CloudFormation templates under the hood. CloudFormation uses JSON/YAML. AWS CLI is a command-line tool. AWS SDK provides API access in code."
  },
  {
    id: 368,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.7",
    type: "multiple-response",
    question: "Which TWO AWS services provide natural language processing (NLP) capabilities? (Select TWO.)",
    options: [
      "A) Amazon Comprehend",
      "B) Amazon Rekognition",
      "C) Amazon Lex",
      "D) Amazon Polly",
      "E) Amazon SageMaker Ground Truth"
    ],
    correctAnswers: [0, 2],
    explanation: "Amazon Comprehend provides NLP to find insights and relationships in text (sentiment analysis, entity recognition). Amazon Lex uses NLP for understanding user intent in conversational interfaces. Rekognition analyzes images. Polly generates speech. Ground Truth labels training data."
  },
  {
    id: 369,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.4",
    type: "multiple-choice",
    question: "Which AWS database service is compatible with MongoDB workloads?",
    options: [
      "A) Amazon Aurora",
      "B) Amazon Neptune",
      "C) Amazon DocumentDB",
      "D) Amazon DynamoDB"
    ],
    correctAnswers: [2],
    explanation: "Amazon DocumentDB (with MongoDB compatibility) is designed for MongoDB workloads. Aurora is MySQL/PostgreSQL compatible. Neptune is a graph database. DynamoDB is a key-value/document database but not MongoDB-compatible."
  },
  {
    id: 370,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.4",
    type: "multiple-choice",
    question: "A social networking company needs a database optimized for storing and querying highly connected data such as user relationships. Which service is BEST suited?",
    options: [
      "A) Amazon DynamoDB",
      "B) Amazon Neptune",
      "C) Amazon RDS",
      "D) Amazon Redshift"
    ],
    correctAnswers: [1],
    explanation: "Amazon Neptune is a managed graph database optimized for highly connected datasets like social networks, fraud detection, and knowledge graphs. DynamoDB is key-value. RDS is relational. Redshift is a data warehouse."
  },
  {
    id: 371,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.2",
    type: "multiple-choice",
    question: "Which service uses the AWS global network to improve the availability and performance of applications by directing traffic through AWS edge locations?",
    options: [
      "A) Amazon CloudFront",
      "B) AWS Global Accelerator",
      "C) Amazon Route 53",
      "D) Elastic Load Balancing"
    ],
    correctAnswers: [1],
    explanation: "AWS Global Accelerator routes traffic through the AWS global network from edge locations to the optimal regional endpoint, improving availability and performance. CloudFront caches content. Route 53 provides DNS. ELB distributes traffic within a Region."
  },
  {
    id: 372,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.6",
    type: "multiple-choice",
    question: "Which AWS service provides a hybrid cloud storage solution that connects on-premises environments to cloud storage?",
    options: [
      "A) Amazon S3",
      "B) AWS Storage Gateway",
      "C) Amazon EFS",
      "D) AWS Snowball"
    ],
    correctAnswers: [1],
    explanation: "AWS Storage Gateway provides hybrid storage connecting on-premises environments with AWS cloud storage through file, volume, or tape gateway interfaces. S3 is cloud object storage. EFS is a cloud file system. Snowball is for offline data transfer."
  },
  {
    id: 373,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.6",
    type: "multiple-choice",
    question: "A company needs to transfer 80 TB of data to AWS but has limited internet bandwidth. Which service provides a physical device for offline data transfer?",
    options: [
      "A) AWS DataSync",
      "B) AWS Snowball Edge",
      "C) AWS Direct Connect",
      "D) S3 Transfer Acceleration"
    ],
    correctAnswers: [1],
    explanation: "AWS Snowball Edge is a physical device shipped to your location for transferring large amounts of data offline. DataSync transfers data over the network. Direct Connect is a dedicated network link. Transfer Acceleration speeds up S3 uploads over the internet."
  },
  {
    id: 374,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.3",
    type: "multiple-choice",
    question: "Which AWS service allows you to automatically adjust the number of EC2 instances based on demand metrics like CPU utilization?",
    options: [
      "A) Elastic Load Balancing",
      "B) AWS Auto Scaling",
      "C) Amazon CloudWatch",
      "D) AWS CloudFormation"
    ],
    correctAnswers: [1],
    explanation: "AWS Auto Scaling automatically adjusts the number of EC2 instances based on scaling policies triggered by metrics like CPU utilization. ELB distributes traffic but does not add/remove instances. CloudWatch monitors metrics. CloudFormation provisions infrastructure from templates."
  },
  {
    id: 375,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.7",
    type: "multiple-choice",
    question: "Which AWS service can analyze streaming data in real time for use cases like real-time dashboards and anomaly detection?",
    options: [
      "A) Amazon Redshift",
      "B) Amazon Kinesis",
      "C) AWS Glue",
      "D) Amazon EMR"
    ],
    correctAnswers: [1],
    explanation: "Amazon Kinesis processes and analyzes real-time streaming data at scale. Redshift is for batch analytics on stored data. Glue is an ETL service. EMR runs big data frameworks like Spark on managed clusters."
  },
  {
    id: 376,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.7",
    type: "multiple-choice",
    question: "Which AWS service provides a serverless way to query data directly in S3 using standard SQL without loading it into a database?",
    options: [
      "A) Amazon Redshift",
      "B) Amazon Athena",
      "C) Amazon RDS",
      "D) AWS Glue"
    ],
    correctAnswers: [1],
    explanation: "Amazon Athena is a serverless query service that lets you analyze data in S3 using standard SQL. You pay only for the data scanned. Redshift requires data loading. RDS is a relational database. Glue is an ETL service for data preparation."
  },
  {
    id: 377,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.1",
    type: "multiple-response",
    question: "Which TWO AWS services can be used for infrastructure as code (IaC)? (Select TWO.)",
    options: [
      "A) AWS CloudFormation",
      "B) Amazon CloudWatch",
      "C) AWS CDK",
      "D) Amazon Inspector",
      "E) AWS Trusted Advisor"
    ],
    correctAnswers: [0, 2],
    explanation: "AWS CloudFormation uses JSON/YAML templates for IaC, and AWS CDK allows you to define infrastructure using programming languages (which synthesizes to CloudFormation). CloudWatch monitors resources. Inspector scans for vulnerabilities. Trusted Advisor provides recommendations."
  },
  {
    id: 378,
    domain: 3,
    domainName: "Cloud Technology and Services",
    topic: "3.5",
    type: "multiple-choice",
    question: "What is the purpose of an Internet Gateway attached to a VPC?",
    options: [
      "A) To encrypt traffic between VPCs",
      "B) To enable communication between the VPC and the internet",
      "C) To connect the VPC to an on-premises network",
      "D) To load balance traffic across subnets"
    ],
    correctAnswers: [1],
    explanation: "An Internet Gateway enables resources in public subnets to communicate with the internet. It does not encrypt traffic, connect to on-premises (that is VPN/Direct Connect), or load balance (that is ELB)."
  },

  // ============================================================
  // DOMAIN 4: BILLING, PRICING, AND SUPPORT — 22 new questions
  // ============================================================

  {
    id: 379,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.1",
    type: "multiple-choice",
    question: "A company has steady-state workloads running 24/7 for the next three years. Which EC2 pricing model offers the GREATEST cost savings?",
    options: [
      "A) On-Demand Instances",
      "B) Spot Instances",
      "C) Reserved Instances (3-year, All Upfront)",
      "D) Dedicated Hosts"
    ],
    correctAnswers: [2],
    explanation: "A 3-year All Upfront Reserved Instance offers the greatest savings (up to 72%) for predictable, steady-state workloads. On-Demand has no discount. Spot can be interrupted. Dedicated Hosts cost more and are for licensing or compliance needs."
  },
  {
    id: 380,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.1",
    type: "multiple-choice",
    question: "Which EC2 pricing option provides a commitment to a consistent amount of compute usage (measured in $/hour) for 1 or 3 years, with flexibility across instance families?",
    options: [
      "A) Standard Reserved Instances",
      "B) Convertible Reserved Instances",
      "C) Savings Plans (Compute)",
      "D) Spot Instances"
    ],
    correctAnswers: [2],
    explanation: "Compute Savings Plans provide the most flexibility, applying to any EC2 instance family, size, OS, tenancy, or Region, as well as Fargate and Lambda. Standard RIs are locked to specific attributes. Convertible RIs allow some changes. Spot Instances can be interrupted."
  },
  {
    id: 381,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.1",
    type: "multiple-choice",
    question: "Which of the following is typically FREE when transferring data in AWS?",
    options: [
      "A) Data transfer from EC2 to the internet",
      "B) Data transfer between AWS Regions",
      "C) Data transfer INTO AWS from the internet",
      "D) Data transfer between Availability Zones"
    ],
    correctAnswers: [2],
    explanation: "Data transfer into AWS (ingress) from the internet is free. Data out to the internet, between Regions, and between AZs all incur charges. This encourages moving data into AWS and is an important pricing concept."
  },
  {
    id: 382,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.2",
    type: "multiple-choice",
    question: "A company wants to receive alerts when their monthly AWS spending exceeds a threshold. Which service should they configure?",
    options: [
      "A) AWS Cost Explorer",
      "B) AWS Budgets",
      "C) AWS Pricing Calculator",
      "D) AWS Cost and Usage Report"
    ],
    correctAnswers: [1],
    explanation: "AWS Budgets allows you to set custom spending thresholds and receive alerts via email or SNS when actual or forecasted costs exceed the budget. Cost Explorer visualizes spending. Pricing Calculator estimates future costs. Cost and Usage Report provides detailed billing data."
  },
  {
    id: 383,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.2",
    type: "multiple-choice",
    question: "Which AWS service provides a visual interface to explore and analyze your AWS spending over time, with forecasting capabilities?",
    options: [
      "A) AWS Budgets",
      "B) AWS Cost Explorer",
      "C) AWS Billing Dashboard",
      "D) AWS Trusted Advisor"
    ],
    correctAnswers: [1],
    explanation: "AWS Cost Explorer provides an interactive visualization of your AWS spending, allows filtering by service, account, and tags, and includes forecasting. Budgets sets alerts. Billing Dashboard shows current month summary. Trusted Advisor provides best practice recommendations."
  },
  {
    id: 384,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.2",
    type: "multiple-choice",
    question: "Which AWS feature allows a company to manage multiple AWS accounts under one organization and consolidate billing?",
    options: [
      "A) AWS IAM",
      "B) AWS Organizations",
      "C) AWS Control Tower",
      "D) AWS Resource Groups"
    ],
    correctAnswers: [1],
    explanation: "AWS Organizations enables consolidated billing for multiple accounts, allowing volume discounts across the organization. IAM manages users within an account. Control Tower sets up and governs a multi-account environment. Resource Groups organize resources within an account."
  },
  {
    id: 385,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.3",
    type: "multiple-choice",
    question: "Which AWS Support plan provides access to a Technical Account Manager (TAM)?",
    options: [
      "A) Basic",
      "B) Developer",
      "C) Business",
      "D) Enterprise"
    ],
    correctAnswers: [3],
    explanation: "Only the Enterprise Support plan includes a designated Technical Account Manager who provides proactive guidance and advocacy. Basic is free with limited support. Developer offers technical support during business hours. Business offers 24/7 support but no TAM."
  },
  {
    id: 386,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.3",
    type: "multiple-choice",
    question: "A startup needs technical support for AWS but wants to keep costs low. They only need support during business hours with a 12-hour response time for general guidance. Which plan is MOST appropriate?",
    options: [
      "A) Basic",
      "B) Developer",
      "C) Business",
      "D) Enterprise"
    ],
    correctAnswers: [1],
    explanation: "The Developer plan provides technical support via email during business hours with a 12-hour response time for general guidance. Basic has no technical support. Business and Enterprise are more expensive and provide more than needed for this use case."
  },
  {
    id: 387,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.3",
    type: "multiple-response",
    question: "Which TWO AWS Support plans offer 24/7 access to Cloud Support Engineers via phone, email, and chat? (Select TWO.)",
    options: [
      "A) Basic",
      "B) Developer",
      "C) Business",
      "D) Enterprise",
      "E) Free Tier"
    ],
    correctAnswers: [2, 3],
    explanation: "Business and Enterprise Support plans both provide 24/7 access to Cloud Support Engineers via phone, chat, and email. Basic offers no technical support. Developer offers email-only support during business hours. Free Tier is not a support plan."
  },
  {
    id: 388,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.1",
    type: "multiple-choice",
    question: "Which AWS pricing feature allows new customers to explore and try AWS services free of charge for a limited time?",
    options: [
      "A) Savings Plans",
      "B) AWS Free Tier",
      "C) Reserved Instances",
      "D) Volume discounts"
    ],
    correctAnswers: [1],
    explanation: "The AWS Free Tier provides free access to many AWS services for new accounts, including 12-month free offers, always-free services, and short-term trials. Savings Plans and Reserved Instances require commitments. Volume discounts reduce per-unit cost at scale."
  },
  {
    id: 389,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.2",
    type: "multiple-choice",
    question: "A company wants to tag AWS resources by department and project to track costs separately. Which feature enables this?",
    options: [
      "A) AWS Organizations OUs",
      "B) Cost allocation tags",
      "C) IAM policies",
      "D) Resource Groups"
    ],
    correctAnswers: [1],
    explanation: "Cost allocation tags allow you to categorize and track AWS costs by adding metadata (like department or project) to resources. Organizations OUs group accounts. IAM policies control permissions. Resource Groups organize resources for management but do not directly appear in billing reports."
  },
  {
    id: 390,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.2",
    type: "multiple-choice",
    question: "What is a benefit of consolidated billing in AWS Organizations?",
    options: [
      "A) Each account gets a separate Technical Account Manager",
      "B) Volume pricing discounts are shared across all accounts in the organization",
      "C) All accounts automatically receive Enterprise Support",
      "D) Data transfer between Regions is free for all member accounts"
    ],
    correctAnswers: [1],
    explanation: "Consolidated billing aggregates usage across member accounts, qualifying the organization for volume pricing discounts (like S3 tiered pricing). TAMs are per support plan. Support is per account. Data transfer charges still apply."
  },
  {
    id: 391,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.3",
    type: "multiple-choice",
    question: "Which AWS service provides best practice recommendations across cost optimization, security, fault tolerance, performance, and service limits?",
    options: [
      "A) AWS Config",
      "B) AWS Trusted Advisor",
      "C) AWS CloudTrail",
      "D) AWS Systems Manager"
    ],
    correctAnswers: [1],
    explanation: "AWS Trusted Advisor inspects your AWS environment and provides recommendations across five categories: cost optimization, security, fault tolerance, performance, and service limits. Config tracks configurations. CloudTrail logs API calls. Systems Manager manages infrastructure."
  },
  {
    id: 392,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.1",
    type: "multiple-choice",
    question: "Which AWS service is always free, regardless of usage, and provides DNS resolution?",
    options: [
      "A) Amazon Route 53",
      "B) Amazon VPC",
      "C) Amazon CloudFront",
      "D) AWS IAM"
    ],
    correctAnswers: [3],
    explanation: "AWS IAM is always free — you are not charged for creating users, groups, roles, or policies. Route 53 charges for hosted zones and queries. VPC itself is free but associated resources cost money. CloudFront charges for data transfer."
  },
  {
    id: 393,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.1",
    type: "multiple-choice",
    question: "How does Amazon S3 pricing work for storage?",
    options: [
      "A) Flat monthly fee regardless of data stored",
      "B) Per-GB per-month based on storage class used",
      "C) Per-file stored regardless of size",
      "D) Free for the first 1 TB, then flat rate"
    ],
    correctAnswers: [1],
    explanation: "S3 charges per GB per month based on the storage class. Different classes (Standard, IA, Glacier) have different per-GB rates. There is no flat monthly fee, per-file charge, or 1 TB free threshold (though the Free Tier offers 5 GB for 12 months)."
  },
  {
    id: 394,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.2",
    type: "multiple-response",
    question: "Which TWO AWS tools help a company understand and manage their AWS costs? (Select TWO.)",
    options: [
      "A) AWS Cost Explorer",
      "B) Amazon CloudWatch",
      "C) AWS Budgets",
      "D) AWS CloudFormation",
      "E) Amazon GuardDuty"
    ],
    correctAnswers: [0, 2],
    explanation: "AWS Cost Explorer visualizes and analyzes spending patterns, and AWS Budgets sets custom cost thresholds with alerts. CloudWatch monitors operational metrics. CloudFormation provisions infrastructure. GuardDuty detects security threats."
  },
  {
    id: 395,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.3",
    type: "multiple-choice",
    question: "Which AWS resource provides documentation, tutorials, whitepapers, and reference architectures at no cost?",
    options: [
      "A) AWS Trusted Advisor",
      "B) AWS Knowledge Center and documentation",
      "C) AWS Enterprise Support",
      "D) AWS Professional Services"
    ],
    correctAnswers: [1],
    explanation: "AWS Knowledge Center, documentation, whitepapers, and reference architectures are freely available to all customers. Trusted Advisor has limited free checks. Enterprise Support is paid. Professional Services are consulting engagements."
  },
  {
    id: 396,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.2",
    type: "multiple-choice",
    question: "Which AWS service provides the most detailed and comprehensive billing data, suitable for importing into analytics tools?",
    options: [
      "A) AWS Cost Explorer",
      "B) AWS Budgets",
      "C) AWS Cost and Usage Report (CUR)",
      "D) AWS Billing Dashboard"
    ],
    correctAnswers: [2],
    explanation: "The AWS Cost and Usage Report (CUR) provides the most granular billing data, including hourly line items for every resource. It can be delivered to S3 for analysis with Athena or Redshift. Cost Explorer provides visualizations. Budgets sets alerts. The Billing Dashboard shows summaries."
  },
  {
    id: 397,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.1",
    type: "multiple-choice",
    question: "A company wants flexibility to change EC2 instance families during their Reserved Instance term. Which option allows this?",
    options: [
      "A) Standard Reserved Instances",
      "B) Convertible Reserved Instances",
      "C) Spot Instances",
      "D) On-Demand Instances"
    ],
    correctAnswers: [1],
    explanation: "Convertible Reserved Instances allow you to change instance families, operating systems, and tenancy during the term, providing more flexibility than Standard RIs. Standard RIs are locked to specific attributes. Spot Instances have no commitment. On-Demand has no discount."
  },
  {
    id: 398,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.3",
    type: "multiple-choice",
    question: "A production system is down and a company needs the fastest possible response from AWS Support. Which support plan provides a response time of less than 15 minutes for critical issues?",
    options: [
      "A) Developer",
      "B) Business",
      "C) Enterprise",
      "D) Basic"
    ],
    correctAnswers: [2],
    explanation: "Enterprise Support provides a less-than-15-minute response time for business-critical system down cases. Business offers less than 1 hour. Developer offers less than 12 hours for general guidance. Basic provides no technical support."
  },
  {
    id: 399,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.2",
    type: "multiple-choice",
    question: "Which AWS service helps set up and govern a secure, multi-account AWS environment following best practices?",
    options: [
      "A) AWS Organizations",
      "B) AWS Control Tower",
      "C) AWS IAM",
      "D) AWS Config"
    ],
    correctAnswers: [1],
    explanation: "AWS Control Tower automates the setup of a well-architected multi-account environment with guardrails based on best practices. Organizations manages accounts and billing. IAM manages access within accounts. Config tracks resource compliance."
  },
  {
    id: 400,
    domain: 4,
    domainName: "Billing, Pricing, and Support",
    topic: "4.1",
    type: "multiple-choice",
    question: "Which pricing model charges based on the number of requests and the duration of code execution, with no charges when code is not running?",
    options: [
      "A) EC2 On-Demand pricing",
      "B) AWS Lambda pricing",
      "C) EC2 Reserved Instance pricing",
      "D) Amazon RDS pricing"
    ],
    correctAnswers: [1],
    explanation: "AWS Lambda charges based on the number of requests and the duration of code execution (in GB-seconds). There is no charge when your code is not running. EC2 charges per hour/second while instances run. Reserved Instances require upfront or recurring commitments. RDS charges by instance-hour."
  }
];
