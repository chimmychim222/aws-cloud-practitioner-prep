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
excerpt: Learn exactly who secures what in AWS — a must-know concept for the CLF-C02 exam that appears throughout the Security and Compliance domain.
readingTime: 8 min read
category: security-compliance
date: 2026-07-06  (placeholder — set to the actual publish date when you publish)
---

# AWS Shared Responsibility Model Explained

If there is one security concept you must nail before sitting the AWS Certified Cloud Practitioner (CLF-C02) exam, it is the **shared responsibility model**. Security and Compliance is the second-largest exam domain at **30% of your score**, so a shaky understanding here can cost you real points. More importantly, the model reflects how security actually works in practice whenever an organisation moves workloads to AWS.

This guide breaks the model down clearly, walks through common examples, and highlights the edge cases that trip up exam candidates most often.

---

## What Is the Shared Responsibility Model?

The core idea is straightforward: AWS and you (the customer) each own a distinct slice of the security picture. Neither party is solely responsible, and neither can ignore the other's domain.

AWS summarises this as:

- **AWS is responsible for security *of* the cloud.**
- **Customers are responsible for security *in* the cloud.**

That single sentence is worth memorising word for word — it shows up in exam questions almost verbatim.

---

## AWS's Responsibilities: Security *of* the Cloud

AWS owns everything that makes up the underlying infrastructure. You cannot see it, touch it, or configure it — and you do not need to, because AWS is contractually and operationally accountable for it.

### Physical Infrastructure

AWS designs, builds, and operates its own data centres. Physical access controls, environmental protections (fire suppression, cooling, power redundancy), and hardware security are entirely AWS's concern. As a customer, you never rack a server, replace a failed drive, or worry about a flood taking out a facility.

### Global Network and Hardware

The fibre backbone connecting AWS Regions, the hardware routers and switches, and the dedicated network links between Availability Zones are all managed by AWS. Each **AWS Region** is geographically isolated and contains two or more **Availability Zones** — discrete data centres with redundant power and connectivity. Keeping that physical fabric secure is AWS's job.

### Virtualisation Layer (Hypervisor)

When you launch an EC2 instance, a hypervisor allocates compute resources from underlying hardware and isolates your instance from every other tenant. AWS is responsible for the security of that hypervisor — you never patch it, configure it, or even know which physical host your instance is running on.

### Managed Service Internals

For fully managed services — think Amazon DynamoDB, Amazon S3, AWS Lambda — AWS also takes on the security of the service's own infrastructure and underlying software. You do not patch the database engine powering DynamoDB; AWS does.

---

## Customer Responsibilities: Security *in* the Cloud

Once AWS hands you the keys to the resources you provision, the security decisions are yours. This is where many organisations are caught off guard after migrating from on-premises environments.

### Operating System Patches and Updates

If you launch an EC2 instance, AWS gives you a virtual server. Patching the guest operating system — whether it runs Amazon Linux, Ubuntu, or Windows Server — is your responsibility. AWS will never push OS updates to your instances without your involvement.

### Application Configuration and Code

Your applications, their dependencies, their configurations, and their vulnerabilities are your problem to manage. A misconfigured web server or an unpatched application library sitting on an EC2 instance is squarely in the customer's lane.

### Identity and Access Management (IAM)

Creating IAM users, groups, and roles; assigning policies; enforcing the **principle of least privilege**; and enabling multi-factor authentication (MFA) — especially on the root account — are all customer responsibilities. AWS provides the IAM service, but it cannot know who should have access to your resources.

### Data Encryption

You decide whether data at rest is encrypted and whether data in transit uses TLS. AWS offers the tools — AWS Key Management Service (KMS), server-side encryption options in S3, enforced HTTPS on API Gateway — but enabling them is your call.

### Security Groups and Firewall Rules

Security groups act as virtual firewalls for your EC2 instances. A security group that allows unrestricted inbound access (0.0.0.0/0) on a sensitive port is a customer configuration error, not an AWS failure.

### Network Configuration

VPC design, subnet layout, route tables, and network ACLs are all customer-controlled. If you accidentally expose a private subnet to the public internet, that is on you.

---

## The "It Depends" Zone: Shared Services

Some services blur the line, and this is where CLF-C02 questions get interesting.

### Infrastructure Services (e.g., EC2)

The split is cleanest here. AWS secures the hardware and hypervisor; you secure everything from the operating system upward.

### Container and Platform Services (e.g., Amazon RDS)

With Amazon RDS, AWS manages the underlying EC2 instance, the database engine installation, and automated patching of the database engine itself. Your responsibilities shift to: the data you put in the database, the security groups controlling access to RDS, the IAM policies governing who can call RDS APIs, and whether encryption at rest is enabled. You are responsible for *less* than with a self-managed database on EC2, but you still own meaningful decisions.

### Abstracted / Serverless Services (e.g., AWS Lambda, Amazon DynamoDB)

Here, AWS manages almost everything beneath the surface. With Lambda, you do not manage servers or operating systems at all — AWS's responsibility extends further up the stack. Your lane narrows to: the function code you upload, the IAM execution role you attach to the function, and the data your function processes.

---

## Key Security Services That Support Customer Responsibilities

Understanding the shared responsibility model also means knowing which AWS tools help you meet *your* side of the bargain.

- **AWS CloudTrail** records API calls across your account — who made a request, when, from where, and what they did. It is an audit and governance tool, not a performance monitor.
- **Amazon GuardDuty** uses machine learning, anomaly detection, and threat intelligence feeds to detect malicious or unauthorised behaviour in your account.
- **Amazon Inspector** performs automated vulnerability scanning for EC2 instances, container images, and Lambda functions — helping you find OS and software vulnerabilities that are your responsibility to patch.
- **AWS Shield** protects against DDoS attacks. Shield Standard is free and automatically applied to all AWS customers; Shield Advanced is a paid tier that adds enhanced detection and access to a DDoS Response Team.

Knowing which tool does what is fair game on the exam. Check out the [exam guide](/exam-guide) for a full breakdown of which services appear in each domain.

---

## Why This Model Matters for the Exam

Security and Compliance carries the second-highest domain weighting on the CLF-C02 — **30%**. Questions in this domain frequently present a scenario and ask you to identify whether a described security task belongs to AWS or the customer. The trick is that incorrect answer choices are often plausible-sounding confusions between the two sides.

**A reliable mental test:** Ask yourself — *could the customer choose to do this differently?* If yes, it is almost always a customer responsibility. Picking which OS to run on EC2, whether to enable encryption, which ports to open — all choices the customer makes. The hardware underneath your EC2 instance? Not a choice you get to make, and therefore not your responsibility to secure.

If you want to test yourself on scenario-based questions right now, head to the [practice questions](/practice-questions) section for drills specifically targeting Domain 2.

Not sure where you stand overall? Take our [diagnostic](/diagnostic) quiz to identify your weakest domains before you invest study time.

---

## FAQ

#### Is the root account AWS's responsibility or mine?

The root account is entirely your responsibility. AWS creates it when you open your account, but securing it — including enabling MFA and avoiding its use for day-to-day tasks — is a customer obligation under the shared responsibility model.

#### Does AWS ever patch my EC2 instances for me?

No. AWS patches the underlying hypervisor and physical infrastructure, but the guest operating system on your EC2 instance is your responsibility to keep up to date.

#### If I use Amazon RDS, do I still need to patch anything?

AWS handles patching of the RDS database engine itself during maintenance windows. However, you are still responsible for managing database users and credentials, enabling encryption, and configuring security group rules that control network access to your RDS instance.

#### What happens if AWS has a hardware failure that takes down my instance — is that my fault?

No. Physical infrastructure failures are AWS's responsibility. That said, designing your application to tolerate such failures — for example, by spreading instances across multiple Availability Zones — is your architectural responsibility.

#### How many questions on the CLF-C02 will cover the shared responsibility model?

The exam does not publish exact question counts per topic, but Security and Compliance accounts for 30% of the scored questions. The shared responsibility model is one of the most frequently tested concepts in that domain, so expect it to appear in multiple questions, often embedded in scenario-based questions rather than asked directly.

#### Is AWS Shield Standard something I have to turn on?

No. AWS Shield Standard is automatically applied to all AWS customers at no additional charge. It provides baseline protection against common DDoS attack vectors. Shield Advanced must be explicitly subscribed to and carries an additional cost.

---

## Bringing It Together

The shared responsibility model is not bureaucratic fine print — it is the mental map that tells you exactly what you must protect when you run workloads in AWS. AWS locks down the physical data centres, the global network, and the hypervisor. You lock down the OS, the application, the identities, the data, and the network configuration you control.

Get this model internalised and you will find that a significant portion of CLF-C02 security questions become pattern-matching exercises rather than guesswork. Combined with a solid understanding of AWS's security tooling — CloudTrail, GuardDuty, Inspector, Shield, and IAM — you will be well-positioned to score strongly in Domain 2.

> *cloudpractitionerprep.com is an independent exam-preparation resource and is not affiliated with, endorsed by, or sponsored by Amazon Web Services, Inc. or its affiliates. AWS and Amazon Web Services are trademarks of Amazon.com, Inc.*

