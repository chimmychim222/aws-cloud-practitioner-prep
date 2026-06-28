// AWS Certified Cloud Practitioner (CLF-C02) Training Content
// Comprehensive study material organized by exam domain and topic

window.trainingContent = {
  "1": {
    name: "Cloud Concepts",
    weight: 24,
    topics: {
      "1.1": {
        title: "Define the benefits of the AWS Cloud",
        content: `<h3>Benefits of the AWS Cloud</h3>

<p>AWS provides numerous advantages over traditional on-premises infrastructure. Understanding these benefits is essential for the CLF-C02 exam and for making informed decisions about cloud adoption.</p>

<div class="key-concept">
  <h4>Six Core Advantages of Cloud Computing</h4>
  <ol>
    <li><strong>Trade upfront expense for variable expense</strong> &mdash; Instead of investing heavily in data centers before knowing how you will use them, you pay only when you consume computing resources and only for how much you consume.</li>
    <li><strong>Benefit from massive economies of scale</strong> &mdash; Because usage from hundreds of thousands of customers is aggregated in the cloud, AWS can achieve higher economies of scale, translating into lower pay-as-you-go prices.</li>
    <li><strong>Stop guessing capacity</strong> &mdash; Eliminate guessing about infrastructure capacity needs. With cloud computing, you can access as much or as little capacity as you need and scale up or down within minutes.</li>
    <li><strong>Increase speed and agility</strong> &mdash; New IT resources are only a click away, reducing the time to make those resources available from weeks to minutes. This dramatically increases agility for the organization.</li>
    <li><strong>Stop spending money running and maintaining data centers</strong> &mdash; Focus on projects that differentiate your business, not the infrastructure. Let AWS handle the heavy lifting of racking, stacking, and powering servers.</li>
    <li><strong>Go global in minutes</strong> &mdash; Deploy your application in multiple AWS Regions around the world with just a few clicks, providing low latency and a better experience for customers at minimal cost.</li>
  </ol>
</div>

<h4>High Availability</h4>
<p>AWS designs its infrastructure to be highly available. Services are deployed across multiple Availability Zones (AZs) within a Region. If one AZ experiences issues, traffic can be rerouted to healthy AZs. AWS offers Service Level Agreements (SLAs) with uptime guarantees, often 99.99% or higher for key services.</p>

<h4>Elasticity and Scalability</h4>
<p><strong>Elasticity</strong> is the ability to automatically acquire resources when you need them and release resources when you no longer need them. In the cloud, you want your infrastructure to match demand as closely as possible.</p>
<ul>
  <li><strong>Scale out (horizontal scaling)</strong> &mdash; Add more instances to handle increased load (e.g., adding EC2 instances behind a load balancer).</li>
  <li><strong>Scale up (vertical scaling)</strong> &mdash; Increase the size of an existing instance (e.g., moving from a t3.medium to a t3.xlarge).</li>
  <li><strong>Scale in/down</strong> &mdash; Remove resources when demand decreases to avoid unnecessary cost.</li>
</ul>

<h4>Agility</h4>
<p>Cloud agility means you can rapidly develop, test, and launch software applications. AWS provides a vast array of pre-built services that reduce time-to-market. Instead of months to procure and configure hardware, you can spin up infrastructure in minutes.</p>

<h4>Pay-As-You-Go Pricing</h4>
<p>With AWS, you pay only for the individual services you need, for as long as you use them, and without long-term contracts or complex licensing. This model has several forms:</p>
<ul>
  <li><strong>On-Demand</strong> &mdash; Pay for compute or database capacity by the hour or second with no long-term commitments.</li>
  <li><strong>Reserved</strong> &mdash; Make a commitment for 1 or 3 years and receive a significant discount.</li>
  <li><strong>Spot</strong> &mdash; Request spare compute capacity at steep discounts (up to 90% off On-Demand).</li>
  <li><strong>Pay-per-use</strong> &mdash; Services like Lambda charge per request and per duration of execution.</li>
</ul>

<h4>Global Infrastructure</h4>
<p>AWS operates in dozens of geographic Regions worldwide, each containing multiple isolated Availability Zones. This global footprint allows you to deploy applications close to your end users, reducing latency and improving performance. Edge locations (used by CloudFront and Route 53) number in the hundreds, bringing content even closer to users.</p>

<div class="tip-box">
  <h4>Exam Tip</h4>
  <p>The exam loves to test the difference between elasticity (automatic scaling to match demand) and agility (speed to innovate and deploy). Elasticity is about resources; agility is about speed of business.</p>
</div>`
      },
      "1.2": {
        title: "Identify design principles of the AWS Cloud",
        content: `<h3>AWS Well-Architected Framework</h3>

<p>The AWS Well-Architected Framework helps cloud architects build secure, high-performing, resilient, and efficient infrastructure for their applications. It is organized into <strong>six pillars</strong>, each representing a key area of architectural best practices.</p>

<div class="key-concept">
  <h4>The Six Pillars of the Well-Architected Framework</h4>
  <ol>
    <li>Operational Excellence</li>
    <li>Security</li>
    <li>Reliability</li>
    <li>Performance Efficiency</li>
    <li>Cost Optimization</li>
    <li>Sustainability</li>
  </ol>
</div>

<h4>Pillar 1: Operational Excellence</h4>
<p>This pillar focuses on running and monitoring systems to deliver business value and continually improving processes and procedures.</p>
<ul>
  <li><strong>Perform operations as code</strong> &mdash; Define your entire workload (applications and infrastructure) as code and update it with code. Use AWS CloudFormation to script infrastructure.</li>
  <li><strong>Make frequent, small, reversible changes</strong> &mdash; Design workloads to allow components to be updated regularly. Make changes in small increments that can be reversed if they fail.</li>
  <li><strong>Refine operations procedures frequently</strong> &mdash; Look for opportunities to improve operations procedures and update them as your workload evolves.</li>
  <li><strong>Anticipate failure</strong> &mdash; Perform pre-mortem exercises to identify potential sources of failure so they can be removed or mitigated. Test failure scenarios and validate your understanding of their impact.</li>
  <li><strong>Learn from all operational failures</strong> &mdash; Drive improvement through lessons learned from all operational events and failures.</li>
</ul>
<p><strong>Key AWS services:</strong> <span class="service-highlight">AWS CloudFormation</span>, <span class="service-highlight">AWS Config</span>, <span class="service-highlight">Amazon CloudWatch</span>, <span class="service-highlight">AWS Systems Manager</span>.</p>

<h4>Pillar 2: Security</h4>
<p>The security pillar focuses on protecting information and systems. Key topics include confidentiality and integrity of data, identifying and managing who can do what (privilege management), protecting systems, and establishing controls to detect security events.</p>
<ul>
  <li><strong>Implement a strong identity foundation</strong> &mdash; Use the principle of least privilege and enforce separation of duties with appropriate authorization for each interaction with your AWS resources. Centralize identity management with IAM Identity Center.</li>
  <li><strong>Enable traceability</strong> &mdash; Monitor, alert, and audit actions and changes to your environment in real time. Integrate log and metric collection with systems to automatically investigate and take action.</li>
  <li><strong>Apply security at all layers</strong> &mdash; Apply a defense-in-depth approach with multiple security controls at every layer (edge, VPC, load balancer, instance, OS, application).</li>
  <li><strong>Automate security best practices</strong> &mdash; Automated software-based security mechanisms let you scale more rapidly and cost-effectively. Create secure architectures and implement controls defined and managed as code in version-controlled templates.</li>
  <li><strong>Protect data in transit and at rest</strong> &mdash; Classify your data into sensitivity levels and use mechanisms such as encryption, tokenization, and access control where appropriate.</li>
  <li><strong>Keep people away from data</strong> &mdash; Use mechanisms and tools to reduce or eliminate direct access to or manual processing of data.</li>
  <li><strong>Prepare for security events</strong> &mdash; Have incident management and investigation processes that align with your organizational requirements. Run incident response simulations.</li>
</ul>
<p><strong>Key AWS services:</strong> <span class="service-highlight">AWS IAM</span>, <span class="service-highlight">AWS KMS</span>, <span class="service-highlight">AWS CloudTrail</span>, <span class="service-highlight">Amazon GuardDuty</span>, <span class="service-highlight">AWS Security Hub</span>.</p>

<h4>Pillar 3: Reliability</h4>
<p>The reliability pillar ensures a workload performs its intended function correctly and consistently when expected. This includes the ability to operate and test the workload through its total lifecycle.</p>
<ul>
  <li><strong>Automatically recover from failure</strong> &mdash; Monitor key performance indicators (KPIs) and trigger automation when a threshold is breached to remediate issues.</li>
  <li><strong>Test recovery procedures</strong> &mdash; In the cloud, you can test how your workload fails and validate your recovery procedures. Use automation to simulate different failures or recreate failure scenarios.</li>
  <li><strong>Scale horizontally to increase aggregate workload availability</strong> &mdash; Replace one large resource with multiple small resources to reduce the impact of a single failure.</li>
  <li><strong>Stop guessing capacity</strong> &mdash; Monitor demand and workload utilization; automate the addition or removal of resources to maintain optimal levels.</li>
  <li><strong>Manage change in automation</strong> &mdash; Use automation to make changes to infrastructure, making it predictable and auditable.</li>
</ul>
<p><strong>Key AWS services:</strong> <span class="service-highlight">Amazon CloudWatch</span>, <span class="service-highlight">AWS Auto Scaling</span>, <span class="service-highlight">Amazon S3</span>, <span class="service-highlight">Elastic Load Balancing</span>.</p>

<h4>Pillar 4: Performance Efficiency</h4>
<p>This pillar focuses on using computing resources efficiently to meet system requirements and to maintain that efficiency as demand changes and technologies evolve.</p>
<ul>
  <li><strong>Democratize advanced technologies</strong> &mdash; Use managed services to consume technologies as a service. For example, use Amazon RDS instead of managing your own database server.</li>
  <li><strong>Go global in minutes</strong> &mdash; Deploy in multiple Regions to provide lower latency and a better experience for customers worldwide.</li>
  <li><strong>Use serverless architectures</strong> &mdash; Remove the need for you to run and maintain physical servers. Services like AWS Lambda let you run code without provisioning servers.</li>
  <li><strong>Experiment more often</strong> &mdash; With virtual and automatable resources, you can quickly carry out comparative testing using different types of instances, storage, or configurations.</li>
  <li><strong>Consider mechanical sympathy</strong> &mdash; Use the technology approach that aligns best to your goals. For example, consider data access patterns when selecting database or storage approaches.</li>
</ul>
<p><strong>Key AWS services:</strong> <span class="service-highlight">AWS Lambda</span>, <span class="service-highlight">Amazon EC2 Auto Scaling</span>, <span class="service-highlight">Amazon CloudFront</span>, <span class="service-highlight">Amazon ElastiCache</span>.</p>

<h4>Pillar 5: Cost Optimization</h4>
<p>This pillar focuses on avoiding unnecessary costs. Key topics include understanding spending, selecting the most appropriate and right number of resource types, analyzing spending over time, and scaling to meet business needs without overspending.</p>
<ul>
  <li><strong>Implement Cloud Financial Management</strong> &mdash; Invest in Cloud Financial Management to build capability and establish a cost-aware culture.</li>
  <li><strong>Adopt a consumption model</strong> &mdash; Pay only for the computing resources that you require. Increase or decrease usage depending on business requirements.</li>
  <li><strong>Measure overall efficiency</strong> &mdash; Measure the business output of the workload and the costs associated with delivering it. Use this measure to know the gains you make from increasing output and reducing costs.</li>
  <li><strong>Stop spending money on undifferentiated heavy lifting</strong> &mdash; AWS does the heavy lifting of data center operations. You can focus on customers and business projects rather than on IT infrastructure.</li>
  <li><strong>Analyze and attribute expenditure</strong> &mdash; Accurately identify the usage and cost of systems with tagging. This transparent attribution of costs allows you to know your ROI.</li>
</ul>
<p><strong>Key AWS services:</strong> <span class="service-highlight">AWS Cost Explorer</span>, <span class="service-highlight">AWS Budgets</span>, <span class="service-highlight">AWS Trusted Advisor</span>, <span class="service-highlight">Amazon S3 Intelligent-Tiering</span>.</p>

<h4>Pillar 6: Sustainability</h4>
<p>The sustainability pillar focuses on minimizing the environmental impacts of running cloud workloads. Key topics include a shared responsibility model for sustainability, understanding impact, and maximizing utilization to minimize required resources and reduce downstream impacts.</p>
<ul>
  <li><strong>Understand your impact</strong> &mdash; Measure the impact of your cloud workload and model future impact.</li>
  <li><strong>Establish sustainability goals</strong> &mdash; Set long-term goals for each workload, model return on investment, and give owners the resources to invest in sustainability targets.</li>
  <li><strong>Maximize utilization</strong> &mdash; Right-size each workload to maximize the energy efficiency of the underlying hardware and minimize idle resources.</li>
  <li><strong>Anticipate and adopt new, more efficient offerings</strong> &mdash; Support upstream improvements your partners and suppliers make to help you reduce the impact of your cloud workloads, such as Graviton processors.</li>
  <li><strong>Use managed services</strong> &mdash; Shared services reduce the amount of infrastructure needed to support a broad range of workloads.</li>
  <li><strong>Reduce the downstream impact of your cloud workloads</strong> &mdash; Reduce the amount of energy or resources required for your services and reduce the need for customers to upgrade their devices.</li>
</ul>
<p><strong>Key AWS services:</strong> <span class="service-highlight">AWS Graviton</span>-based instances, <span class="service-highlight">Amazon S3 Intelligent-Tiering</span>, <span class="service-highlight">AWS Auto Scaling</span>, <span class="service-highlight">AWS Cost Explorer</span>.</p>

<div class="tip-box">
  <h4>Exam Tip</h4>
  <p>Know the six pillars by name and be able to match design principles to the correct pillar. Sustainability was added in late 2021 and is the newest pillar. The exam may test whether you know there are six (not five) pillars. Also know that the AWS Well-Architected Tool in the console helps you review your architectures against these pillars.</p>
</div>`
      },
      "1.3": {
        title: "Understand the strategies for migration and cloud economics",
        content: `<h3>Cloud Migration Strategies</h3>

<p>Migrating to the cloud is a significant undertaking. AWS provides frameworks, tools, and strategies to help organizations plan and execute successful migrations. The CLF-C02 exam tests your understanding of migration strategies and the services that support them.</p>

<div class="key-concept">
  <h4>AWS Cloud Adoption Framework (AWS CAF)</h4>
  <p>The AWS Cloud Adoption Framework organizes guidance into six focus areas called <strong>perspectives</strong>. Each perspective covers distinct responsibilities owned or managed by functionally related stakeholders.</p>
  <ul>
    <li><strong>Business Perspective</strong> &mdash; Ensures IT is aligned with business needs. Stakeholders: business managers, finance managers, budget owners, strategy stakeholders.</li>
    <li><strong>People Perspective</strong> &mdash; Supports development of an organization-wide change management strategy for cloud adoption. Stakeholders: HR, staffing managers, people managers.</li>
    <li><strong>Governance Perspective</strong> &mdash; Focuses on orchestrating cloud initiatives while maximizing organizational benefits and minimizing transformation-related risks. Stakeholders: CIO, program managers, enterprise architects, business analysts, portfolio managers.</li>
    <li><strong>Platform Perspective</strong> &mdash; Helps you build an enterprise-grade, scalable, hybrid cloud platform, modernize existing workloads, and implement new cloud-native solutions. Stakeholders: CTO, technology managers, solutions architects, DevOps engineers.</li>
    <li><strong>Security Perspective</strong> &mdash; Helps you achieve the confidentiality, integrity, and availability of your data and cloud workloads. Stakeholders: CISO, security architects, security engineers.</li>
    <li><strong>Operations Perspective</strong> &mdash; Helps ensure that your cloud services are delivered at a level that meets the needs of your business. Stakeholders: IT operations managers, IT support managers.</li>
  </ul>
</div>

<h4>The 6 R's of Migration</h4>
<p>When organizations plan to migrate applications to the cloud, each application can be approached using one of six common strategies, often called the "6 R's":</p>

<table class="comparison-table">
  <thead>
    <tr>
      <th>Strategy</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Rehost</strong> (Lift and Shift)</td>
      <td>Move applications to the cloud without changes. Fastest migration path.</td>
      <td>Moving an on-premises MySQL database to an EC2 instance in the cloud.</td>
    </tr>
    <tr>
      <td><strong>Replatform</strong> (Lift, Tinker, and Shift)</td>
      <td>Make a few cloud optimizations without changing the core architecture.</td>
      <td>Migrating a MySQL database to Amazon RDS MySQL instead of running it on EC2.</td>
    </tr>
    <tr>
      <td><strong>Refactor / Re-architect</strong></td>
      <td>Reimagine how the application is architected using cloud-native features. Most expensive but most beneficial long-term.</td>
      <td>Breaking a monolithic application into microservices running on Lambda and ECS.</td>
    </tr>
    <tr>
      <td><strong>Repurchase</strong> (Drop and Shop)</td>
      <td>Move to a different product, typically a SaaS platform.</td>
      <td>Moving from an on-premises CRM to Salesforce, or from on-premises email to Microsoft 365.</td>
    </tr>
    <tr>
      <td><strong>Retire</strong></td>
      <td>Remove applications that are no longer needed.</td>
      <td>Identifying IT assets that are no longer useful and can be turned off to save money.</td>
    </tr>
    <tr>
      <td><strong>Retain</strong> (Revisit)</td>
      <td>Keep applications in the source environment. Not ready to migrate, or recently upgraded.</td>
      <td>An application that requires major refactoring and is not a priority right now.</td>
    </tr>
  </tbody>
</table>

<h4>AWS Snow Family</h4>
<p>The AWS Snow Family is a collection of physical devices that help migrate large amounts of data into and out of AWS. They are useful when network transfer would be too slow, too expensive, or impractical.</p>
<ul>
  <li><strong><span class="service-highlight">AWS Snowcone</span></strong> &mdash; Smallest device. 8 TB of usable storage (HDD) or 14 TB (SSD). Portable, rugged, and can be used in edge computing scenarios. Can also use AWS DataSync to send data online.</li>
  <li><strong><span class="service-highlight">AWS Snowball Edge</span></strong> &mdash; Comes in two versions:
    <ul>
      <li><strong>Storage Optimized</strong> &mdash; 80 TB of HDD capacity for large-scale data migrations and local computing.</li>
      <li><strong>Compute Optimized</strong> &mdash; 28 TB of NVMe SSD capacity plus powerful compute resources (vCPUs, optional GPU) for edge computing use cases.</li>
    </ul>
  </li>
  <li><strong><span class="service-highlight">AWS Snowmobile</span></strong> &mdash; An exabyte-scale data transfer service. It is a 45-foot-long shipping container pulled by a semi-trailer truck. Up to 100 PB per Snowmobile. Ideal for moving extremely large datasets such as video libraries or data center shutdowns.</li>
</ul>

<h4>AWS Migration Hub</h4>
<p><span class="service-highlight">AWS Migration Hub</span> provides a single location to track the progress of application migrations across multiple AWS and partner solutions. It lets you choose the migration tools that best fit your needs while providing visibility into the status of migrations across your portfolio of applications.</p>

<h4>Other Migration Services</h4>
<ul>
  <li><strong><span class="service-highlight">AWS Application Migration Service (AWS MGN)</span></strong> &mdash; Automates lift-and-shift (rehost) migrations to AWS. Continuously replicates source servers and automatically converts them to boot and run natively on AWS.</li>
  <li><strong><span class="service-highlight">AWS Database Migration Service (AWS DMS)</span></strong> &mdash; Helps you migrate databases to AWS quickly and securely. Supports homogeneous migrations (e.g., Oracle to Oracle) and heterogeneous migrations (e.g., Oracle to Aurora PostgreSQL).</li>
  <li><strong><span class="service-highlight">AWS Schema Conversion Tool (AWS SCT)</span></strong> &mdash; Converts your existing database schema from one engine to another when doing heterogeneous database migrations.</li>
</ul>

<div class="tip-box">
  <h4>Exam Tip</h4>
  <p>Be able to match migration scenarios to the correct "R" strategy. The exam often describes a scenario and asks which migration strategy is being used. Also remember: Snowcone is smallest, Snowball is mid-size, Snowmobile is the truck for exabyte-scale migrations.</p>
</div>

<div class="warning-box">
  <h4>Common Misconception</h4>
  <p>Replatform and Refactor are often confused. Replatform involves minor tweaks (like switching to a managed database) while Refactor means completely redesigning the application architecture to be cloud-native. Refactor requires the most effort but provides the most cloud benefits.</p>
</div>`
      },
      "1.4": {
        title: "Understand the economics of cloud computing",
        content: `<h3>Cloud Economics</h3>

<p>Understanding the financial advantages of cloud computing is fundamental to the CLF-C02 exam. Cloud economics covers the shift from capital expenditure to operational expenditure, total cost of ownership analysis, and strategies for cost optimization.</p>

<div class="key-concept">
  <h4>Fixed Costs vs. Variable Costs</h4>
  <p><strong>Fixed costs</strong> (also called sunk costs) remain the same regardless of output. Examples include data center leases, hardware purchases, and full-time staff salaries for maintaining infrastructure.</p>
  <p><strong>Variable costs</strong> change in proportion to usage. In cloud computing, you pay only for what you consume. If you run zero EC2 instances, you pay nothing for EC2. This is the core financial benefit of cloud.</p>
</div>

<h4>Capital Expenditure (CapEx) vs. Operational Expenditure (OpEx)</h4>
<table class="comparison-table">
  <thead>
    <tr>
      <th>Aspect</th>
      <th>CapEx (Traditional IT)</th>
      <th>OpEx (Cloud)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Nature</strong></td>
      <td>Upfront investment in physical infrastructure</td>
      <td>Ongoing operational spending based on consumption</td>
    </tr>
    <tr>
      <td><strong>Payment Timing</strong></td>
      <td>Large payment before use</td>
      <td>Pay-as-you-go, monthly billing</td>
    </tr>
    <tr>
      <td><strong>Depreciation</strong></td>
      <td>Assets depreciate over time (3-5 years)</td>
      <td>No depreciation; expenses are fully deductible in the period incurred</td>
    </tr>
    <tr>
      <td><strong>Flexibility</strong></td>
      <td>Difficult to scale; over-provisioning or under-provisioning common</td>
      <td>Scale up or down instantly based on demand</td>
    </tr>
    <tr>
      <td><strong>Risk</strong></td>
      <td>High risk &mdash; large upfront investment based on forecasts that may be inaccurate</td>
      <td>Low risk &mdash; pay only for what you use</td>
    </tr>
    <tr>
      <td><strong>Examples</strong></td>
      <td>Buying servers, networking equipment, building a data center</td>
      <td>EC2 instances, S3 storage, Lambda invocations</td>
    </tr>
  </tbody>
</table>

<h4>Total Cost of Ownership (TCO)</h4>
<p>TCO is a financial estimate that helps identify the direct and indirect costs of a system. When comparing on-premises to cloud, TCO includes:</p>
<ul>
  <li><strong>Server costs</strong> &mdash; Hardware, software licenses, maintenance contracts</li>
  <li><strong>Storage costs</strong> &mdash; Hardware, administration, storage area network (SAN)</li>
  <li><strong>Network costs</strong> &mdash; Hardware, administration, bandwidth</li>
  <li><strong>IT labor costs</strong> &mdash; Server administration, virtualization administration</li>
  <li><strong>Facilities costs</strong> &mdash; Space, power, cooling, physical security</li>
  <li><strong>Extras</strong> &mdash; Project planning, advisors, legal, insurance, training</li>
</ul>
<p>AWS often has a significantly lower TCO because many of these costs are eliminated or reduced. The <span class="service-highlight">AWS Pricing Calculator</span> (formerly Simple Monthly Calculator) helps estimate monthly costs for AWS solutions.</p>

<h4>Right-Sizing</h4>
<p>Right-sizing is the process of matching instance types and sizes to your workload performance and capacity requirements at the lowest possible cost. It is one of the most effective ways to reduce cloud spending.</p>
<ul>
  <li>Analyze current resource utilization using <span class="service-highlight">Amazon CloudWatch</span> metrics and <span class="service-highlight">AWS Compute Optimizer</span>.</li>
  <li>Identify idle or underutilized resources.</li>
  <li>Downsize instances that are over-provisioned.</li>
  <li>Right-sizing should be performed continuously, not just once.</li>
  <li><span class="service-highlight">AWS Trusted Advisor</span> provides right-sizing recommendations under its cost optimization checks.</li>
</ul>

<h4>Licensing Models</h4>
<table class="comparison-table">
  <thead>
    <tr>
      <th>Model</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>BYOL (Bring Your Own License)</strong></td>
      <td>Use existing software licenses on AWS. Requires Dedicated Hosts or Dedicated Instances for some license types.</td>
      <td>Running your existing Windows Server or SQL Server licenses on EC2 Dedicated Hosts.</td>
    </tr>
    <tr>
      <td><strong>License Included</strong></td>
      <td>Software license cost is bundled into the AWS service price. No need to manage licenses separately.</td>
      <td>Using Amazon RDS for SQL Server &mdash; the license is included in the RDS pricing.</td>
    </tr>
  </tbody>
</table>
<p><span class="service-highlight">AWS License Manager</span> helps you manage software licenses from vendors such as Microsoft, SAP, Oracle, and IBM across AWS and on-premises environments.</p>

<div class="tip-box">
  <h4>Exam Tip</h4>
  <p>When the exam asks about reducing costs, think about: (1) right-sizing instances, (2) using Reserved Instances or Savings Plans for predictable workloads, (3) using Spot Instances for fault-tolerant workloads, (4) shutting down unused resources, (5) using S3 lifecycle policies to move data to cheaper storage classes. The biggest cost savings typically come from switching CapEx to OpEx.</p>
</div>

<div class="warning-box">
  <h4>Common Misconception</h4>
  <p>Cloud is not always cheaper in the short term. Migrating to the cloud requires investment in training, migration tools, and potentially re-architecting applications. The cost benefits become clearer over time, especially as you optimize your usage and take advantage of managed services. TCO analysis should consider a 3-5 year window for a fair comparison.</p>
</div>`
      }
    }
  },

  "2": {
    name: "Security and Compliance",
    weight: 30,
    topics: {
      "2.1": {
        title: "Define the AWS Shared Responsibility Model",
        content: `<h3>The AWS Shared Responsibility Model</h3>

<p>The Shared Responsibility Model is one of the most important concepts on the CLF-C02 exam. It defines who is responsible for what in the cloud. AWS is responsible for security <strong>"of"</strong> the cloud, while the customer is responsible for security <strong>"in"</strong> the cloud.</p>

<div class="key-concept">
  <h4>Core Principle</h4>
  <p><strong>AWS responsibility: Security OF the cloud</strong> &mdash; AWS is responsible for protecting the infrastructure that runs all AWS services. This includes hardware, software, networking, and facilities that run AWS Cloud services.</p>
  <p><strong>Customer responsibility: Security IN the cloud</strong> &mdash; Customers are responsible for managing and configuring the services they use. This varies depending on the services selected.</p>
</div>

<h4>Detailed Breakdown</h4>
<table class="comparison-table">
  <thead>
    <tr>
      <th>Responsibility</th>
      <th>AWS (Security OF the Cloud)</th>
      <th>Customer (Security IN the Cloud)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Physical</strong></td>
      <td>Data center physical security, environmental controls, power, cooling, hardware disposal</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><strong>Infrastructure</strong></td>
      <td>Global infrastructure (Regions, AZs, edge locations), host operating system, virtualization layer, networking infrastructure</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><strong>Compute</strong></td>
      <td>Hardware maintenance, hypervisor patching</td>
      <td>Guest OS patching (for EC2), application updates, security group configuration</td>
    </tr>
    <tr>
      <td><strong>Network</strong></td>
      <td>Network infrastructure, DDoS protection of the infrastructure</td>
      <td>VPC configuration, security groups, NACLs, firewall rules</td>
    </tr>
    <tr>
      <td><strong>Storage</strong></td>
      <td>Physical storage hardware, disk disposal</td>
      <td>Data encryption, access permissions, backup configuration</td>
    </tr>
    <tr>
      <td><strong>Data</strong></td>
      <td>N/A &mdash; AWS never accesses or uses customer data</td>
      <td>Data classification, encryption, backup, access management</td>
    </tr>
    <tr>
      <td><strong>Identity</strong></td>
      <td>AWS IAM service availability</td>
      <td>IAM user/role management, MFA, password policies, access key rotation</td>
    </tr>
  </tbody>
</table>

<h4>How Responsibility Varies by Service Type</h4>
<p>The extent of customer responsibility changes depending on the type of AWS service used:</p>

<table class="comparison-table">
  <thead>
    <tr>
      <th>Service Type</th>
      <th>Example</th>
      <th>Customer Manages</th>
      <th>AWS Manages</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>IaaS</strong> (Infrastructure as a Service)</td>
      <td>Amazon EC2</td>
      <td>OS patching, application, security groups, firewall, data encryption, IAM</td>
      <td>Hardware, hypervisor, networking, physical security</td>
    </tr>
    <tr>
      <td><strong>PaaS</strong> (Platform as a Service)</td>
      <td>AWS Elastic Beanstalk, Amazon RDS</td>
      <td>Application code, data encryption, IAM, some network settings</td>
      <td>OS patching, platform maintenance, hardware, infrastructure</td>
    </tr>
    <tr>
      <td><strong>SaaS</strong> (Software as a Service)</td>
      <td>Amazon Chime, AWS Trusted Advisor</td>
      <td>Data, user access configuration</td>
      <td>Almost everything else: application, platform, infrastructure</td>
    </tr>
    <tr>
      <td><strong>Serverless</strong></td>
      <td>AWS Lambda, Amazon S3</td>
      <td>Function code/data, IAM permissions, encryption settings</td>
      <td>Server management, OS, patching, scaling, availability</td>
    </tr>
  </tbody>
</table>

<h4>Shared Controls</h4>
<p>Some controls apply to both AWS and the customer, but at different layers:</p>
<ul>
  <li><strong>Patch management</strong> &mdash; AWS patches the infrastructure; customers patch their guest OS and applications.</li>
  <li><strong>Configuration management</strong> &mdash; AWS configures its infrastructure devices; customers configure their own databases, applications, and OS.</li>
  <li><strong>Awareness and training</strong> &mdash; AWS trains AWS employees; customers train their own employees.</li>
</ul>

<div class="tip-box">
  <h4>Exam Tip</h4>
  <p>A common exam question pattern: "Who is responsible for patching the operating system on EC2 instances?" Answer: The customer. "Who is responsible for patching the underlying infrastructure of RDS?" Answer: AWS. The key is understanding the service type. With EC2, you manage the OS. With RDS, AWS manages the OS and database engine patching.</p>
</div>

<div class="warning-box">
  <h4>Common Misconception</h4>
  <p>Many people think that moving to the cloud means AWS handles all security. This is incorrect. Customers always retain responsibility for their data, IAM configuration, application-level security, and encryption choices. Even with fully managed services like S3, the customer must still configure access policies and decide on encryption settings.</p>
</div>`
      },
      "2.2": {
        title: "Understand AWS Cloud security, governance, and compliance concepts",
        content: `<h3>Security, Governance, and Compliance in AWS</h3>

<p>AWS provides a comprehensive set of services and features to help organizations meet their security, governance, and compliance requirements. Understanding these is critical for the CLF-C02 exam.</p>

<div class="key-concept">
  <h4>AWS Artifact</h4>
  <p><span class="service-highlight">AWS Artifact</span> is a self-service portal that provides on-demand access to AWS compliance reports and select online agreements. It gives you access to AWS security and compliance documents such as AWS ISO certifications, Payment Card Industry (PCI) reports, and System and Organization Control (SOC) reports.</p>
  <ul>
    <li><strong>Artifact Reports</strong> &mdash; Download AWS compliance documents from third-party auditors (SOC, PCI, ISO, etc.).</li>
    <li><strong>Artifact Agreements</strong> &mdash; Review, accept, and track the status of AWS agreements such as the Business Associate Addendum (BAA) for HIPAA.</li>
  </ul>
</div>

<h4>Major Compliance Programs</h4>
<ul>
  <li><strong>HIPAA</strong> &mdash; Health Insurance Portability and Accountability Act. AWS offers a HIPAA-eligible environment and customers can sign a BAA (Business Associate Addendum) through AWS Artifact.</li>
  <li><strong>PCI DSS</strong> &mdash; Payment Card Industry Data Security Standard. AWS is PCI DSS Level 1 compliant. Customers who process credit card data can build PCI-compliant environments on AWS.</li>
  <li><strong>SOC 1, SOC 2, SOC 3</strong> &mdash; Service Organization Control reports. SOC 1 covers financial reporting controls. SOC 2 covers security, availability, processing integrity, confidentiality, and privacy. SOC 3 is a public summary of SOC 2.</li>
  <li><strong>ISO 27001</strong> &mdash; International standard for information security management systems. AWS maintains this certification.</li>
  <li><strong>GDPR</strong> &mdash; General Data Protection Regulation. AWS provides services, resources, and a Data Processing Addendum (DPA) to help customers comply with GDPR requirements for EU data protection.</li>
  <li><strong>FedRAMP</strong> &mdash; Federal Risk and Authorization Management Program. AWS GovCloud and certain AWS services are FedRAMP authorized for US government workloads.</li>
</ul>

<h4>Encryption</h4>
<p>AWS provides multiple mechanisms to protect data through encryption:</p>

<h5>Encryption at Rest</h5>
<p>Protecting data stored on disk. Most AWS services support encryption at rest:</p>
<ul>
  <li>S3 &mdash; Server-side encryption (SSE-S3, SSE-KMS, SSE-C) or client-side encryption.</li>
  <li>EBS volumes &mdash; Encrypted by default (can be enabled account-wide).</li>
  <li>RDS &mdash; Encryption at rest using KMS keys.</li>
</ul>

<h5>Encryption in Transit</h5>
<p>Protecting data as it moves between systems:</p>
<ul>
  <li>TLS/SSL certificates for HTTPS connections.</li>
  <li>VPN connections for encrypted tunnels to AWS.</li>
  <li>AWS Certificate Manager (ACM) provides free public TLS certificates.</li>
</ul>

<h5>Key Management</h5>
<ul>
  <li><strong><span class="service-highlight">AWS KMS (Key Management Service)</span></strong> &mdash; Create and manage encryption keys. Integrated with most AWS services. Supports automatic key rotation. You control who can use the keys through IAM policies.</li>
  <li><strong><span class="service-highlight">AWS CloudHSM</span></strong> &mdash; Dedicated Hardware Security Modules (HSMs) in the AWS Cloud. You have full control of the keys. Used for regulatory requirements that mandate FIPS 140-2 Level 3 validated HSMs. More expensive and complex than KMS.</li>
</ul>

<h4>Monitoring and Auditing Services</h4>
<table class="comparison-table">
  <thead>
    <tr>
      <th>Service</th>
      <th>Purpose</th>
      <th>Key Features</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong><span class="service-highlight">AWS CloudTrail</span></strong></td>
      <td>Records API calls and account activity (who did what, when, and from where)</td>
      <td>Enabled by default for 90 days; create a trail for long-term storage in S3; supports integrity validation; essential for auditing and compliance</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">Amazon CloudWatch</span></strong></td>
      <td>Monitors resources and applications, collects metrics and logs</td>
      <td>Dashboards, alarms, log aggregation, custom metrics; monitors performance (CPU, memory, disk, network)</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">AWS Config</span></strong></td>
      <td>Records and evaluates resource configurations over time</td>
      <td>Configuration history, compliance auditing, change notifications; "Is this resource configured correctly?"</td>
    </tr>
  </tbody>
</table>

<h4>Threat Detection and Protection Services</h4>
<table class="comparison-table">
  <thead>
    <tr>
      <th>Service</th>
      <th>What It Does</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong><span class="service-highlight">Amazon GuardDuty</span></strong></td>
      <td>Intelligent threat detection. Uses machine learning to analyze CloudTrail logs, VPC Flow Logs, and DNS logs to identify threats like cryptocurrency mining, compromised instances, and unauthorized access.</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">Amazon Inspector</span></strong></td>
      <td>Automated vulnerability management. Scans EC2 instances, container images in ECR, and Lambda functions for software vulnerabilities and unintended network exposure.</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">Amazon Macie</span></strong></td>
      <td>Uses machine learning to discover, classify, and protect sensitive data (like PII and credit card numbers) stored in Amazon S3.</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">AWS Shield</span></strong></td>
      <td>DDoS protection. <strong>Shield Standard</strong> is free and automatically protects all AWS customers. <strong>Shield Advanced</strong> provides enhanced DDoS protection, 24/7 access to the AWS DDoS Response Team (DRT), and cost protection (credits for scaling charges during an attack).</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">AWS Security Hub</span></strong></td>
      <td>Centralized security dashboard. Aggregates findings from GuardDuty, Inspector, Macie, Firewall Manager, and third-party tools into a single pane of glass. Runs automated security checks against best practices.</td>
    </tr>
  </tbody>
</table>

<div class="tip-box">
  <h4>Exam Tip</h4>
  <p>Remember the distinction: CloudTrail = "who did what" (API activity auditing), CloudWatch = "how are things performing" (metrics and monitoring), AWS Config = "how are things configured" (configuration compliance). GuardDuty is for threat detection, Inspector is for vulnerability scanning, and Macie is specifically for finding sensitive data in S3.</p>
</div>

<div class="warning-box">
  <h4>Common Misconception</h4>
  <p>AWS Shield Standard is free and automatic for all AWS accounts. You do not need to enable it or pay for it. Shield Advanced is the paid tier with additional features. Many exam questions try to trick you by asking which DDoS protection is automatically enabled.</p>
</div>`
      },
      "2.3": {
        title: "Identify AWS access management capabilities",
        content: `<h3>AWS Access Management</h3>

<p>Controlling who can access your AWS resources and what they can do is fundamental to cloud security. AWS Identity and Access Management (IAM) is the primary service for managing access. The CLF-C02 exam heavily tests IAM concepts.</p>

<div class="key-concept">
  <h4>AWS IAM (Identity and Access Management)</h4>
  <p>IAM is a <strong>free, global service</strong> (not Region-specific) that enables you to manage access to AWS services and resources securely. IAM allows you to create and manage AWS users, groups, roles, and permissions.</p>
</div>

<h4>IAM Components</h4>

<h5>IAM Users</h5>
<p>An IAM user is an identity that represents a person or application that interacts with AWS services and resources.</p>
<ul>
  <li>Each user has a unique name within the AWS account.</li>
  <li>Users can have a password (for console access) and/or access keys (for programmatic access via CLI/SDK).</li>
  <li>By default, a new IAM user has <strong>no permissions</strong>. You must explicitly grant permissions.</li>
  <li>Best practice: Create individual IAM users; never share credentials.</li>
</ul>

<h5>IAM Groups</h5>
<p>A group is a collection of IAM users. Groups let you assign permissions to multiple users at once.</p>
<ul>
  <li>A user can belong to multiple groups (up to 10).</li>
  <li>Groups cannot be nested (no groups within groups).</li>
  <li>Groups are not a true identity &mdash; you cannot use a group in a resource-based policy as a principal.</li>
  <li>Example: Create a "Developers" group with permissions to access EC2 and S3, then add developer users to that group.</li>
</ul>

<h5>IAM Roles</h5>
<p>An IAM role is an identity with specific permissions that can be <strong>assumed</strong> by anyone or anything that needs it. Roles do not have permanent credentials (password or access keys). Instead, temporary security credentials are provided when a role is assumed.</p>
<ul>
  <li><strong>EC2 instance roles</strong> &mdash; Allow applications running on EC2 instances to access other AWS services without embedding access keys.</li>
  <li><strong>Cross-account roles</strong> &mdash; Allow users from one AWS account to access resources in another account.</li>
  <li><strong>Service roles</strong> &mdash; Allow AWS services to act on your behalf (e.g., Lambda execution role).</li>
  <li><strong>Federation roles</strong> &mdash; Allow external identities (corporate directory, social login) to access AWS resources.</li>
</ul>

<h5>IAM Policies</h5>
<p>Policies are JSON documents that define permissions. They specify what actions are allowed or denied on which resources.</p>
<ul>
  <li><strong>Identity-based policies</strong> &mdash; Attached to users, groups, or roles. Define what the identity can do.</li>
  <li><strong>Resource-based policies</strong> &mdash; Attached to resources (like S3 buckets). Define who can access the resource.</li>
  <li><strong>AWS managed policies</strong> &mdash; Pre-built policies created and maintained by AWS (e.g., AmazonS3ReadOnlyAccess).</li>
  <li><strong>Customer managed policies</strong> &mdash; Custom policies you create and manage in your account.</li>
  <li><strong>Inline policies</strong> &mdash; Policies embedded directly in a single user, group, or role. Generally discouraged in favor of managed policies.</li>
</ul>
<p>Policies follow the principle of <strong>implicit deny</strong> &mdash; everything is denied by default. An explicit allow overrides an implicit deny, but an explicit deny always wins over an allow.</p>

<h4>Root User Best Practices</h4>
<div class="warning-box">
  <h4>Root User Security</h4>
  <p>The root user is the account owner created when the AWS account was first set up. It has <strong>complete, unrestricted access</strong> to all AWS services and resources. Best practices:</p>
  <ul>
    <li><strong>Enable MFA</strong> on the root user immediately.</li>
    <li><strong>Do not use the root user for everyday tasks.</strong> Create IAM users instead.</li>
    <li><strong>Do not create access keys</strong> for the root user.</li>
    <li><strong>Use a strong, unique password</strong> for the root user.</li>
    <li>Tasks that <em>require</em> root user: changing account settings, closing the account, restoring IAM user permissions, changing or canceling your AWS Support plan, registering as a seller in the Reserved Instance Marketplace, enabling MFA Delete on an S3 bucket, configuring an S3 bucket with a delete policy.</li>
  </ul>
</div>

<h4>Multi-Factor Authentication (MFA)</h4>
<p>MFA adds an extra layer of security beyond just a username and password. AWS supports several MFA types:</p>
<ul>
  <li><strong>Virtual MFA device</strong> &mdash; An authenticator app on your phone (e.g., Google Authenticator, Authy).</li>
  <li><strong>Hardware TOTP token</strong> &mdash; Physical key fob that generates time-based codes.</li>
  <li><strong>FIDO2 security key</strong> &mdash; Physical USB or NFC key (e.g., YubiKey).</li>
</ul>
<p>Best practice: Enable MFA for all users, especially the root user and any user with elevated privileges.</p>

<h4>Principle of Least Privilege</h4>
<p>Grant only the minimum permissions necessary to perform a task. Start with no permissions and add them as needed. This minimizes the potential impact of a security breach.</p>

<h4>AWS IAM Identity Center (formerly AWS SSO)</h4>
<p><span class="service-highlight">AWS IAM Identity Center</span> is the recommended service for managing workforce access to multiple AWS accounts and business applications. It provides:</p>
<ul>
  <li>Single sign-on (SSO) access to all assigned AWS accounts.</li>
  <li>Integration with corporate identity providers (Microsoft Active Directory, Okta, etc.) through SAML 2.0.</li>
  <li>Centralized permission management across multiple AWS accounts in an Organization.</li>
  <li>Built-in user portal for users to access their assigned accounts and applications.</li>
</ul>

<h4>Federation</h4>
<p>Federation allows external users (from corporate directories or social identity providers) to access AWS resources without creating IAM users. This is achieved through:</p>
<ul>
  <li><strong>SAML 2.0 federation</strong> &mdash; Integration with corporate identity providers (Active Directory, etc.).</li>
  <li><strong>Web identity federation</strong> &mdash; Use <span class="service-highlight">Amazon Cognito</span> to allow users who log in through social providers (Google, Facebook, Amazon) to access AWS resources.</li>
</ul>

<div class="tip-box">
  <h4>Exam Tip</h4>
  <p>Know the difference between IAM users (long-term credentials, for individual people or apps) and IAM roles (temporary credentials, for delegating access). The exam frequently asks about cross-account access, which is done through IAM roles, not by sharing credentials. Also remember: IAM is global, free, and everything is denied by default.</p>
</div>`
      },
      "2.4": {
        title: "Identify resources for security support",
        content: `<h3>Security Resources and Network Security</h3>

<p>AWS offers multiple layers of network security and a variety of resources to help you secure your environment. Understanding the differences between security tools and how they work together is important for the CLF-C02 exam.</p>

<h4>Security Groups vs. Network ACLs</h4>

<div class="key-concept">
  <h4>Security Groups and NACLs are the two primary network security mechanisms in a VPC.</h4>
</div>

<table class="comparison-table">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Security Groups</th>
      <th>Network ACLs (NACLs)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Level</strong></td>
      <td>Instance level (attached to ENI)</td>
      <td>Subnet level</td>
    </tr>
    <tr>
      <td><strong>Rules</strong></td>
      <td>Allow rules only</td>
      <td>Allow and Deny rules</td>
    </tr>
    <tr>
      <td><strong>State</strong></td>
      <td><strong>Stateful</strong> &mdash; return traffic is automatically allowed regardless of inbound rules</td>
      <td><strong>Stateless</strong> &mdash; return traffic must be explicitly allowed by rules</td>
    </tr>
    <tr>
      <td><strong>Rule Evaluation</strong></td>
      <td>All rules evaluated before deciding whether to allow traffic</td>
      <td>Rules processed in order (lowest number first); first match wins</td>
    </tr>
    <tr>
      <td><strong>Default Behavior</strong></td>
      <td>Default SG: allows all outbound, denies all inbound</td>
      <td>Default NACL: allows all inbound and outbound. Custom NACL: denies all by default.</td>
    </tr>
    <tr>
      <td><strong>Applies To</strong></td>
      <td>Only applies to instances explicitly associated with the SG</td>
      <td>Automatically applies to all instances in the associated subnet</td>
    </tr>
    <tr>
      <td><strong>Use Case</strong></td>
      <td>First line of defense at the instance level; most commonly used</td>
      <td>Additional layer of defense at the subnet level; used for explicit deny rules</td>
    </tr>
  </tbody>
</table>

<div class="tip-box">
  <h4>Memory Aid</h4>
  <p><strong>Security Groups = Stateful, allow only, instance-level.</strong> Think of a security guard who remembers you came in, so they automatically let you back out.</p>
  <p><strong>NACLs = Stateless, allow and deny, subnet-level.</strong> Think of a border checkpoint that checks your passport both ways &mdash; entering AND leaving.</p>
</div>

<h4>AWS WAF (Web Application Firewall)</h4>
<p><span class="service-highlight">AWS WAF</span> is a web application firewall that helps protect your web applications or APIs against common web exploits and bots that may affect availability, compromise security, or consume excessive resources.</p>
<ul>
  <li>Filters HTTP/HTTPS traffic based on rules you define.</li>
  <li>Protects against SQL injection, cross-site scripting (XSS), and other OWASP Top 10 threats.</li>
  <li>Can be deployed on <span class="service-highlight">Amazon CloudFront</span>, <span class="service-highlight">Application Load Balancer (ALB)</span>, <span class="service-highlight">Amazon API Gateway</span>, and <span class="service-highlight">AWS AppSync</span>.</li>
  <li>Supports rate-based rules to block IPs sending excessive requests.</li>
  <li>AWS provides Managed Rule Groups (pre-configured rules) and you can create custom rules.</li>
</ul>

<h4>AWS Firewall Manager</h4>
<p><span class="service-highlight">AWS Firewall Manager</span> is a security management service that allows you to centrally configure and manage firewall rules across your accounts and applications in AWS Organizations. It simplifies the administration of:</p>
<ul>
  <li>AWS WAF rules</li>
  <li>AWS Shield Advanced protections</li>
  <li>VPC security groups</li>
  <li>AWS Network Firewall rules</li>
  <li>Route 53 Resolver DNS Firewall rules</li>
</ul>
<p>This is especially useful for organizations with many AWS accounts that need consistent security policies.</p>

<h4>AWS Trusted Advisor Security Checks</h4>
<p><span class="service-highlight">AWS Trusted Advisor</span> provides real-time guidance to help you provision your resources following AWS best practices. The security category includes checks for:</p>
<ul>
  <li><strong>S3 bucket permissions</strong> &mdash; Identifies buckets with open access.</li>
  <li><strong>Security groups &mdash; unrestricted access</strong> &mdash; Checks for security groups that allow unrestricted access (0.0.0.0/0) to specific ports.</li>
  <li><strong>IAM use</strong> &mdash; Checks whether IAM users have been created (vs. using root).</li>
  <li><strong>MFA on root account</strong> &mdash; Checks whether MFA is enabled on the root user.</li>
  <li><strong>EBS public snapshots</strong> &mdash; Warns if EBS snapshots are marked as public.</li>
  <li><strong>RDS public snapshots</strong> &mdash; Warns if RDS snapshots are marked as public.</li>
</ul>
<p>Note: Basic and Developer support plans get access to 6 core security checks. Business, Enterprise On-Ramp, and Enterprise support plans get access to all Trusted Advisor checks.</p>

<h4>AWS Network Firewall</h4>
<p><span class="service-highlight">AWS Network Firewall</span> is a managed service that provides network traffic filtering for your VPC. It gives you fine-grained control over network traffic and supports stateful and stateless rule groups, intrusion prevention, and web filtering.</p>

<h4>AWS Marketplace Security Products</h4>
<p><span class="service-highlight">AWS Marketplace</span> is a digital catalog with thousands of software listings from independent software vendors. For security, you can find:</p>
<ul>
  <li>Third-party firewalls and intrusion detection/prevention systems.</li>
  <li>Antivirus and anti-malware solutions.</li>
  <li>Vulnerability scanners and penetration testing tools.</li>
  <li>Security information and event management (SIEM) solutions.</li>
  <li>Data encryption and key management products.</li>
  <li>Identity and access management solutions.</li>
</ul>
<p>Products can be AMIs, SaaS, containers, or delivered via AWS CloudFormation templates.</p>

<div class="warning-box">
  <h4>Common Misconception</h4>
  <p>Security groups and NACLs are not interchangeable. Security groups are stateful (return traffic is automatic) while NACLs are stateless (you must create explicit rules for return traffic). Many exam questions test this distinction. Also, security groups can only have allow rules &mdash; if you need to explicitly block a specific IP address, you need a NACL deny rule.</p>
</div>`
      }
    }
  },

  "3": {
    name: "Cloud Technology and Services",
    weight: 34,
    topics: {
      "3.1": {
        title: "Define methods of deploying and operating in the AWS Cloud",
        content: `<h3>Deploying and Operating in the AWS Cloud</h3>

<p>AWS provides multiple ways to interact with and deploy resources in the cloud. Understanding the different methods and deployment models is essential for the CLF-C02 exam.</p>

<h4>Ways to Access AWS</h4>

<div class="key-concept">
  <h4>Three Primary Ways to Interact with AWS</h4>
  <ol>
    <li><strong>AWS Management Console</strong> &mdash; Web-based graphical interface accessible through a browser. Best for learning, exploring, and managing resources visually. Also available as a mobile app.</li>
    <li><strong>AWS Command Line Interface (CLI)</strong> &mdash; A unified tool to manage AWS services from the command line. Useful for automation and scripting. Available for Windows, macOS, and Linux.</li>
    <li><strong>AWS Software Development Kits (SDKs)</strong> &mdash; Language-specific APIs (libraries) that let you interact with AWS services programmatically from your application code. Available for Python (Boto3), JavaScript, Java, .NET, Go, Ruby, PHP, C++, and more.</li>
  </ol>
</div>

<p>All three methods ultimately make API calls to AWS services. The console is a GUI wrapper, the CLI is a command-line wrapper, and the SDKs provide programmatic wrappers around the same underlying APIs.</p>

<h4>Infrastructure as Code (IaC)</h4>
<p>Infrastructure as Code means managing and provisioning infrastructure through machine-readable configuration files rather than through manual processes.</p>

<h5>AWS CloudFormation</h5>
<p><span class="service-highlight">AWS CloudFormation</span> is the primary IaC service in AWS. It allows you to model your entire infrastructure in a text file (template).</p>
<ul>
  <li>Templates are written in JSON or YAML.</li>
  <li>A <strong>stack</strong> is a collection of AWS resources that you manage as a single unit. Creating, updating, or deleting a stack creates, updates, or deletes the resources defined in the template.</li>
  <li>Supports <strong>rollback</strong> &mdash; if stack creation fails, CloudFormation rolls back changes automatically.</li>
  <li>Enables <strong>repeatability</strong> &mdash; deploy the same infrastructure in multiple Regions or accounts.</li>
  <li><strong>Drift detection</strong> &mdash; identifies resources whose actual configuration differs from the template definition.</li>
  <li>Free to use (you only pay for the resources created).</li>
</ul>

<h5>AWS CDK (Cloud Development Kit)</h5>
<p><span class="service-highlight">AWS CDK</span> is an open-source software development framework that lets you define cloud infrastructure using familiar programming languages (TypeScript, Python, Java, C#, Go). CDK code is synthesized into CloudFormation templates.</p>

<h4>Deployment Models</h4>
<table class="comparison-table">
  <thead>
    <tr>
      <th>Model</th>
      <th>Description</th>
      <th>Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Cloud (All-in)</strong></td>
      <td>All parts of the application run in the cloud. Either migrated from existing infrastructure or built new in the cloud.</td>
      <td>Startups, new applications, organizations fully committed to cloud.</td>
    </tr>
    <tr>
      <td><strong>Hybrid</strong></td>
      <td>Infrastructure split between the cloud and on-premises (or between cloud and another cloud). Connected via VPN or Direct Connect.</td>
      <td>Organizations with legacy systems, regulatory requirements for on-premises data, gradual migration.</td>
    </tr>
    <tr>
      <td><strong>On-Premises (Private Cloud)</strong></td>
      <td>Resources deployed on-premises using cloud management tools like AWS Outposts or VMware Cloud on AWS.</td>
      <td>Strict compliance requirements, legacy applications that cannot be migrated, data sovereignty.</td>
    </tr>
  </tbody>
</table>

<h4>Deployment and Management Services</h4>

<h5>AWS Elastic Beanstalk</h5>
<p><span class="service-highlight">AWS Elastic Beanstalk</span> is a Platform as a Service (PaaS) that makes it easy to deploy and manage applications. You simply upload your code and Elastic Beanstalk handles the deployment, including:</p>
<ul>
  <li>Capacity provisioning and load balancing.</li>
  <li>Auto Scaling.</li>
  <li>Application health monitoring.</li>
  <li>Supports Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker.</li>
  <li>You still have full control over the underlying resources (EC2 instances, etc.).</li>
  <li>Free to use (you pay for the underlying resources).</li>
</ul>

<h5>AWS Copilot</h5>
<p><span class="service-highlight">AWS Copilot</span> is a CLI tool that simplifies building, releasing, and operating production-ready containerized applications on Amazon ECS and AWS Fargate. It helps with:</p>
<ul>
  <li>Setting up infrastructure for containerized services.</li>
  <li>Creating CI/CD pipelines.</li>
  <li>Deploying across multiple environments (test, staging, production).</li>
</ul>

<h5>AWS Systems Manager</h5>
<p><span class="service-highlight">AWS Systems Manager</span> provides a unified user interface so you can view operational data from multiple AWS services and automate operational tasks across your AWS resources. Features include:</p>
<ul>
  <li><strong>Session Manager</strong> &mdash; Secure shell access to EC2 instances without SSH keys or opening ports.</li>
  <li><strong>Parameter Store</strong> &mdash; Secure, hierarchical storage for configuration data and secrets.</li>
  <li><strong>Patch Manager</strong> &mdash; Automate the patching process for your managed instances.</li>
  <li><strong>Run Command</strong> &mdash; Remotely run commands on managed instances without SSH.</li>
</ul>

<div class="tip-box">
  <h4>Exam Tip</h4>
  <p>Know the difference between CloudFormation (IaC, template-based, create entire infrastructure stacks) and Elastic Beanstalk (PaaS, just upload code and it handles deployment). Both are free to use. CloudFormation gives you fine-grained control. Elastic Beanstalk abstracts away the infrastructure details. If the exam mentions "developer who wants to deploy code without managing infrastructure," think Elastic Beanstalk.</p>
</div>

<div class="warning-box">
  <h4>Common Misconception</h4>
  <p>Elastic Beanstalk is NOT serverless. It provisions EC2 instances, load balancers, and other resources under the hood. You still pay for those resources. However, Beanstalk handles the provisioning and management for you. If the question is about truly serverless deployment, think Lambda or Fargate.</p>
</div>`
      },
      "3.2": {
        title: "Define the AWS global infrastructure",
        content: `<h3>AWS Global Infrastructure</h3>

<p>AWS maintains the largest global cloud infrastructure in the world. Understanding how AWS organizes its global infrastructure is fundamental to the CLF-C02 exam, as many questions ask about high availability, disaster recovery, and low-latency architectures.</p>

<div class="key-concept">
  <h4>Infrastructure Hierarchy</h4>
  <p><strong>Regions</strong> contain <strong>Availability Zones</strong>, which contain one or more <strong>data centers</strong>. <strong>Edge locations</strong> are separate from Regions and are used for content delivery and DNS.</p>
</div>

<h4>AWS Regions</h4>
<p>A Region is a physical location around the world where AWS clusters data centers. Each Region is a separate geographic area that is completely independent of other Regions.</p>
<ul>
  <li>AWS operates 30+ Regions worldwide (and continues to expand).</li>
  <li>Each Region has a code name (e.g., us-east-1, eu-west-1, ap-southeast-2).</li>
  <li>Most AWS services are Region-scoped (data and resources stay in the Region you choose).</li>
  <li>Some services are global: IAM, Route 53, CloudFront, WAF, AWS Organizations.</li>
</ul>

<h5>How to Choose a Region</h5>
<p>Consider these factors when selecting a Region for your workload:</p>
<ol>
  <li><strong>Compliance and data governance</strong> &mdash; Legal requirements may dictate that data must stay in a specific country or region (e.g., GDPR for EU data).</li>
  <li><strong>Proximity to customers</strong> &mdash; Choose a Region closest to your end users to reduce latency.</li>
  <li><strong>Available services</strong> &mdash; Not all Regions have every AWS service. New services often launch in US regions first.</li>
  <li><strong>Pricing</strong> &mdash; Pricing varies by Region. US regions are typically the cheapest. Sao Paulo and other remote regions can be significantly more expensive.</li>
</ol>

<h4>Availability Zones (AZs)</h4>
<p>Each Region consists of multiple isolated Availability Zones. An AZ is one or more discrete data centers with redundant power, networking, and connectivity.</p>
<ul>
  <li>Each Region has a minimum of 3 AZs (most have 3; some have 6).</li>
  <li>AZs are physically separated by a meaningful distance (many kilometers) to reduce risk from localized disasters, but close enough for low-latency (<1 ms) networking between them.</li>
  <li>AZs are connected via high-bandwidth, low-latency, fully redundant networking.</li>
  <li>Deploying across multiple AZs provides high availability and fault tolerance.</li>
  <li>AZ names are mapped differently per account (us-east-1a in one account might be a different physical data center than us-east-1a in another account) to distribute load.</li>
</ul>

<h4>Edge Locations</h4>
<p>Edge locations are data centers used by AWS to deliver content to end users with lower latency. They are separate from Regions and far more numerous (400+ edge locations globally).</p>
<ul>
  <li><strong><span class="service-highlight">Amazon CloudFront</span></strong> uses edge locations to cache copies of your content closer to your users for faster delivery. CloudFront is a Content Delivery Network (CDN).</li>
  <li><strong><span class="service-highlight">Amazon Route 53</span></strong> uses edge locations for DNS resolution.</li>
  <li><strong>AWS Shield</strong> and <strong>AWS WAF</strong> operate at edge locations for DDoS protection and web application firewall capabilities.</li>
  <li><strong>Lambda@Edge</strong> allows running Lambda functions at CloudFront edge locations.</li>
</ul>

<h4>AWS Global Accelerator</h4>
<p><span class="service-highlight">AWS Global Accelerator</span> uses the AWS global network to optimize the path from your users to your applications, improving the performance of TCP and UDP traffic. It provides two static anycast IP addresses that act as a fixed entry point to your application. Unlike CloudFront which caches content, Global Accelerator routes traffic over the AWS backbone network to the optimal endpoint.</p>

<h4>Additional Infrastructure Components</h4>

<h5>AWS Local Zones</h5>
<p><span class="service-highlight">AWS Local Zones</span> extend AWS infrastructure closer to large population centers where no AWS Region exists. They enable you to run latency-sensitive portions of applications (like gaming, media, real-time streaming) closer to end users. A Local Zone is an extension of a Region that is in a different physical location.</p>

<h5>AWS Wavelength Zones</h5>
<p><span class="service-highlight">AWS Wavelength</span> embeds AWS compute and storage services within 5G network provider data centers. This delivers ultra-low latency to mobile devices and end users connected via 5G. Ideal for applications like game streaming, AR/VR, and real-time communications.</p>

<h5>AWS Outposts</h5>
<p><span class="service-highlight">AWS Outposts</span> brings AWS infrastructure, services, APIs, and tools to your own on-premises data center. AWS delivers and installs Outposts racks in your location, and they connect back to the nearest AWS Region. This is ideal for:</p>
<ul>
  <li>Workloads that require very low latency access to on-premises systems.</li>
  <li>Data residency requirements where data must remain on-premises.</li>
  <li>Hybrid architectures that need consistent AWS APIs across cloud and on-premises.</li>
</ul>

<table class="comparison-table">
  <thead>
    <tr>
      <th>Component</th>
      <th>Purpose</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Region</strong></td>
      <td>Full set of AWS services; data residency</td>
      <td>Specific geographic areas worldwide</td>
    </tr>
    <tr>
      <td><strong>Availability Zone</strong></td>
      <td>High availability and fault tolerance</td>
      <td>Isolated locations within a Region</td>
    </tr>
    <tr>
      <td><strong>Edge Location</strong></td>
      <td>Content delivery (CDN) and DNS</td>
      <td>400+ cities worldwide</td>
    </tr>
    <tr>
      <td><strong>Local Zone</strong></td>
      <td>Low-latency compute near metro areas</td>
      <td>Extension of a Region in a city</td>
    </tr>
    <tr>
      <td><strong>Wavelength Zone</strong></td>
      <td>Ultra-low latency for 5G devices</td>
      <td>Inside 5G carrier data centers</td>
    </tr>
    <tr>
      <td><strong>Outposts</strong></td>
      <td>AWS on-premises for hybrid</td>
      <td>Customer data center</td>
    </tr>
  </tbody>
</table>

<div class="tip-box">
  <h4>Exam Tip</h4>
  <p>Key facts to remember: (1) Regions have a minimum of 3 AZs. (2) Edge locations outnumber Regions by a large margin. (3) CloudFront = CDN using edge locations. (4) Global Accelerator = routing optimization using the AWS backbone. (5) Outposts = AWS hardware in YOUR data center. (6) Wavelength = AWS inside 5G networks.</p>
</div>`
      },
      "3.3": {
        title: "Identify AWS compute services",
        content: `<h3>AWS Compute Services</h3>

<p>Compute services are the engines that run your applications in the cloud. AWS offers a range of compute services from virtual machines to serverless functions. The CLF-C02 exam tests your understanding of when to use each type.</p>

<h4>Amazon EC2 (Elastic Compute Cloud)</h4>
<p><span class="service-highlight">Amazon EC2</span> provides resizable virtual servers (instances) in the cloud. EC2 is the most fundamental compute service and gives you complete control over the operating system, storage, and networking.</p>

<h5>EC2 Instance Families</h5>
<table class="comparison-table">
  <thead>
    <tr>
      <th>Family</th>
      <th>Optimized For</th>
      <th>Use Cases</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>General Purpose</strong> (t3, m5, m6i)</td>
      <td>Balance of compute, memory, and networking</td>
      <td>Web servers, small databases, dev/test environments</td>
    </tr>
    <tr>
      <td><strong>Compute Optimized</strong> (c5, c6i)</td>
      <td>High-performance processors</td>
      <td>Batch processing, media transcoding, HPC, gaming servers, machine learning inference</td>
    </tr>
    <tr>
      <td><strong>Memory Optimized</strong> (r5, x1, z1d)</td>
      <td>Large datasets in memory</td>
      <td>In-memory databases, real-time big data analytics, SAP HANA</td>
    </tr>
    <tr>
      <td><strong>Accelerated Computing</strong> (p4, g5, inf1)</td>
      <td>Hardware accelerators (GPUs, FPGAs)</td>
      <td>Machine learning training, graphics rendering, video processing</td>
    </tr>
    <tr>
      <td><strong>Storage Optimized</strong> (i3, d2, h1)</td>
      <td>High sequential read/write to large datasets</td>
      <td>Data warehousing, distributed file systems, high-frequency OLTP</td>
    </tr>
  </tbody>
</table>

<h5>EC2 Pricing Models</h5>
<table class="comparison-table">
  <thead>
    <tr>
      <th>Model</th>
      <th>Description</th>
      <th>Savings</th>
      <th>Best For</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>On-Demand</strong></td>
      <td>Pay by the second (Linux) or hour (Windows) with no commitment</td>
      <td>None (baseline price)</td>
      <td>Short-term, unpredictable workloads; development and testing</td>
    </tr>
    <tr>
      <td><strong>Reserved Instances (RI)</strong></td>
      <td>1 or 3-year commitment for a specific instance type in a specific Region</td>
      <td>Up to 72% off On-Demand</td>
      <td>Steady-state, predictable workloads (databases, production servers)</td>
    </tr>
    <tr>
      <td><strong>Spot Instances</strong></td>
      <td>Bid on unused EC2 capacity. Instances can be interrupted with 2-minute notice.</td>
      <td>Up to 90% off On-Demand</td>
      <td>Fault-tolerant, flexible workloads (batch, data analysis, CI/CD)</td>
    </tr>
    <tr>
      <td><strong>Savings Plans</strong></td>
      <td>Commit to a consistent amount of compute usage ($/hour) for 1 or 3 years</td>
      <td>Up to 72% off On-Demand</td>
      <td>Flexible commitment that applies across instance families, Regions, and services</td>
    </tr>
    <tr>
      <td><strong>Dedicated Hosts</strong></td>
      <td>A physical server fully dedicated to your use</td>
      <td>On-Demand or Reserved pricing</td>
      <td>Compliance requirements, server-bound software licenses (BYOL)</td>
    </tr>
    <tr>
      <td><strong>Dedicated Instances</strong></td>
      <td>Instances running on hardware dedicated to your account (but not a specific physical server)</td>
      <td>Slight premium over On-Demand</td>
      <td>Compliance needs without needing a specific physical host</td>
    </tr>
  </tbody>
</table>

<h4>AWS Lambda</h4>
<p><span class="service-highlight">AWS Lambda</span> is a serverless compute service that runs your code in response to events without requiring you to provision or manage servers.</p>
<ul>
  <li>You pay only for the compute time consumed (per request + per duration in ms).</li>
  <li>Scales automatically from zero to thousands of concurrent executions.</li>
  <li>Supports Python, Node.js, Java, C#, Go, Ruby, and custom runtimes.</li>
  <li>Maximum execution time: 15 minutes per invocation.</li>
  <li>Event-driven: triggered by S3 events, API Gateway, DynamoDB streams, SQS, CloudWatch Events, and more.</li>
  <li>Free tier: 1 million requests and 400,000 GB-seconds of compute per month.</li>
</ul>

<h4>Container Services</h4>
<ul>
  <li><strong><span class="service-highlight">Amazon ECS (Elastic Container Service)</span></strong> &mdash; AWS-native container orchestration service. Runs and manages Docker containers. Can run on EC2 instances or on AWS Fargate.</li>
  <li><strong><span class="service-highlight">Amazon EKS (Elastic Kubernetes Service)</span></strong> &mdash; Managed Kubernetes service. Use EKS if you already use Kubernetes or want Kubernetes compatibility. Can also run on EC2 or Fargate.</li>
  <li><strong><span class="service-highlight">AWS Fargate</span></strong> &mdash; Serverless compute engine for containers. Works with both ECS and EKS. You do not need to provision or manage servers. You define CPU and memory requirements, and Fargate runs the containers.</li>
  <li><strong><span class="service-highlight">Amazon ECR (Elastic Container Registry)</span></strong> &mdash; Managed Docker container registry to store, manage, and deploy container images.</li>
</ul>

<h4>Amazon Lightsail</h4>
<p><span class="service-highlight">Amazon Lightsail</span> provides the easiest way to launch and manage a virtual private server with AWS. It includes everything you need: compute, storage, networking, and a DNS management interface, all at a low, predictable monthly price. Best for simple web applications, websites, dev/test environments, and small businesses.</p>

<h4>Auto Scaling and Load Balancing</h4>
<h5>Amazon EC2 Auto Scaling</h5>
<p><span class="service-highlight">Amazon EC2 Auto Scaling</span> automatically adds or removes EC2 instances based on demand.</p>
<ul>
  <li><strong>Minimum capacity</strong> &mdash; The fewest instances that should always be running.</li>
  <li><strong>Desired capacity</strong> &mdash; The number of instances you want running (Auto Scaling adjusts this).</li>
  <li><strong>Maximum capacity</strong> &mdash; The most instances that can be running.</li>
  <li>Scaling policies: target tracking, step scaling, simple scaling, scheduled scaling, predictive scaling.</li>
</ul>

<h5>Elastic Load Balancing (ELB)</h5>
<p><span class="service-highlight">Elastic Load Balancing</span> automatically distributes incoming traffic across multiple targets (EC2 instances, containers, Lambda functions, IP addresses).</p>
<table class="comparison-table">
  <thead>
    <tr>
      <th>Load Balancer</th>
      <th>Layer</th>
      <th>Best For</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Application Load Balancer (ALB)</strong></td>
      <td>Layer 7 (HTTP/HTTPS)</td>
      <td>Web applications, microservices, path-based and host-based routing</td>
    </tr>
    <tr>
      <td><strong>Network Load Balancer (NLB)</strong></td>
      <td>Layer 4 (TCP/UDP)</td>
      <td>Ultra-high performance, low latency, millions of requests per second, static IP</td>
    </tr>
    <tr>
      <td><strong>Gateway Load Balancer (GLB)</strong></td>
      <td>Layer 3 (IP)</td>
      <td>Deploying and managing third-party virtual network appliances (firewalls, IDS/IPS)</td>
    </tr>
  </tbody>
</table>

<div class="tip-box">
  <h4>Exam Tip</h4>
  <p>Serverless = Lambda, Fargate. Containers = ECS, EKS. VMs = EC2. Simple websites = Lightsail. Know that Spot Instances are cheapest but can be interrupted, Reserved Instances require a commitment but give big savings, and On-Demand is the default with no commitment. Savings Plans are more flexible than Reserved Instances.</p>
</div>`
      },
      "3.4": {
        title: "Identify AWS database services",
        content: `<h3>AWS Database Services</h3>

<p>AWS offers purpose-built database services for different data models and use cases. Understanding which database fits which scenario is heavily tested on the CLF-C02 exam.</p>

<h4>Amazon RDS (Relational Database Service)</h4>
<p><span class="service-highlight">Amazon RDS</span> is a managed relational database service. AWS handles provisioning, patching, backup, recovery, failure detection, and repair.</p>
<ul>
  <li><strong>Supported engines:</strong> MySQL, PostgreSQL, MariaDB, Oracle, Microsoft SQL Server, Amazon Aurora.</li>
  <li>Automated backups with point-in-time recovery (up to 35 days).</li>
  <li>Multi-AZ deployment for high availability (synchronous standby replica in another AZ; automatic failover).</li>
  <li>Read Replicas for improved read performance (asynchronous replication).</li>
  <li>Storage auto-scaling up to 64 TB.</li>
  <li>Customer responsibility: schema design, query optimization, data. AWS responsibility: OS patching, database engine patching, hardware.</li>
</ul>

<h4>Amazon Aurora</h4>
<p><span class="service-highlight">Amazon Aurora</span> is an AWS-designed relational database engine that is compatible with MySQL and PostgreSQL. It combines the performance and availability of high-end commercial databases with the simplicity and cost-effectiveness of open-source databases.</p>
<ul>
  <li>Up to 5x faster than standard MySQL and 3x faster than standard PostgreSQL.</li>
  <li>Automatically replicates data across 3 Availability Zones with 6 copies of your data.</li>
  <li>Supports up to 15 read replicas (vs. 5 for standard RDS MySQL).</li>
  <li><strong>Aurora Serverless</strong> &mdash; An on-demand, auto-scaling option for unpredictable or intermittent workloads. You pay per second of use.</li>
  <li><strong>Aurora Global Database</strong> &mdash; Spans multiple Regions for global applications with <1 second cross-Region replication.</li>
</ul>

<h4>Amazon DynamoDB</h4>
<p><span class="service-highlight">Amazon DynamoDB</span> is a fully managed, serverless, key-value and document NoSQL database.</p>
<ul>
  <li>Single-digit millisecond latency at any scale.</li>
  <li>Automatically scales tables to adjust for capacity and maintain performance.</li>
  <li>Supports both key-value and document data models.</li>
  <li><strong>DynamoDB Accelerator (DAX)</strong> &mdash; An in-memory cache for DynamoDB that delivers up to 10x performance improvement (microsecond response times).</li>
  <li><strong>DynamoDB Global Tables</strong> &mdash; Multi-Region, multi-active replication for globally distributed applications.</li>
  <li>Fully serverless &mdash; no servers to provision, patch, or manage.</li>
  <li>Supports on-demand and provisioned capacity modes.</li>
</ul>

<h4>Amazon ElastiCache</h4>
<p><span class="service-highlight">Amazon ElastiCache</span> is a managed in-memory caching service. It helps improve application performance by retrieving data from fast, in-memory caches instead of slower disk-based databases.</p>
<ul>
  <li><strong>ElastiCache for Redis</strong> &mdash; Supports complex data types, persistence, replication, Multi-AZ, pub/sub messaging. Used for caching, session stores, leaderboards, real-time analytics.</li>
  <li><strong>ElastiCache for Memcached</strong> &mdash; Simpler, multi-threaded, ideal for simple caching of objects. No persistence or replication.</li>
</ul>

<h4>Amazon Redshift</h4>
<p><span class="service-highlight">Amazon Redshift</span> is a fully managed, petabyte-scale cloud data warehouse. It is designed for online analytical processing (OLAP) and business intelligence workloads.</p>
<ul>
  <li>Uses columnar storage for efficient analytical queries.</li>
  <li>Supports SQL queries and integrates with BI tools (QuickSight, Tableau, etc.).</li>
  <li><strong>Redshift Spectrum</strong> &mdash; Query data directly in S3 without loading it into Redshift.</li>
  <li><strong>Redshift Serverless</strong> &mdash; Run analytics without managing data warehouse infrastructure.</li>
</ul>

<h4>Other Database Services</h4>
<table class="comparison-table">
  <thead>
    <tr>
      <th>Service</th>
      <th>Type</th>
      <th>Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong><span class="service-highlight">Amazon Neptune</span></strong></td>
      <td>Graph database</td>
      <td>Social networking, recommendation engines, fraud detection, knowledge graphs</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">Amazon DocumentDB</span></strong></td>
      <td>Document database (MongoDB compatible)</td>
      <td>Content management, catalogs, user profiles &mdash; when you need MongoDB compatibility</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">Amazon QLDB</span></strong></td>
      <td>Ledger database</td>
      <td>Immutable, cryptographically verifiable transaction log. Financial transactions, supply chain, registration systems</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">Amazon Keyspaces</span></strong></td>
      <td>Wide-column (Cassandra compatible)</td>
      <td>High-throughput applications needing Cassandra compatibility</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">Amazon Timestream</span></strong></td>
      <td>Time-series database</td>
      <td>IoT applications, DevOps monitoring, industrial telemetry</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">Amazon MemoryDB for Redis</span></strong></td>
      <td>Redis-compatible durable database</td>
      <td>Applications needing ultra-fast performance with durable data storage</td>
    </tr>
  </tbody>
</table>

<h4>Database Migration Services</h4>
<ul>
  <li><strong><span class="service-highlight">AWS DMS (Database Migration Service)</span></strong> &mdash; Migrate databases to AWS with minimal downtime. Supports homogeneous (same engine) and heterogeneous (different engine) migrations. The source database remains fully operational during migration. Also supports continuous data replication.</li>
  <li><strong><span class="service-highlight">AWS SCT (Schema Conversion Tool)</span></strong> &mdash; Converts database schemas and code from one engine to another when performing heterogeneous migrations (e.g., Oracle to PostgreSQL). Used alongside DMS for heterogeneous migrations.</li>
</ul>

<div class="key-concept">
  <h4>Choosing the Right Database</h4>
  <ul>
    <li><strong>Relational data with complex queries?</strong> &rarr; RDS or Aurora</li>
    <li><strong>Key-value or document data with massive scale?</strong> &rarr; DynamoDB</li>
    <li><strong>Caching for sub-millisecond latency?</strong> &rarr; ElastiCache</li>
    <li><strong>Data warehousing and analytics?</strong> &rarr; Redshift</li>
    <li><strong>Graph data (relationships)?</strong> &rarr; Neptune</li>
    <li><strong>Immutable ledger?</strong> &rarr; QLDB</li>
    <li><strong>MongoDB compatibility?</strong> &rarr; DocumentDB</li>
  </ul>
</div>

<div class="tip-box">
  <h4>Exam Tip</h4>
  <p>The exam frequently presents a scenario and asks you to choose the correct database. Key differentiators: RDS/Aurora = relational SQL, DynamoDB = NoSQL key-value with single-digit ms latency, Redshift = analytics/data warehouse, Neptune = graph, QLDB = immutable ledger. Remember that DMS is used for migrations and supports ongoing replication.</p>
</div>`
      },
      "3.5": {
        title: "Identify AWS networking services",
        content: `<h3>AWS Networking Services</h3>

<p>Networking in AWS is centered around the Amazon Virtual Private Cloud (VPC). Understanding how to build and connect networks in AWS is a core competency tested on the CLF-C02 exam.</p>

<h4>Amazon VPC (Virtual Private Cloud)</h4>
<p><span class="service-highlight">Amazon VPC</span> lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define. You have complete control over your virtual networking environment, including IP address ranges, subnets, route tables, and gateways.</p>

<div class="key-concept">
  <h4>VPC Core Components</h4>
  <ul>
    <li><strong>VPC</strong> &mdash; Your virtual network in AWS. Spans all AZs in a Region. You define the IP address range using CIDR notation (e.g., 10.0.0.0/16).</li>
    <li><strong>Subnets</strong> &mdash; Subdivisions of a VPC that reside in a single AZ. Can be <strong>public</strong> (has a route to an internet gateway) or <strong>private</strong> (no direct internet access).</li>
    <li><strong>Route Tables</strong> &mdash; Contain rules (routes) that determine where network traffic is directed. Each subnet must be associated with a route table.</li>
    <li><strong>Internet Gateway (IGW)</strong> &mdash; A horizontally scaled, redundant, highly available VPC component that allows communication between your VPC and the internet. Attach to a VPC to enable internet access for resources in public subnets.</li>
    <li><strong>NAT Gateway</strong> &mdash; Allows resources in private subnets to access the internet (for software updates, etc.) while preventing inbound connections from the internet. Managed by AWS, placed in a public subnet. Charged per hour and per GB of data processed.</li>
  </ul>
</div>

<h4>VPC Network Security</h4>
<p>VPCs have two layers of network security (covered in detail in Topic 2.4):</p>
<ul>
  <li><strong>Security Groups</strong> &mdash; Stateful, instance-level, allow rules only.</li>
  <li><strong>Network ACLs</strong> &mdash; Stateless, subnet-level, allow and deny rules.</li>
</ul>

<h4>VPC Connectivity Options</h4>

<h5>VPC Peering</h5>
<p>A networking connection between two VPCs that enables you to route traffic between them using private IP addresses. VPC peering works across accounts and Regions. It is not transitive &mdash; if VPC A is peered with VPC B and VPC B is peered with VPC C, VPC A cannot communicate with VPC C through VPC B unless a separate peering connection is established.</p>

<h5>AWS Transit Gateway</h5>
<p><span class="service-highlight">AWS Transit Gateway</span> acts as a central hub that connects VPCs, on-premises networks, and VPN connections through a single gateway. It simplifies network architecture by eliminating the complexity of managing multiple peering connections. Supports thousands of VPC connections.</p>

<h5>AWS PrivateLink (VPC Endpoints)</h5>
<p><span class="service-highlight">AWS PrivateLink</span> provides private connectivity between VPCs, AWS services, and your on-premises networks without exposing your traffic to the public internet. Two types of VPC endpoints:</p>
<ul>
  <li><strong>Interface Endpoints</strong> &mdash; An elastic network interface (ENI) with a private IP that serves as an entry point for traffic destined to a supported AWS service. Powered by PrivateLink.</li>
  <li><strong>Gateway Endpoints</strong> &mdash; A gateway that you specify as a target for a route in your route table. Supports only S3 and DynamoDB. Free to use.</li>
</ul>

<h4>Amazon Route 53</h4>
<p><span class="service-highlight">Amazon Route 53</span> is a highly available and scalable DNS (Domain Name System) web service. It performs three main functions:</p>
<ul>
  <li><strong>Domain registration</strong> &mdash; Register domain names.</li>
  <li><strong>DNS routing</strong> &mdash; Translate domain names into IP addresses. Supports multiple routing policies:
    <ul>
      <li><strong>Simple</strong> &mdash; Route to a single resource.</li>
      <li><strong>Weighted</strong> &mdash; Route a percentage of traffic to different resources.</li>
      <li><strong>Latency-based</strong> &mdash; Route to the Region with the lowest latency.</li>
      <li><strong>Failover</strong> &mdash; Route to a standby resource if the primary is unhealthy.</li>
      <li><strong>Geolocation</strong> &mdash; Route based on the user's geographic location.</li>
      <li><strong>Geoproximity</strong> &mdash; Route based on the geographic location of your resources.</li>
      <li><strong>Multi-value answer</strong> &mdash; Return multiple values (like multiple IP addresses).</li>
    </ul>
  </li>
  <li><strong>Health checks</strong> &mdash; Monitor the health and performance of resources.</li>
</ul>

<h4>Amazon CloudFront</h4>
<p><span class="service-highlight">Amazon CloudFront</span> is a Content Delivery Network (CDN) that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds. It uses a global network of edge locations to cache content. CloudFront is commonly used to:</p>
<ul>
  <li>Accelerate static and dynamic web content delivery.</li>
  <li>Stream video and audio.</li>
  <li>Secure content with HTTPS and AWS WAF integration.</li>
  <li>Reduce load on origin servers.</li>
</ul>

<h4>Hybrid Connectivity</h4>
<table class="comparison-table">
  <thead>
    <tr>
      <th>Service</th>
      <th>Connection Type</th>
      <th>Key Characteristics</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong><span class="service-highlight">AWS Site-to-Site VPN</span></strong></td>
      <td>Encrypted tunnel over the public internet</td>
      <td>Quick to set up (minutes/hours), lower cost, variable performance, encrypted. Connects on-premises network to AWS VPC.</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">AWS Direct Connect</span></strong></td>
      <td>Dedicated private physical connection</td>
      <td>Takes weeks/months to provision, higher cost, consistent performance, dedicated bandwidth (1 Gbps or 10 Gbps). Does NOT traverse the public internet. Not encrypted by default (can add VPN on top for encryption).</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">AWS Client VPN</span></strong></td>
      <td>Remote access VPN for individual users</td>
      <td>Allows individual users (employees, contractors) to connect to AWS or on-premises networks from any location using an OpenVPN-based client.</td>
    </tr>
  </tbody>
</table>

<div class="tip-box">
  <h4>Exam Tip</h4>
  <p>Key networking facts: (1) VPN = quick, encrypted, over internet. Direct Connect = slow to set up, private, consistent. (2) NAT Gateway = lets private instances reach the internet. Internet Gateway = required for public internet access. (3) Transit Gateway = hub for connecting many VPCs. VPC Peering = one-to-one, not transitive. (4) Route 53 = DNS service (not a routing/networking device).</p>
</div>

<div class="warning-box">
  <h4>Common Misconception</h4>
  <p>Direct Connect is NOT encrypted by default. It provides a dedicated, private connection but the data is not encrypted in transit. To add encryption, you can set up a VPN connection over your Direct Connect link. Many exam questions test whether you know this distinction.</p>
</div>`
      },
      "3.6": {
        title: "Identify AWS storage services",
        content: `<h3>AWS Storage Services</h3>

<p>AWS offers a variety of storage services to meet different needs, from object storage to block storage to file storage. The CLF-C02 exam frequently tests your ability to choose the right storage service for a given scenario.</p>

<h4>Amazon S3 (Simple Storage Service)</h4>
<p><span class="service-highlight">Amazon S3</span> is an object storage service that offers virtually unlimited storage. Objects (files) are stored in buckets. S3 is designed for 99.999999999% (11 nines) of durability.</p>
<ul>
  <li>Maximum object size: 5 TB. Maximum single PUT upload: 5 GB (use multipart upload for larger files).</li>
  <li>Bucket names must be globally unique across all AWS accounts.</li>
  <li>Use cases: static website hosting, data lakes, backup and restore, archive, media hosting, application data.</li>
  <li>Supports versioning, lifecycle policies, replication (CRR and SRR), and event notifications.</li>
</ul>

<h5>S3 Storage Classes</h5>
<table class="comparison-table">
  <thead>
    <tr>
      <th>Storage Class</th>
      <th>Designed For</th>
      <th>Availability</th>
      <th>Retrieval</th>
      <th>Cost</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>S3 Standard</strong></td>
      <td>Frequently accessed data</td>
      <td>99.99% (multi-AZ)</td>
      <td>Immediate</td>
      <td>Highest storage cost, no retrieval fee</td>
    </tr>
    <tr>
      <td><strong>S3 Intelligent-Tiering</strong></td>
      <td>Unknown or changing access patterns</td>
      <td>99.9%</td>
      <td>Immediate</td>
      <td>Small monthly monitoring fee; auto-moves objects between tiers</td>
    </tr>
    <tr>
      <td><strong>S3 Standard-IA</strong> (Infrequent Access)</td>
      <td>Infrequent access, rapid retrieval needed</td>
      <td>99.9% (multi-AZ)</td>
      <td>Immediate</td>
      <td>Lower storage cost, per-GB retrieval fee</td>
    </tr>
    <tr>
      <td><strong>S3 One Zone-IA</strong></td>
      <td>Infrequent access, single AZ</td>
      <td>99.5% (single AZ)</td>
      <td>Immediate</td>
      <td>20% less than Standard-IA; data lost if AZ is destroyed</td>
    </tr>
    <tr>
      <td><strong>S3 Glacier Instant Retrieval</strong></td>
      <td>Archive with millisecond retrieval</td>
      <td>99.9% (multi-AZ)</td>
      <td>Milliseconds</td>
      <td>Lower than IA classes, retrieval fee</td>
    </tr>
    <tr>
      <td><strong>S3 Glacier Flexible Retrieval</strong></td>
      <td>Archive, occasional access</td>
      <td>99.99% (multi-AZ)</td>
      <td>Minutes to hours (Expedited: 1-5 min, Standard: 3-5 hr, Bulk: 5-12 hr)</td>
      <td>Very low storage cost</td>
    </tr>
    <tr>
      <td><strong>S3 Glacier Deep Archive</strong></td>
      <td>Long-term archive, rarely accessed</td>
      <td>99.99% (multi-AZ)</td>
      <td>12-48 hours</td>
      <td>Lowest cost storage in S3</td>
    </tr>
  </tbody>
</table>

<h4>Amazon EBS (Elastic Block Store)</h4>
<p><span class="service-highlight">Amazon EBS</span> provides persistent block-level storage volumes for use with EC2 instances. EBS volumes behave like raw, unformatted block devices that you can attach to instances.</p>
<ul>
  <li>Persists independently from the instance (data remains after instance stops/terminates if configured).</li>
  <li>Single AZ resource &mdash; an EBS volume is tied to one AZ.</li>
  <li>Snapshots can be used for backup (stored in S3) and to copy volumes across AZs or Regions.</li>
  <li>Supports encryption at rest using KMS.</li>
</ul>

<h5>EBS Volume Types</h5>
<table class="comparison-table">
  <thead>
    <tr>
      <th>Type</th>
      <th>Category</th>
      <th>Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>gp3 / gp2</strong></td>
      <td>General Purpose SSD</td>
      <td>Boot volumes, dev/test, virtual desktops. Balanced price/performance.</td>
    </tr>
    <tr>
      <td><strong>io2 Block Express / io1</strong></td>
      <td>Provisioned IOPS SSD</td>
      <td>Critical business applications needing sustained IOPS performance (databases).</td>
    </tr>
    <tr>
      <td><strong>st1</strong></td>
      <td>Throughput Optimized HDD</td>
      <td>Big data, data warehouses, log processing. High throughput, low cost.</td>
    </tr>
    <tr>
      <td><strong>sc1</strong></td>
      <td>Cold HDD</td>
      <td>Infrequently accessed data. Lowest cost HDD option.</td>
    </tr>
  </tbody>
</table>
<p>Note: Only SSD types (gp2/gp3, io1/io2) can be used as boot volumes.</p>

<h4>Amazon EFS (Elastic File System)</h4>
<p><span class="service-highlight">Amazon EFS</span> is a managed, serverless, elastic file system (NFS protocol) that can be shared across multiple EC2 instances simultaneously.</p>
<ul>
  <li>POSIX-compliant file system for Linux-based workloads.</li>
  <li>Automatically scales up or down as you add/remove files (no provisioning needed).</li>
  <li>Multi-AZ by default for high availability.</li>
  <li>Supports thousands of concurrent connections.</li>
  <li>Use cases: content management, web serving, home directories, shared development environments.</li>
</ul>

<h4>Amazon FSx</h4>
<p><span class="service-highlight">Amazon FSx</span> provides fully managed file systems built on popular third-party file systems:</p>
<ul>
  <li><strong>FSx for Windows File Server</strong> &mdash; Fully managed Windows-native file system (SMB protocol, Active Directory integration). For Windows-based workloads.</li>
  <li><strong>FSx for Lustre</strong> &mdash; High-performance file system for compute-intensive workloads like machine learning, HPC, video processing. Integrates with S3.</li>
  <li><strong>FSx for NetApp ONTAP</strong> &mdash; Fully managed shared storage with ONTAP features.</li>
  <li><strong>FSx for OpenZFS</strong> &mdash; Fully managed shared storage built on OpenZFS.</li>
</ul>

<h4>AWS Storage Gateway</h4>
<p><span class="service-highlight">AWS Storage Gateway</span> is a hybrid cloud storage service that gives you on-premises access to virtually unlimited cloud storage. It connects on-premises software appliances with cloud-based storage.</p>
<ul>
  <li><strong>S3 File Gateway</strong> &mdash; Store files as objects in S3 via NFS/SMB protocols.</li>
  <li><strong>FSx File Gateway</strong> &mdash; Provides low-latency, on-premises access to fully managed file shares in FSx for Windows File Server.</li>
  <li><strong>Volume Gateway</strong> &mdash; Block storage volumes backed by S3, available as cached volumes or stored volumes.</li>
  <li><strong>Tape Gateway</strong> &mdash; Virtual tape library backed by S3 and Glacier for backup applications.</li>
</ul>

<h4>AWS Backup</h4>
<p><span class="service-highlight">AWS Backup</span> is a fully managed backup service that centralizes and automates the backup of data across AWS services (EBS, RDS, DynamoDB, EFS, FSx, S3, etc.). It provides a central backup policy, lifecycle management, and cross-Region/cross-account backup.</p>

<div class="key-concept">
  <h4>Storage Type Quick Reference</h4>
  <ul>
    <li><strong>Object storage</strong> (S3) &mdash; Flat structure, unlimited scale, accessed via HTTP/S, great for unstructured data.</li>
    <li><strong>Block storage</strong> (EBS) &mdash; Attached to EC2, formatted with a file system, like a hard drive. Single AZ.</li>
    <li><strong>File storage</strong> (EFS, FSx) &mdash; Shared file system accessed by multiple instances. Multi-AZ.</li>
  </ul>
</div>

<div class="tip-box">
  <h4>Exam Tip</h4>
  <p>Remember: S3 = object storage (unlimited, accessed by URL), EBS = block storage (one instance, one AZ), EFS = shared file storage (Linux, NFS, multi-AZ). For Windows file shares, use FSx for Windows. For hybrid storage, use Storage Gateway. Glacier Deep Archive is the cheapest S3 class but takes up to 48 hours to retrieve.</p>
</div>`
      },
      "3.7": {
        title: "Identify AWS artificial intelligence and machine learning services, and analytics services",
        content: `<h3>AI/ML and Analytics Services</h3>

<p>AWS provides a broad range of artificial intelligence (AI), machine learning (ML), and analytics services. For the CLF-C02 exam, you need to know what each service does and when to use it, but you do not need to know the technical details of how ML models work.</p>

<h4>Machine Learning Services</h4>

<div class="key-concept">
  <h4>Amazon SageMaker</h4>
  <p><span class="service-highlight">Amazon SageMaker</span> is a fully managed service that provides every developer and data scientist with the ability to build, train, and deploy machine learning models quickly. It is the most comprehensive ML service on AWS.</p>
  <ul>
    <li>Build: SageMaker provides Jupyter notebooks and built-in algorithms.</li>
    <li>Train: Managed infrastructure for training at scale.</li>
    <li>Deploy: One-click deployment to production endpoints with auto-scaling.</li>
    <li>Use when you want to build custom ML models.</li>
  </ul>
</div>

<h4>AI Services (Pre-built, No ML Expertise Required)</h4>
<p>These services provide pre-trained AI capabilities that you can use directly via API calls:</p>

<table class="comparison-table">
  <thead>
    <tr>
      <th>Service</th>
      <th>What It Does</th>
      <th>Use Cases</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong><span class="service-highlight">Amazon Rekognition</span></strong></td>
      <td>Image and video analysis using deep learning</td>
      <td>Facial recognition, object/scene detection, content moderation, celebrity recognition, text in images</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">Amazon Lex</span></strong></td>
      <td>Build conversational interfaces (chatbots) using voice and text</td>
      <td>Customer service bots, IVR systems. Same technology that powers Amazon Alexa.</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">Amazon Polly</span></strong></td>
      <td>Converts text to lifelike speech</td>
      <td>Text-to-speech for applications, accessibility features, content narration</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">Amazon Comprehend</span></strong></td>
      <td>Natural Language Processing (NLP) to extract insights from text</td>
      <td>Sentiment analysis, entity recognition, key phrase extraction, language detection, topic modeling</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">Amazon Translate</span></strong></td>
      <td>Neural machine translation between languages</td>
      <td>Real-time and batch language translation for websites, applications, and content</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">Amazon Kendra</span></strong></td>
      <td>Intelligent enterprise search service powered by ML</td>
      <td>Search across documents, FAQs, wikis, and other data sources with natural language queries</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">Amazon Textract</span></strong></td>
      <td>Extracts text, handwriting, and data from scanned documents</td>
      <td>Processing forms, invoices, receipts, IDs. Goes beyond simple OCR by understanding document structure (tables, forms).</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">Amazon Transcribe</span></strong></td>
      <td>Automatic speech recognition (speech to text)</td>
      <td>Transcribing customer calls, generating subtitles, meeting transcription</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">Amazon Personalize</span></strong></td>
      <td>Real-time personalized recommendations</td>
      <td>Product recommendations, personalized search results, customized marketing</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">Amazon Forecast</span></strong></td>
      <td>Time-series forecasting using ML</td>
      <td>Demand forecasting, financial planning, resource planning</td>
    </tr>
  </tbody>
</table>

<h4>Analytics Services</h4>

<table class="comparison-table">
  <thead>
    <tr>
      <th>Service</th>
      <th>What It Does</th>
      <th>Key Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong><span class="service-highlight">Amazon Athena</span></strong></td>
      <td>Serverless interactive query service that analyzes data directly in S3 using standard SQL</td>
      <td>No infrastructure to manage. Pay per query (per TB of data scanned). Works with CSV, JSON, Parquet, ORC formats. Great for ad-hoc queries on S3 data.</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">Amazon Kinesis</span></strong></td>
      <td>Collect, process, and analyze real-time streaming data</td>
      <td><strong>Kinesis Data Streams</strong> &mdash; Capture and store streaming data. <strong>Kinesis Data Firehose</strong> &mdash; Load streaming data into data stores (S3, Redshift, Elasticsearch). <strong>Kinesis Data Analytics</strong> &mdash; Analyze streaming data with SQL or Apache Flink.</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">AWS Glue</span></strong></td>
      <td>Serverless data integration (ETL) service</td>
      <td>Discover, prepare, and combine data for analytics and ML. Features a Data Catalog that serves as a central metadata repository. Crawlers automatically catalog data in S3.</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">Amazon QuickSight</span></strong></td>
      <td>Cloud-powered business intelligence (BI) service</td>
      <td>Create interactive dashboards and visualizations. Serverless, pay-per-session pricing. Supports data from S3, RDS, Redshift, Athena, and many other sources.</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">Amazon EMR</span></strong></td>
      <td>Managed big data platform using open-source frameworks</td>
      <td>Runs Apache Spark, Hadoop, HBase, Presto, and Flink. Used for large-scale data processing, machine learning, and data analytics on massive datasets.</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">AWS Data Pipeline</span></strong></td>
      <td>Orchestration service for data-driven workflows</td>
      <td>Move and transform data between AWS compute and storage services and on-premises data sources.</td>
    </tr>
    <tr>
      <td><strong><span class="service-highlight">Amazon OpenSearch Service</span></strong></td>
      <td>Search and analytics engine (successor to Amazon Elasticsearch Service)</td>
      <td>Log analytics, full-text search, application monitoring, clickstream analytics.</td>
    </tr>
  </tbody>
</table>

<div class="tip-box">
  <h4>Exam Tip</h4>
  <p>For the exam, match the service to its purpose: Rekognition = images/video, Lex = chatbots, Polly = text-to-speech, Comprehend = text analysis/NLP, Textract = document extraction, Transcribe = speech-to-text, Translate = language translation, Kendra = enterprise search. For analytics: Athena = SQL on S3, Kinesis = real-time streaming, Glue = ETL, QuickSight = dashboards/BI, EMR = big data (Hadoop/Spark).</p>
</div>

<div class="warning-box">
  <h4>Common Misconception</h4>
  <p>Athena and Redshift are both used for analytics with SQL, but they are very different. Athena is serverless and queries data directly in S3 (no loading needed). Redshift is a full data warehouse that requires data to be loaded into it (though Redshift Spectrum can query S3 directly). Use Athena for ad-hoc querying of S3 data; use Redshift for complex, recurring analytical workloads on large datasets.</p>
</div>`
      }
    }
  },

  "4": {
    name: "Billing, Pricing, and Support",
    weight: 12,
    topics: {
      "4.1": {
        title: "Compare AWS pricing models",
        content: `<h3>AWS Pricing Models</h3>

<p>AWS offers several pricing models designed to help you optimize costs based on your usage patterns. Understanding these models and how they apply to specific services is crucial for the CLF-C02 exam.</p>

<div class="key-concept">
  <h4>Core Pricing Principles</h4>
  <ul>
    <li><strong>Pay for what you use</strong> &mdash; No upfront commitments (for On-Demand). Only pay for resources you consume.</li>
    <li><strong>Pay less when you reserve</strong> &mdash; Commit to 1 or 3 years for significant discounts.</li>
    <li><strong>Pay less per unit by using more</strong> &mdash; Volume-based discounts (e.g., S3 storage pricing tiers).</li>
    <li><strong>Inbound data transfer is free</strong> &mdash; Data going INTO AWS is always free. Data going OUT is charged (with the first 100 GB/month free to the internet).</li>
  </ul>
</div>

<h4>EC2 Pricing Models (Detailed)</h4>

<h5>On-Demand Instances</h5>
<ul>
  <li>Pay by the second (Linux/Ubuntu) or by the hour (Windows/RHEL).</li>
  <li>No upfront commitment, no long-term contract.</li>
  <li>Most expensive per-unit price, but most flexible.</li>
  <li>Best for: short-term, irregular, unpredictable workloads; development and testing.</li>
</ul>

<h5>Reserved Instances (RI)</h5>
<ul>
  <li>1-year or 3-year commitment for a specific instance type in a specific Region.</li>
  <li><strong>Standard RI</strong> &mdash; Up to 72% discount. Cannot change instance family, OS, or tenancy. Can be sold on the Reserved Instance Marketplace.</li>
  <li><strong>Convertible RI</strong> &mdash; Up to 54% discount. Can change instance family, OS, and tenancy during the term. Cannot be sold on the Marketplace.</li>
  <li>Payment options: All Upfront (biggest discount), Partial Upfront, No Upfront (smallest discount).</li>
  <li>Best for: steady-state, predictable workloads like production databases and application servers.</li>
</ul>

<h5>Savings Plans</h5>
<ul>
  <li>Commit to a consistent amount of compute usage (measured in $/hour) for 1 or 3 years.</li>
  <li><strong>Compute Savings Plans</strong> &mdash; Most flexible. Apply to any EC2 instance regardless of Region, instance family, OS, or tenancy. Also apply to Fargate and Lambda. Up to 66% savings.</li>
  <li><strong>EC2 Instance Savings Plans</strong> &mdash; Apply to a specific instance family in a specific Region. Up to 72% savings. More restrictive but deeper discount.</li>
  <li>Best for: organizations that want Reserved Instance-like savings with more flexibility.</li>
</ul>

<h5>Spot Instances</h5>
<ul>
  <li>Use spare EC2 capacity at up to 90% discount off On-Demand price.</li>
  <li>AWS can reclaim the instance with a 2-minute warning when it needs the capacity back.</li>
  <li>Best for: batch processing, data analysis, image rendering, CI/CD, stateless web servers, high-performance computing.</li>
  <li>NOT suitable for: databases, critical applications, or workloads that cannot tolerate interruption.</li>
</ul>

<h4>AWS Free Tier</h4>
<table class="comparison-table">
  <thead>
    <tr>
      <th>Type</th>
      <th>Description</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Always Free</strong></td>
      <td>Free forever, does not expire after 12 months</td>
      <td>Lambda: 1M requests/month, DynamoDB: 25 GB storage, CloudWatch: 10 custom metrics, SNS: 1M publishes</td>
    </tr>
    <tr>
      <td><strong>12 Months Free</strong></td>
      <td>Free for the first 12 months after account creation</td>
      <td>EC2: 750 hrs/month of t2.micro or t3.micro, S3: 5 GB standard storage, RDS: 750 hrs/month of db.t2.micro or db.t3.micro</td>
    </tr>
    <tr>
      <td><strong>Trials</strong></td>
      <td>Short-term free trial from the date you activate the service</td>
      <td>SageMaker: 2 months free, Lightsail: 3 months free (select instances), GuardDuty: 30-day free trial</td>
    </tr>
  </tbody>
</table>

<h4>Pricing for Key Services</h4>

<h5>Amazon S3 Pricing</h5>
<ul>
  <li>Charged for: storage (per GB/month), requests (PUT, GET, LIST, etc.), data transfer out, and management/analytics features.</li>
  <li>Storage cost decreases as you move to lower-cost storage classes (Standard > Standard-IA > Glacier).</li>
  <li>No charge for data transferred in to S3.</li>
</ul>

<h5>Amazon EC2 Pricing</h5>
<ul>
  <li>Charged for: instance running time (per second or hour), EBS storage, data transfer out, Elastic IP addresses (if not attached to a running instance).</li>
  <li>Stopped instances: not charged for compute, but still charged for EBS storage.</li>
</ul>

<h5>AWS Lambda Pricing</h5>
<ul>
  <li>Charged for: number of requests (per 1M requests) and compute duration (per GB-second).</li>
  <li>Free tier: 1M requests and 400,000 GB-seconds per month (always free).</li>
  <li>No charge when your code is not running.</li>
</ul>

<h5>Amazon RDS Pricing</h5>
<ul>
  <li>Charged for: instance running time, storage (per GB/month), I/O requests (for some engines), data transfer out, backup storage beyond the free allocation.</li>
  <li>Multi-AZ deployments cost roughly double (two instances running).</li>
  <li>Supports On-Demand and Reserved Instance pricing.</li>
</ul>

<div class="tip-box">
  <h4>Exam Tip</h4>
  <p>Key pricing rules: (1) Data IN to AWS is free. Data OUT costs money. (2) Stopped EC2 instances still incur EBS charges. (3) Savings Plans are more flexible than Reserved Instances. (4) Spot is cheapest but can be interrupted. (5) Lambda charges per request AND per duration. (6) S3 charges for storage, requests, and data out. (7) The AWS Pricing Calculator helps estimate costs before deployment.</p>
</div>

<div class="warning-box">
  <h4>Common Misconception</h4>
  <p>The Free Tier is per account, not per user. Creating a new IAM user does not give you a new Free Tier. Also, the 12-month free tier starts from the date the account was created, not when you first use a service. If you create an account and wait 6 months to use EC2, you only have 6 months of free tier remaining for EC2.</p>
</div>`
      },
      "4.2": {
        title: "Understand resources for billing, budget, and cost management",
        content: `<h3>Billing, Budget, and Cost Management</h3>

<p>AWS provides several tools and services to help you understand, manage, and optimize your AWS spending. The CLF-C02 exam tests your knowledge of these billing and account management services.</p>

<h4>AWS Organizations</h4>
<p><span class="service-highlight">AWS Organizations</span> is a free account management service that enables you to consolidate multiple AWS accounts into an organization that you create and centrally manage.</p>

<div class="key-concept">
  <h4>Key Features of AWS Organizations</h4>
  <ul>
    <li><strong>Consolidated billing</strong> &mdash; Single payment method for all member accounts. Aggregates usage across accounts for volume pricing discounts. One bill for all accounts.</li>
    <li><strong>Organizational Units (OUs)</strong> &mdash; Group accounts into logical units for management. OUs can be nested.</li>
    <li><strong>Service Control Policies (SCPs)</strong> &mdash; Central policies that restrict what actions member accounts can perform. SCPs are applied to OUs or individual accounts. SCPs do NOT grant permissions; they set the maximum permissions boundary. SCPs do not affect the management (root) account.</li>
    <li><strong>Account creation</strong> &mdash; Programmatically create new AWS accounts within your organization.</li>
    <li><strong>Sharing Reserved Instances and Savings Plans</strong> &mdash; RI and Savings Plan discounts are shared across all accounts in the organization (can be disabled per account).</li>
  </ul>
</div>

<h4>Billing and Cost Management Tools</h4>

<h5>AWS Budgets</h5>
<p><span class="service-highlight">AWS Budgets</span> lets you set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount.</p>
<ul>
  <li><strong>Cost budgets</strong> &mdash; Track how much you are spending.</li>
  <li><strong>Usage budgets</strong> &mdash; Track how much of a specific service you are using.</li>
  <li><strong>Reservation budgets</strong> &mdash; Track RI and Savings Plan utilization and coverage.</li>
  <li>Supports email notifications and SNS topic alerts.</li>
  <li>Can trigger automated actions (e.g., apply an IAM policy to restrict provisioning when budget is exceeded).</li>
  <li>First two budgets are free; additional budgets cost $0.02/day each.</li>
</ul>

<h5>AWS Cost Explorer</h5>
<p><span class="service-highlight">AWS Cost Explorer</span> is a tool that lets you visualize, understand, and manage your AWS costs and usage over time.</p>
<ul>
  <li>View costs broken down by service, linked account, tag, Region, etc.</li>
  <li>Forecast future costs based on historical usage.</li>
  <li>Identify cost trends and anomalies.</li>
  <li>Provides Reserved Instance and Savings Plan recommendations.</li>
  <li>Free to use; provides up to 12 months of historical data.</li>
</ul>

<h5>AWS Cost and Usage Reports (CUR)</h5>
<p><span class="service-highlight">AWS Cost and Usage Reports</span> provide the most comprehensive and detailed set of AWS cost and usage data available. Reports are delivered to an S3 bucket and can be analyzed using Athena, Redshift, or QuickSight.</p>
<ul>
  <li>Includes hourly or daily line items for each service.</li>
  <li>Shows usage quantities, costs, and pricing details.</li>
  <li>Includes information about Reserved Instances and Savings Plans.</li>
</ul>

<h5>AWS Billing Console</h5>
<p>The AWS Billing console provides a dashboard view of your monthly charges, payment methods, and tax settings. It includes:</p>
<ul>
  <li><strong>Bills page</strong> &mdash; Detailed breakdown of current and past monthly charges.</li>
  <li><strong>Free Tier usage alerts</strong> &mdash; Notifications when you approach or exceed Free Tier limits.</li>
  <li><strong>Payment methods</strong> &mdash; Manage credit cards and other payment options.</li>
</ul>

<h4>Resource Tagging</h4>
<p>Tags are key-value pairs that you attach to AWS resources. They are essential for cost allocation and management.</p>
<ul>
  <li>Use tags to organize resources by project, department, environment, application, or cost center.</li>
  <li><strong>Cost allocation tags</strong> &mdash; Must be activated in the Billing console. Once activated, they appear as columns in your cost and usage reports. Two types:
    <ul>
      <li><strong>AWS-generated tags</strong> &mdash; Automatically created by AWS (prefixed with <code>aws:</code>).</li>
      <li><strong>User-defined tags</strong> &mdash; Tags you create (prefixed with <code>user:</code>).</li>
    </ul>
  </li>
  <li>Tags help answer questions like "How much did Project X cost last month?" or "Which department is spending the most on EC2?"</li>
  <li>Use <span class="service-highlight">AWS Tag Editor</span> to manage tags across multiple resources at once.</li>
  <li>Use <span class="service-highlight">AWS Resource Groups</span> to group resources based on tags and manage them together.</li>
</ul>

<h4>Billing Alerts and Alarms</h4>
<ul>
  <li><strong>CloudWatch Billing Alarms</strong> &mdash; Set alarms on your estimated AWS charges. When the threshold is exceeded, you receive an SNS notification. Must be configured in the us-east-1 (N. Virginia) Region.</li>
  <li><strong>AWS Budgets alerts</strong> &mdash; More flexible than CloudWatch billing alarms. Support cost, usage, and reservation budgets with email and SNS notifications.</li>
</ul>

<h4>Additional Cost Management Tools</h4>
<ul>
  <li><strong><span class="service-highlight">AWS Compute Optimizer</span></strong> &mdash; Analyzes your compute usage and recommends optimal AWS resources to reduce costs and improve performance. Supports EC2, EBS, Lambda, and ECS on Fargate.</li>
  <li><strong><span class="service-highlight">AWS Pricing Calculator</span></strong> &mdash; Free web-based tool to estimate the cost of your AWS architecture before deploying it.</li>
</ul>

<div class="tip-box">
  <h4>Exam Tip</h4>
  <p>Know the difference: Cost Explorer = visualize and analyze past/current/forecasted costs. AWS Budgets = set spending limits and alerts. Cost and Usage Reports = most detailed billing data (CSV to S3). Organizations = consolidated billing and SCPs. Tags = categorize resources for cost allocation. Remember that SCPs restrict permissions but do not grant them.</p>
</div>

<div class="warning-box">
  <h4>Common Misconception</h4>
  <p>SCPs (Service Control Policies) do NOT grant any permissions. They only set boundaries on what permissions CAN be granted. Even if an SCP allows "ec2:*", a user still needs an IAM policy that grants EC2 permissions. SCPs are like a filter that limits the maximum available permissions. Also, SCPs do not affect the management account itself.</p>
</div>`
      },
      "4.3": {
        title: "Identify AWS technical resources and AWS Support options",
        content: `<h3>AWS Support Plans and Resources</h3>

<p>AWS offers various support plans and self-service resources to help customers succeed. The CLF-C02 exam tests your knowledge of the different support plan tiers and when each is appropriate.</p>

<h4>AWS Support Plans</h4>

<table class="comparison-table">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Basic (Free)</th>
      <th>Developer</th>
      <th>Business</th>
      <th>Enterprise On-Ramp</th>
      <th>Enterprise</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Price</strong></td>
      <td>Free</td>
      <td>$29/month or 3% of monthly usage</td>
      <td>$100/month or 5-10% of usage</td>
      <td>$5,500/month or tiered %</td>
      <td>$15,000/month or tiered %</td>
    </tr>
    <tr>
      <td><strong>Technical Support</strong></td>
      <td>None (account/billing only)</td>
      <td>1 primary contact via email during business hours</td>
      <td>Unlimited contacts, 24/7 phone, email, chat</td>
      <td>Unlimited contacts, 24/7 phone, email, chat</td>
      <td>Unlimited contacts, 24/7 phone, email, chat</td>
    </tr>
    <tr>
      <td><strong>Response Time (General)</strong></td>
      <td>N/A</td>
      <td>12 business hours (general), 12 hours (system impaired)</td>
      <td>24 hours (general), 12 hours (system impaired)</td>
      <td>24 hours (general), 12 hours (system impaired)</td>
      <td>24 hours (general), 12 hours (system impaired)</td>
    </tr>
    <tr>
      <td><strong>Response Time (Critical)</strong></td>
      <td>N/A</td>
      <td>N/A</td>
      <td>1 hour (production system down)</td>
      <td>30 min (business-critical system down)</td>
      <td>15 min (business-critical system down)</td>
    </tr>
    <tr>
      <td><strong>Trusted Advisor</strong></td>
      <td>6 core checks</td>
      <td>6 core checks</td>
      <td>Full set of checks</td>
      <td>Full set of checks</td>
      <td>Full set of checks</td>
    </tr>
    <tr>
      <td><strong>TAM</strong></td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>Pool of TAMs</td>
      <td>Designated TAM</td>
    </tr>
    <tr>
      <td><strong>Concierge Support</strong></td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td><strong>Infrastructure Event Management</strong></td>
      <td>No</td>
      <td>No</td>
      <td>For additional fee</td>
      <td>1 per year included</td>
      <td>Included</td>
    </tr>
    <tr>
      <td><strong>Training</strong></td>
      <td>Self-paced only</td>
      <td>Self-paced only</td>
      <td>Self-paced only</td>
      <td>Self-paced only</td>
      <td>Online self-paced labs</td>
    </tr>
  </tbody>
</table>

<div class="key-concept">
  <h4>Key Support Roles</h4>
  <ul>
    <li><strong>Technical Account Manager (TAM)</strong> &mdash; A designated technical expert who works with you to provide guidance, architectural reviews, and ongoing support. Available only with Enterprise On-Ramp (pool of TAMs) and Enterprise (designated TAM) plans. The TAM is your primary point of contact at AWS.</li>
    <li><strong>AWS Concierge Support Team</strong> &mdash; Billing and account experts who assist with billing inquiries, account best practices, and non-technical account questions. Available only with Enterprise support.</li>
    <li><strong>Infrastructure Event Management (IEM)</strong> &mdash; AWS provides architecture and scaling guidance for planned events (product launches, marketing campaigns). Included with Enterprise, once per year with Enterprise On-Ramp, and available for an additional fee with Business support.</li>
  </ul>
</div>

<h4>AWS Trusted Advisor</h4>
<p><span class="service-highlight">AWS Trusted Advisor</span> is an online tool that provides real-time guidance to help you provision your resources following AWS best practices. It inspects your AWS environment and makes recommendations in five categories:</p>
<ol>
  <li><strong>Cost Optimization</strong> &mdash; Identify unused or idle resources, recommend Reserved Instances.</li>
  <li><strong>Performance</strong> &mdash; Improve speed and responsiveness of your services.</li>
  <li><strong>Security</strong> &mdash; Close security gaps (open ports, MFA, IAM usage).</li>
  <li><strong>Fault Tolerance</strong> &mdash; Increase availability and redundancy.</li>
  <li><strong>Service Limits</strong> &mdash; Check for service usage approaching limits.</li>
</ol>
<p><strong>Basic and Developer plans:</strong> 6 core security checks (S3 bucket permissions, security groups, IAM use, MFA on root, EBS public snapshots, RDS public snapshots) plus service limit checks.</p>
<p><strong>Business, Enterprise On-Ramp, and Enterprise plans:</strong> Full set of checks across all five categories, plus API access to Trusted Advisor data.</p>

<h4>AWS Health Dashboard</h4>
<ul>
  <li><strong>AWS Health Dashboard &mdash; Service Health</strong> (formerly AWS Service Health Dashboard) &mdash; Shows the general status of all AWS services across all Regions. Public-facing, no login required.</li>
  <li><strong>AWS Health Dashboard &mdash; Your Account Health</strong> (formerly Personal Health Dashboard) &mdash; Provides alerts and remediation guidance when AWS is experiencing events that may affect YOU specifically. Shows events relevant to your account and resources, scheduled maintenance, and recommended actions.</li>
</ul>

<h4>Self-Service Resources</h4>
<ul>
  <li><strong>AWS Documentation</strong> &mdash; Comprehensive technical documentation for all AWS services, including user guides, API references, and tutorials.</li>
  <li><strong><span class="service-highlight">AWS re:Post</span></strong> &mdash; A community-driven Q&A service (replaced AWS Forums). Ask questions, share knowledge, and get answers from the AWS community and AWS experts. Moderated by community members and AWS staff.</li>
  <li><strong><span class="service-highlight">AWS IQ</span></strong> &mdash; Connect with AWS Certified third-party experts for on-demand project work. Experts help with implementation, troubleshooting, and architecture.</li>
  <li><strong>AWS Knowledge Center</strong> &mdash; FAQ-style articles addressing common questions and issues.</li>
  <li><strong>AWS Whitepapers and Guides</strong> &mdash; In-depth technical content on AWS best practices, architectures, and solutions.</li>
  <li><strong>AWS Training and Certification</strong> &mdash; Free and paid training courses, learning paths, and certification exams.</li>
  <li><strong>AWS Partner Network (APN)</strong> &mdash; Global community of partners who offer solutions and services built on AWS.</li>
</ul>

<div class="tip-box">
  <h4>Exam Tip</h4>
  <p>Critical facts for the exam: (1) TAM is only available with Enterprise and Enterprise On-Ramp plans. (2) Concierge is only Enterprise. (3) All Trusted Advisor checks require Business plan or higher. (4) 15-minute critical response time is Enterprise only. (5) Basic support includes 6 core Trusted Advisor security checks for everyone. (6) The Personal Health Dashboard shows events affecting YOUR resources; the Service Health Dashboard shows global AWS service status.</p>
</div>

<div class="warning-box">
  <h4>Common Misconception</h4>
  <p>The Developer support plan does NOT provide 24/7 support. It provides business-hours access via email only to a single primary contact. For 24/7 phone, email, and chat support, you need the Business plan or higher. Also, Enterprise On-Ramp provides a pool of TAMs (not a dedicated one) &mdash; only the full Enterprise plan provides a designated TAM.</p>
</div>`
      }
    }
  }
};
