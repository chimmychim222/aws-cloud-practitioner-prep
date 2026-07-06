<!--
DRAFT — NOT PUBLISHED.
Generated: 2026-07-06
Source topic: AWS Shared Responsibility Model Explained (blog/topics.js slug: aws-shared-responsibility-model-explained)
Model: claude-sonnet-4-6

Do NOT add this to blog/posts.js or sitemap.xml until:
  1. Every item in the companion aws-shared-responsibility-model-explained.factcheck.md has been verified
     against official AWS documentation and checked off.
  2. The content has been read end-to-end by a human for accuracy and tone.
See blog-drafts/PUBLISHING.md for the full publish checklist.
-->

---
title: AWS Shared Responsibility Model Explained
slug: aws-shared-responsibility-model-explained
excerpt: Learn exactly what AWS is responsible for vs. what you are — a clear breakdown of the shared responsibility model for the CLF-C02 exam.
readingTime: 8 min read
category: security-compliance
date: 2026-07-06  (placeholder — set to the actual publish date when you publish)
---

# AWS Shared Responsibility Model Explained

If you've started studying for the AWS Certified Cloud Practitioner (CLF-C02) exam, you've almost certainly run into the **shared responsibility model**. It's one of the most tested concepts in Domain 2: Security and Compliance — which carries the second-highest domain weighting at **30% of your scored questions**. Get this concept wrong on exam day and you'll feel it.

The good news: once the mental model clicks, you'll find it surprisingly intuitive. This guide breaks it down clearly, with concrete examples and the exam angle you actually need.

---

## What Is the Shared Responsibility Model?

The shared responsibility model is AWS's framework for dividing security and compliance duties between **AWS** and **you, the customer**. Neither side handles everything — security is a partnership.

AWS summarises the split with a memorable phrase:

- **AWS is responsible for security *of* the cloud.**
- **You are responsible for security *in* the cloud.**

That single sentence is worth memorising verbatim. Exam questions often hinge on whether something is "of the cloud" or "in the cloud."

---

## AWS's Responsibilities: Security OF the Cloud

AWS owns and operates the underlying infrastructure that powers all its services. That means AWS is responsible for protecting it — and you have no direct access to it, nor do you need to worry about it from a patching or configuration standpoint.

### Physical and Hardware Security

AWS is responsible for the physical security of its data centres: the buildings, the servers inside them, the power and cooling systems, and all the hardware. You don't get to tour an AWS data centre, and you don't need to — AWS handles it.

### The Global Network Infrastructure

The fibre cables, routers, and switches that connect AWS Regions and Availability Zones globally are AWS's responsibility. AWS Regions are geographically isolated from one another, and each Region contains two or more Availability Zones — discrete data centres with redundant power, networking, and connectivity. Keeping that infrastructure secure and available is on AWS.

### The Hypervisor and Virtualisation Layer

When you launch an EC2 instance, you're running a virtual machine on AWS hardware. The hypervisor — the software layer that creates and manages those virtual machines — is entirely AWS's responsibility. You never touch it.

### Managed Service Infrastructure

Here's where it gets nuanced, and where a lot of exam questions live: for **managed services**, AWS takes on more responsibility than you might expect.

Take AWS Lambda. Because Lambda is serverless, you never manage the underlying servers or operating systems. AWS patches the OS, maintains the runtime environment, and secures the compute fleet. Your responsibility narrows to your function code and the permissions you grant it.

Similarly, with Amazon DynamoDB (a fully managed NoSQL database), AWS manages the underlying infrastructure, the database software, and patching. You manage your tables, your data, and your access controls.

---

## Your Responsibilities: Security IN the Cloud

Now for your side of the equation. What you're responsible for depends heavily on the service you use — but some categories almost always fall on you.

### Operating System Patches and Updates

If you run an **Amazon EC2 instance**, you chose the operating system — and you own it. AWS does not patch your EC2 guest OS. If you're running a Linux or Windows instance, keeping it up to date with security patches is your job. This is one of the most commonly tested distinctions on the exam.

### Application Configuration and Code

Whatever application you deploy — its configuration, its dependencies, and its security settings — is yours to manage. AWS provides the platform; securing what runs on it is your responsibility.

### Identity and Access Management (IAM)

IAM is your domain. You create IAM users, groups, and roles. You write and attach policies. You decide which people and services can access which resources, and with what permissions.

The **principle of least privilege** — granting only the permissions needed to perform a task and nothing more — is a core IAM best practice the exam tests repeatedly. Enabling **multi-factor authentication (MFA)**, especially on the root account, is another best practice that falls squarely on you.

### Data Encryption

You decide whether to encrypt your data at rest and in transit. AWS provides the tools — AWS Key Management Service (KMS), SSL/TLS endpoints, S3 server-side encryption options — but whether you actually turn them on is your call.

### Network Configuration: Security Groups and Firewall Rules

Security groups act as virtual firewalls for your EC2 instances and other resources. Configuring inbound and outbound rules is your responsibility. If you leave port 22 (SSH) open to the world, that's on you — not AWS.

---

## The Spectrum: How Responsibility Shifts by Service Type

The shared responsibility model isn't static. The more managed a service is, the more responsibility AWS absorbs.

| Service Type | AWS Manages | You Manage |
|---|---|---|
| EC2 (IaaS) | Hardware, hypervisor, host OS | Guest OS, app, data, IAM, security groups |
| RDS (Managed DB) | Hardware, hypervisor, DB engine patching | DB schema, access control, encryption settings, data |
| Lambda (Serverless) | Hardware, OS, runtime patching | Function code, IAM permissions, data |
| DynamoDB (Fully Managed) | All infrastructure, DB software | Table design, data, IAM policies |

Think of it as a sliding scale. Infrastructure-as-a-Service (IaaS) like EC2 puts more on your plate. Fully managed and serverless services shrink your responsibilities — but never to zero.

---

## Key AWS Security Services and Who Controls Them

Understanding the shared responsibility model also means knowing which AWS security services exist to help *you* meet your obligations.

- **AWS CloudTrail** records API calls across your account — who did what, when, and from where. Setting up CloudTrail and reviewing its logs is your responsibility; the service itself is provided by AWS.
- **Amazon GuardDuty** uses machine learning and threat intelligence to detect threats in your account. You enable it; AWS keeps the detection engine updated.
- **Amazon Inspector** performs vulnerability scanning on your EC2 instances, container images, and Lambda functions. Again, you decide to enable it.
- **AWS Shield Standard** is free and automatic — AWS applies it on your behalf to protect against common DDoS attacks. AWS Shield Advanced is a paid upgrade that adds enhanced detection and access to a DDoS Response Team.

Notice the pattern: AWS *provides* these tools, but **you** decide to use them (except Shield Standard, which is always on). Choosing not to enable GuardDuty, for example, is your decision — not a gap in AWS's responsibility.

---

## Why This Matters for the CLF-C02 Exam

Domain 2 (Security and Compliance) makes up 30% of your exam. The shared responsibility model underpins almost every question in that domain. You might be asked:

- Who is responsible for patching the guest OS on an EC2 instance? (**You.**)
- Who is responsible for the physical security of AWS data centres? (**AWS.**)
- If a customer misconfigures a security group and data is exposed, who is at fault? (**The customer.**)
- Who is responsible for patching the database engine in Amazon RDS? (**AWS.**)

The exam will also test your knowledge through scenario-based questions — someone describes a situation and you identify where the responsibility lies. Practicing these scenarios is invaluable. The [/practice-questions] practice questions on this site include shared responsibility scenarios worth working through before exam day.

Before you dive into practice questions, it's worth confirming you have a solid baseline. Our [/diagnostic] diagnostic quiz can show you quickly where your security and compliance knowledge stands right now.

For a full breakdown of every domain and what's in scope, see our [/exam-guide] exam guide — it maps every tested topic to the official CLF-C02 domain structure.

---

## FAQ

#### Is the shared responsibility model the same for every AWS service?

No. The division of responsibilities shifts depending on how managed a service is. With EC2, you manage the guest operating system and everything above it. With fully managed services like DynamoDB or Lambda, AWS takes on much more — you focus mainly on your data, IAM permissions, and application logic.

#### Who is responsible for patching an EC2 instance's operating system?

You are. AWS manages the underlying host and hypervisor, but once you launch an EC2 instance, the guest operating system is yours to patch and maintain.

#### Who patches the database engine in Amazon RDS?

AWS does. RDS is a managed database service, so AWS handles database engine upgrades and patches. You are still responsible for your data, your database schema, your access controls, and your encryption settings.

#### Does AWS being responsible for physical security mean I don't need to worry about data security?

No. Physical security is just one layer. You are still responsible for encrypting your data, configuring access controls, managing IAM users and roles correctly, and setting appropriate network rules. AWS securing the building doesn't protect you from a misconfigured S3 bucket.

#### Is AWS Shield something I have to set up?

AWS Shield Standard is automatically applied to all AWS customers at no additional cost — you don't have to do anything to enable it. AWS Shield Advanced is a paid service you opt into for enhanced DDoS protection and access to a dedicated response team.

#### How heavily is the shared responsibility model tested on the CLF-C02?

It's one of the most consistently tested concepts on the exam. Domain 2 (Security and Compliance) carries a 30% weighting, and the shared responsibility model is foundational to that entire domain. Expect multiple direct and scenario-based questions that require you to correctly assign responsibility to either AWS or the customer.

