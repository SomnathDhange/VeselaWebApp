"use client";

import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import SettingSection from "./SettingSection";

const TermsContent = () => {
  const theme = useTheme();

  return (
    <SettingSection title="Terms of Use" description="Read our Terms of Service">
      <Box
        sx={{
          width: "100%",
          color: theme.palette.text.primary,
          // Standardized document styling
          "& h1, & h2, & h3": {
            color: theme.palette.primary.main,
            fontWeight: 600,
            mt: 4,
            mb: 2,
          },
          "& h4": {
            color: theme.palette.text.primary,
            fontWeight: 600,
            mt: 3,
            mb: 1.5,
          },
          "& p": {
            lineHeight: 1.8,
            mb: 2,
            color: theme.palette.text.secondary,
            fontSize: "0.95rem",
          },
          "& strong": {
            color: theme.palette.text.primary,
          },
          "& ul, & ol": {
            mb: 2,
            pl: 4,
            color: theme.palette.text.secondary,
          },
          "& li": {
            mb: 1,
            lineHeight: 1.6,
            fontSize: "0.95rem",
          },
          "& a": {
            color: theme.palette.primary.main,
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          },
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: "text.primary" }}>
          Gray Sky AI Terms of Use, Safety Notice, and Privacy Framework
        </Typography>

        <Box sx={{ mb: 3, display: "flex", gap: 3, flexWrap: "wrap" }}>
          <Typography variant="caption" color="text.secondary">
            <strong>Effective Date:</strong> 2-1-2023
          </Typography>
          <Typography variant="caption" color="text.secondary">
            <strong>Last Updated:</strong> 7-25-2026
          </Typography>
        </Box>

        <p>
          These Terms of Use, Safety Notice, and Privacy Framework (“Terms”) govern your access to and use of Vesela and any related websites, mobile applications, software, features, subscriptions, content, and services provided by Gray Sky AI (“Gray Sky AI,” “we,” “us,” or “our”). Collectively, these are referred to as the “Services.”
        </p>

        <p>
          Please read these Terms carefully. By creating an account, purchasing a subscription, accessing the Services, or otherwise using Vesela, you acknowledge that you have read, understood, and agreed to these Terms and our Privacy Policy.
        </p>

        {/* Safety Notice Banner */}
        <Box

        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 1.5,
              textTransform: "uppercase",
              fontSize: "1rem",
              letterSpacing: "0.5px",
            }}
          >
            Important Safety Notice
          </Typography>
          <p style={{ fontWeight: 600, color: theme.palette.text.primary, marginBottom: "12px" }}>
            VESELA IS NOT AN EMERGENCY, CRISIS-RESPONSE, MEDICAL, OR PROFESSIONAL SERVICES PLATFORM. THE SERVICES ARE NOT MONITORED CONTINUOUSLY OR IN REAL TIME. DO NOT RELY ON VESELA TO IDENTIFY, ASSESS, RESPOND TO, OR REPORT AN EMERGENCY.
          </p>
          <p style={{ marginBottom: "12px" }}>
            If you believe that you or another person may be experiencing an immediate medical emergency, mental-health emergency, or threat of harm:
          </p>
          <ul style={{ marginBottom: "12px" }}>
            <li>Call 911 or the emergency-services number applicable to your location;</li>
            <li>Go to the nearest emergency department or appropriate emergency facility;</li>
            <li>In the United States, call or text 988 to reach the Suicide & Crisis Lifeline; or</li>
            <li>Contact an appropriate licensed professional, crisis service, law-enforcement agency, or protective-services agency.</li>
          </ul>
          <p style={{ marginBottom: "12px" }}>
            If you suspect child abuse, abuse of an elderly person, abuse of a dependent adult, human trafficking, or another situation requiring mandatory or emergency intervention, contact the appropriate authorities directly.
          </p>
          <p style={{ marginBottom: 0 }}>
            Submitting information to Vesela does not constitute contacting emergency personnel, a healthcare provider, a counselor, a mandated reporter, or any other professional.
          </p>
        </Box>

        <h3>1. Acceptance of These Terms</h3>
        <p>By using the Services, you represent that:</p>
        <ul>
          <li>You are legally capable of entering into these Terms;</li>
          <li>The information you provide to us is accurate and complete;</li>
          <li>You will use the Services only in accordance with these Terms and applicable law; and</li>
          <li>You understand that Vesela is an artificial-intelligence system and not a human being or licensed professional.</li>
        </ul>
        <p>If you do not agree to these Terms, you may not use the Services.</p>

        <h3>2. What Vesela Is</h3>
        <p>
          Vesela is an artificial-intelligence-powered conversational application designed to support reflection, exploration, learning, creative thinking, personal insight, and meaningful conversation.
        </p>
        <p>
          Depending on how a user chooses to engage with Vesela, conversations may involve personal experiences, relationships, emotions, goals, decisions, philosophical questions, creative ideas, practical concerns, or other subjects.
        </p>
        <p>
          Vesela may be capable of discussing emotional well-being, psychological concepts, or mental-health-related subjects. That capability does not mean that Vesela is designed exclusively or primarily as a mental-health application, nor does it transform the Services into therapy, counseling, healthcare, or another licensed professional service.
        </p>
        <p>
          Gray Sky AI does not guarantee that Vesela will be appropriate for every person, purpose, question, or situation.
        </p>

        <h3>3. Vesela Is an Artificial-Intelligence System</h3>
        <p>
          Vesela generates responses through artificial-intelligence models. Although Vesela may communicate in a natural, relational, empathic, or human-like manner, Vesela:
        </p>
        <ul>
          <li>Is not conscious in the same manner as a human being;</li>
          <li>Is not a physician, psychologist, counselor, therapist, attorney, financial adviser, crisis responder, or other licensed professional;</li>
          <li>Does not independently know whether information provided by a user is accurate;</li>
          <li>May misunderstand context or intent;</li>
          <li>May generate incomplete, inaccurate, outdated, inconsistent, or inappropriate information;</li>
          <li>May fail to recognize emergencies, threats, manipulation, sarcasm, or important contextual information; and</li>
          <li>Should not be treated as an infallible authority.</li>
        </ul>
        <p>
          You remain responsible for evaluating Vesela’s responses and deciding whether and how to act upon them.
        </p>

        <h3>4. No Professional Relationship</h3>
        <p>Use of the Services does not create:</p>
        <ul>
          <li>A therapist-client relationship;</li>
          <li>A physician-patient relationship;</li>
          <li>A counselor-client relationship;</li>
          <li>An attorney-client relationship;</li>
          <li>A fiduciary relationship;</li>
          <li>A professional duty of care;</li>
          <li>A duty to diagnose, treat, warn, rescue, report, intervene, or monitor; or</li>
          <li>Any other licensed or regulated professional relationship.</li>
        </ul>
        <p>
          Vesela is not a substitute for professional judgment, diagnosis, treatment, assessment, representation, or advice.
        </p>
        <p>
          You should consult an appropriately qualified professional before making decisions involving medical care, mental-health treatment, medication, legal rights, finances, personal safety, or other matters in which professional expertise is reasonably necessary.
        </p>
        <p>
          Never disregard professional advice or delay seeking professional assistance because of a response generated through the Services.
        </p>

        <h3>5. No Emergency Monitoring or Guaranteed Intervention</h3>
        <p>
          Gray Sky AI does not promise that conversations will be reviewed by a human or licensed professional.
        </p>
        <p>
          The Services may not recognize language indicating self-harm, harm to another person, abuse, neglect, exploitation, medical danger, or another emergency. Technical systems intended to identify safety concerns may fail, produce false positives, or interpret statements incorrectly.
        </p>
        <p>Gray Sky AI has no contractual obligation to:</p>
        <ul>
          <li>Monitor conversations continuously;</li>
          <li>Determine whether an emergency exists;</li>
          <li>Locate a user;</li>
          <li>Contact a user’s family, guardian, physician, counselor, or emergency contact;</li>
          <li>Contact law enforcement, emergency medical services, or protective services;</li>
          <li>Provide a warning to a third party; or</li>
          <li>Take any particular action based on content submitted through the Services.</li>
        </ul>
        <p>
          Where permitted by law, Gray Sky AI may review or disclose information when it reasonably believes doing so is necessary to comply with law, respond to a valid legal request, investigate misuse, protect the Services, or address a credible and imminent threat. This does not create a duty to monitor, detect, or intervene.
        </p>

        <h3>6. Medical and Mental-Health Disclaimer</h3>
        <p>
          The Services are not medical devices and are not intended to diagnose, prevent, monitor, predict, treat, mitigate, or cure any medical, psychiatric, psychological, neurological, or behavioral condition.
        </p>
        <p>
          Information generated by Vesela is provided for general conversational and informational purposes. It should not be used to:
        </p>
        <ul>
          <li>Diagnose yourself or another person;</li>
          <li>Determine whether a medical or psychological condition exists;</li>
          <li>Select, begin, stop, or alter medication;</li>
          <li>Replace a professional examination or assessment;</li>
          <li>Determine whether emergency intervention is required;</li>
          <li>Create a treatment plan without appropriate professional review; or</li>
          <li>Make decisions that could materially affect a person’s health or safety without qualified human involvement.</li>
        </ul>
        <p>
          Gray Sky AI makes no representation that a particular response is clinically appropriate, scientifically established, or suitable for your individual circumstances.
        </p>

        <h3>7. Privacy and Personal Information</h3>
        <p>
          Your use of the Services is also governed by the Gray Sky AI Privacy Policy. The Privacy Policy should be reviewed together with these Terms.
        </p>
        <p>
          Depending on the features you use, information processed through the Services may include:
        </p>
        <ul>
          <li>Account and contact information;</li>
          <li>Subscription and transaction information;</li>
          <li>Conversation content and user-submitted materials;</li>
          <li>Preferences, saved information, or memory features;</li>
          <li>Device, browser, network, and diagnostic information;</li>
          <li>Usage and interaction information;</li>
          <li>Communications with customer support; and</li>
          <li>Other information you choose to provide.</li>
        </ul>
        <p>
          Gray Sky AI may process information as reasonably necessary to:
        </p>
        <ul>
          <li>Provide and operate the Services;</li>
          <li>Generate and personalize responses;</li>
          <li>Maintain account functionality;</li>
          <li>Provide user-requested memory or continuity features;</li>
          <li>Process transactions and subscriptions;</li>
          <li>Detect fraud, abuse, security threats, and violations of these Terms;</li>
          <li>Diagnose technical problems;</li>
          <li>Measure and improve performance;</li>
          <li>Develop or evaluate features, subject to the Privacy Policy;</li>
          <li>Respond to support requests;</li>
          <li>Comply with legal obligations; and</li>
          <li>Protect users, Gray Sky AI, and third parties.</li>
        </ul>
        <p>
          The Privacy Policy must accurately describe Gray Sky AI’s actual data collection, retention, deletion, sharing, model-improvement, and security practices. Where these practices differ by subscription, platform, organization, or product configuration, the applicable differences should be disclosed.
        </p>

        <h3>8. Health-Related Information and HIPAA</h3>
        <p>
          Users may choose to discuss health, emotional, psychological, or similarly sensitive subjects with Vesela. Information does not automatically become “protected health information” under the Health Insurance Portability and Accountability Act merely because it concerns health or mental health.
        </p>
        <p>
          For Vesela’s general consumer Services, Gray Sky AI may not be a HIPAA covered entity or business associate, and HIPAA may therefore not apply to information entered directly by a consumer.
        </p>
        <p>
          If Gray Sky AI provides a separately designated service on behalf of a healthcare provider, health plan, or another HIPAA-regulated organization under a Business Associate Agreement, additional contractual and privacy terms may apply to that particular service.
        </p>
        <p>
          Nothing in these Terms should be interpreted as a representation that every Gray Sky AI product, account, conversation, or data category is governed by HIPAA.
        </p>
        <p>
          Regardless of whether HIPAA applies, Gray Sky AI will handle personal information in accordance with its Privacy Policy and applicable privacy, security, consumer-protection, and breach-notification laws.
        </p>

        <h3>9. Security</h3>
        <p>
          Gray Sky AI uses administrative, technical, and organizational safeguards intended to protect information and maintain the security of the Services.
        </p>
        <p>
          However, no software, artificial-intelligence platform, network, transmission method, or storage system can be guaranteed to be completely secure. You acknowledge the risk that information could be lost, corrupted, accessed without authorization, intercepted, or exposed through circumstances including software vulnerabilities, account compromise, malicious conduct, service-provider failures, or events outside Gray Sky AI’s reasonable control.
        </p>
        <p>You are responsible for:</p>
        <ul>
          <li>Maintaining the confidentiality of your login credentials;</li>
          <li>Using a strong and unique password;</li>
          <li>Protecting devices used to access the Services;</li>
          <li>Promptly notifying Gray Sky AI of suspected unauthorized access;</li>
          <li>Logging out of shared devices; and</li>
          <li>Avoiding the submission of information that is unnecessary for your intended use.</li>
        </ul>
        <p>
          You may not access another person’s account or allow another person to use your account in a manner that violates these Terms.
        </p>

        <h3>10. Your Privacy Rights</h3>
        <p>
          Depending on your jurisdiction and subject to applicable exceptions, you may have the right to:
        </p>
        <ul>
          <li>Request access to personal information maintained about you;</li>
          <li>Request correction of inaccurate personal information;</li>
          <li>Request deletion of personal information;</li>
          <li>Obtain a portable copy of certain personal information;</li>
          <li>Request information about categories of personal information processed or disclosed;</li>
          <li>Opt out of certain processing activities where applicable;</li>
          <li>Withdraw consent where processing is based on consent;</li>
          <li>Appeal certain decisions concerning a privacy request; and</li>
          <li>Exercise your privacy rights without unlawful discrimination.</li>
        </ul>
        <p>
          Instructions for submitting and appealing privacy requests must be provided in the Gray Sky AI Privacy Policy.
        </p>
        <p>
          These rights apply to “personal information” or “personal data” as defined by applicable law. They should not be described as HIPAA rights unless HIPAA actually applies to the relevant service and information.
        </p>

        <h3>11. Use of Information for Research and Improvement</h3>
        <p>
          Gray Sky AI may use aggregated, de-identified, or otherwise appropriately protected information to analyze performance, conduct research, evaluate safety, develop features, improve the Services, and better understand how users interact with Vesela.
        </p>
        <p>
          Any use of identifiable conversation content for model training, human review, product improvement, research, or a materially different purpose must be accurately disclosed in the Privacy Policy and implemented in accordance with applicable law, user settings, contractual commitments, and consent requirements.
        </p>
        <p>
          Gray Sky AI does not guarantee that de-identification eliminates every conceivable risk of re-identification.
        </p>

        <h3>12. Eligibility and Use by Minors</h3>
        <p>
          The general-audience version of Vesela is not directed to children under 13 years of age.
        </p>
        <p>
          You may not create an account for, knowingly permit access by, or submit personal information on behalf of a child under 13 through the general-audience Services.
        </p>
        <p>
          Gray Sky AI may offer a separately configured service for children under 13 only where it has implemented the notices, verifiable parental-consent procedures, parental controls, data limitations, and other protections required by applicable law.
        </p>
        <p>
          Users between 13 and 17 years of age may use the Services only:
        </p>
        <ul>
          <li>With the permission of a parent or legal guardian;</li>
          <li>Under appropriate parental or guardian supervision;</li>
          <li>Where such use is lawful; and</li>
          <li>In accordance with any age requirements imposed by the relevant app store or distribution platform.</li>
        </ul>
        <p>
          A parent or legal guardian permitting a minor to use the Services is responsible for the minor’s use and for reviewing these Terms and the Privacy Policy with the minor.
        </p>
        <p>
          If Gray Sky AI learns that it collected personal information from a child in violation of applicable law, it may delete the information, restrict the account, request parental verification, or terminate access.
        </p>

        <h3>13. Personal and Authorized Use</h3>
        <p>
          Unless Gray Sky AI expressly agrees otherwise in writing, the Services are licensed for your personal, lawful, noncommercial use.
        </p>
        <p>You may not:</p>
        <ul>
          <li>Resell, sublicense, lease, distribute, or commercially exploit access to the Services;</li>
          <li>Operate the Services on behalf of another person without authorization;</li>
          <li>Share account access in violation of your subscription;</li>
          <li>Use a consumer account to provide professional services to third parties;</li>
          <li>Represent Vesela’s output as professional advice, a human assessment, or a statement issued by Gray Sky AI;</li>
          <li>Use the Services to make high-impact decisions about another person without appropriate human review; or</li>
          <li>Use the Services in any manner prohibited by law.</li>
        </ul>
        <p>
          Separate enterprise, organizational, professional, developer, or commercial-use terms may apply where Gray Sky AI has authorized such use.
        </p>

        <h3>14. Prohibited Conduct</h3>
        <p>You agree not to use the Services to:</p>
        <ul>
          <li>Violate any law, regulation, court order, contractual obligation, or legal right;</li>
          <li>Facilitate violence, abuse, exploitation, harassment, stalking, fraud, or unlawful discrimination;</li>
          <li>Threaten, impersonate, deceive, defame, or unlawfully surveil another person;</li>
          <li>Create or distribute malware, malicious code, phishing materials, or fraudulent communications;</li>
          <li>Obtain or disclose personal, confidential, proprietary, or security-sensitive information without authorization;</li>
          <li>Infringe intellectual-property, privacy, publicity, or other rights;</li>
          <li>Submit content you do not have the right to use;</li>
          <li>Generate or distribute unlawful sexual content or content exploiting minors;</li>
          <li>Falsely represent AI-generated material as an authentic professional evaluation, official record, or human communication;</li>
          <li>Make false emergency reports or intentionally simulate emergencies in a manner that could cause harm, waste resources, or disrupt the Services;</li>
          <li>Use the Services to manipulate, exploit, or exercise coercive control over another person; or</li>
          <li>Encourage another person to violate these Terms.</li>
        </ul>

        <h3>15. Prohibited Adversarial Attacks and Security Circumvention</h3>
        <p>
          You may not probe, attack, manipulate, test, or interact with the Services for the purpose of defeating safeguards, extracting protected information, interfering with operation, or discovering nonpublic system behavior unless Gray Sky AI has provided prior written authorization.
        </p>
        <p>Prohibited conduct includes, without limitation:</p>

        <h4>A. Jailbreaks and Safety-Filter Circumvention</h4>
        <p>
          You may not attempt to cause Vesela to ignore, override, reinterpret, suspend, or violate its instructions, safeguards, content policies, behavioral boundaries, access restrictions, or safety systems.
        </p>
        <p>This includes attempts made through:</p>
        <ul>
          <li>Jailbreak prompts;</li>
          <li>Role-playing scenarios;</li>
          <li>Hypothetical framing;</li>
          <li>“Developer mode” or “unrestricted mode” instructions;</li>
          <li>Claims of special authorization;</li>
          <li>Encoded, encrypted, fragmented, reversed, obfuscated, or translated instructions;</li>
          <li>Multi-turn manipulation;</li>
          <li>Emotional pressure, coercion, threats, or deception;</li>
          <li>Instruction nesting;</li>
          <li>Simulated system or administrator messages; or</li>
          <li>Requests to continue material that the Services have declined to provide.</li>
        </ul>

        <h4>B. System-Message and Instruction Extraction</h4>
        <p>
          You may not attempt to obtain, reconstruct, infer, expose, reproduce, or cause Vesela to reveal:
        </p>
        <ul>
          <li>System messages;</li>
          <li>Developer messages;</li>
          <li>Hidden prompts;</li>
          <li>Internal policies or routing instructions;</li>
          <li>Safety-classification rules;</li>
          <li>Moderation thresholds;</li>
          <li>Internal reasoning or private chain-of-thought;</li>
          <li>Tool instructions;</li>
          <li>Authentication credentials;</li>
          <li>API keys;</li>
          <li>security tokens;</li>
          <li>Configuration files;</li>
          <li>Private endpoints;</li>
          <li>Internal identifiers;</li>
          <li>Nonpublic evaluation criteria;</li>
          <li>Proprietary prompt templates; or</li>
          <li>Any other confidential operational instructions.</li>
        </ul>
        <p>
          You may not ask Vesela to print, quote, summarize, encode, translate, transform, repeat, or indirectly disclose such information.
        </p>

        <h4>C. Prompt Injection and Context Manipulation</h4>
        <p>
          You may not perform direct or indirect prompt-injection attacks.
        </p>
        <p>This includes placing malicious or conflicting instructions in:</p>
        <ul>
          <li>User messages;</li>
          <li>Uploaded documents;</li>
          <li>Images;</li>
          <li>Websites;</li>
          <li>Hyperlinks;</li>
          <li>Metadata;</li>
          <li>Retrieved content;</li>
          <li>External tools;</li>
          <li>Connected services; or</li>
          <li>Any other content Vesela may process.</li>
        </ul>
        <p>
          You may not attempt to cause Vesela to follow instructions contained in untrusted content where those instructions are intended to override user intent, extract information, invoke tools improperly, or bypass safeguards.
        </p>

        <h4>D. Memory Poisoning and Persistent Manipulation</h4>
        <p>
          You may not intentionally corrupt, poison, manipulate, or exploit any memory, personalization, profile, retrieval, or conversation-continuity feature.
        </p>
        <p>Prohibited conduct includes attempting to:</p>
        <ul>
          <li>Store hidden malicious instructions;</li>
          <li>Cause unauthorized instructions to persist across conversations;</li>
          <li>Alter Vesela’s behavior for another user;</li>
          <li>Insert false security permissions or administrator status;</li>
          <li>Cause Vesela to retrieve or reveal unrelated private information; or</li>
          <li>Use memory functionality as a mechanism for prompt injection or unauthorized control.</li>
        </ul>

        <h4>E. Model, Data, and Capability Extraction</h4>
        <p>
          You may not use the Services to extract, approximate, clone, reproduce, or reverse engineer:
        </p>
        <ul>
          <li>Model weights or parameters;</li>
          <li>Model architecture;</li>
          <li>Training data;</li>
          <li>Fine-tuning data;</li>
          <li>Preference data;</li>
          <li>Evaluation datasets;</li>
          <li>Safety datasets;</li>
          <li>Proprietary conversation examples;</li>
          <li>Nonpublic capabilities;</li>
          <li>Internal scoring systems;</li>
          <li>System prompts;</li>
          <li>Behavioral policies; or</li>
          <li>Other proprietary components.</li>
        </ul>
        <p>
          You may not systematically collect inputs and outputs to train, fine-tune, distill, benchmark, replicate, or improve a competing artificial-intelligence model or service without Gray Sky AI’s prior written authorization.
        </p>

        <h4>F. Automated Probing and Unauthorized Testing</h4>
        <p>
          You may not use bots, scripts, crawlers, scrapers, spiders, automated agents, headless browsers, fuzzers, scanners, or other automated processes to access or test the Services without written authorization.
        </p>
        <p>This includes automated attempts to:</p>
        <ul>
          <li>Enumerate accounts, endpoints, or identifiers;</li>
          <li>Discover vulnerabilities;</li>
          <li>Map model boundaries;</li>
          <li>measure safety thresholds;</li>
          <li>Generate large-scale prompt variations;</li>
          <li>Harvest outputs;</li>
          <li>Circumvent request or token limits;</li>
          <li>Avoid subscription restrictions;</li>
          <li>Evade abuse detection;</li>
          <li>Repeatedly test prohibited prompts; or</li>
          <li>Impose unreasonable loads on the Services.</li>
        </ul>

        <h4>G. Unauthorized Access and Data Exfiltration</h4>
        <p>You may not attempt to:</p>
        <ul>
          <li>Access another user’s account or conversations;</li>
          <li>Obtain another user’s personal information;</li>
          <li>Cross account or organizational boundaries;</li>
          <li>Escalate permissions;</li>
          <li>Exploit authentication or authorization weaknesses;</li>
          <li>Extract information from logs, caches, databases, connected services, or internal tools;</li>
          <li>Cause Vesela to disclose information from another conversation;</li>
          <li>Intercept communications;</li>
          <li>Crack passwords or encryption;</li>
          <li>Introduce malware or malicious files; or</li>
          <li>Obtain access to systems, data, or functionality not intentionally made available to you.</li>
        </ul>

        <h4>H. Reverse Engineering and Service Replication</h4>
        <p>Except to the limited extent a restriction is prohibited by applicable law, you may not:</p>
        <ul>
          <li>Decompile, disassemble, reverse engineer, or attempt to derive source code;</li>
          <li>Reconstruct backend systems or internal logic;</li>
          <li>Copy the design, operation, or nonpublic behavior of the Services;</li>
          <li>Create a substantially similar or derivative service using unauthorized access to Vesela;</li>
          <li>Bypass technical protection measures;</li>
          <li>Modify the application;</li>
          <li>Remove ownership or security notices; or</li>
          <li>Interfere with software-integrity controls.</li>
        </ul>

        <h4>I. Circumvention of Operational Restrictions</h4>
        <p>You may not evade or bypass:</p>
        <ul>
          <li>Rate limits;</li>
          <li>Usage limits;</li>
          <li>Subscription requirements;</li>
          <li>Account suspensions;</li>
          <li>geographic restrictions;</li>
          <li>Age restrictions;</li>
          <li>Access controls;</li>
          <li>Content restrictions;</li>
          <li>Moderation actions;</li>
          <li>Device restrictions;</li>
          <li>Authentication requirements; or</li>
          <li>Other technical or contractual limitations.</li>
        </ul>
        <p>
          Creating multiple accounts, rotating credentials, using intermediaries, manipulating network identifiers, or directing another person to evade a restriction is also prohibited.
        </p>

        <h3>16. Responsible Security Reporting</h3>
        <p>
          If you believe you have discovered a security vulnerability, privacy issue, or other technical weakness, do not exploit it, access information beyond what is necessary to describe the issue, or disclose it publicly before Gray Sky AI has had a reasonable opportunity to investigate.
        </p>
        <p>Report suspected vulnerabilities to:</p>
        <p>
          <strong>Security Contact:</strong> <a href="mailto:support@grayskyai.com">support@grayskyai.com</a>
        </p>
        <p>
          Submitting a vulnerability report does not authorize continued testing or exempt conduct from these Terms. Any security research involving the Services requires prior written authorization unless Gray Sky AI has published a separate vulnerability-disclosure or safe-harbor policy expressly permitting the activity.
        </p>

        <h3>17. User Content</h3>
        <p>
          “User Content” includes messages, documents, images, files, feedback, and other material you submit through the Services.
        </p>
        <p>You retain whatever ownership rights you may have in your User Content.</p>
        <p>
          You grant Gray Sky AI a limited license to host, store, reproduce, transmit, process, modify, and display User Content only as reasonably necessary to:
        </p>
        <ul>
          <li>Operate the Services;</li>
          <li>Generate requested outputs;</li>
          <li>Provide memory or personalization features you enable;</li>
          <li>Maintain security;</li>
          <li>Diagnose technical issues;</li>
          <li>Comply with law; and</li>
          <li>Perform other uses disclosed in the Privacy Policy.</li>
        </ul>
        <p>
          You represent that you have all rights and permissions necessary to submit the User Content and permit its processing.
        </p>
        <p>
          Do not submit information subject to legal, professional, fiduciary, contractual, or confidentiality restrictions unless you are authorized to do so and the relevant version of the Services is appropriate for that information.
        </p>

        <h3>18. Generated Output</h3>
        <p>Responses generated by Vesela are referred to as “Output.”</p>
        <p>
          Output may be novel, inaccurate, incomplete, or similar to content generated for another user. Artificial-intelligence systems may produce the same or similar output in response to different users or inputs.
        </p>
        <p>
          Subject to these Terms and applicable law, Gray Sky AI does not claim ownership of any rights you may acquire in Output generated specifically in response to your User Content.
        </p>
        <p>You are responsible for:</p>
        <ul>
          <li>Reviewing Output before using or sharing it;</li>
          <li>Verifying factual claims;</li>
          <li>Obtaining professional review where appropriate;</li>
          <li>Ensuring that your use does not violate law or another person’s rights;</li>
          <li>Providing appropriate disclosure when AI involvement is material; and</li>
          <li>Determining whether Output is suitable for your intended purpose.</li>
        </ul>
        <p>
          You may not represent that Output was authored, approved, certified, or issued by Gray Sky AI unless Gray Sky AI has expressly agreed in writing.
        </p>

        <h3>19. Intellectual Property</h3>
        <p>
          The Services, including their software, interfaces, branding, designs, logos, features, documentation, prompts, methods, model configurations, and proprietary technology, are owned by Gray Sky AI or its licensors and are protected by intellectual-property and other laws.
        </p>
        <p>
          Except for the limited right to use the Services under these Terms, no license or ownership interest is transferred to you.
        </p>
        <p>
          “Gray Sky AI,” “Vesela,” associated logos, and related branding may not be used without written permission.
        </p>

        <h3>20. Feedback</h3>
        <p>
          If you voluntarily submit suggestions, ideas, feature requests, or other feedback, you grant Gray Sky AI a worldwide, perpetual, irrevocable, royalty-free right to use that feedback without restriction or compensation.
        </p>
        <p>
          This section does not transfer ownership of your private conversation content merely because it contains an opinion or idea.
        </p>

        <h3>21. Subscriptions, Billing, and Cancellation</h3>
        <p>Certain features may require a paid subscription.</p>
        <p>
          By purchasing a subscription, you authorize the applicable payment provider to charge the disclosed fees, taxes, and recurring amounts using your selected payment method.
        </p>
        <p>Unless otherwise stated at purchase:</p>
        <ul>
          <li>Subscriptions renew automatically until canceled;</li>
          <li>Cancellation prevents future renewal but does not ordinarily provide a refund for the current billing period;</li>
          <li>Access may continue through the end of the paid period;</li>
          <li>Prices and available features may change upon advance notice where required by law; and</li>
          <li>Purchases made through Apple, Google, or another third-party platform are also governed by that platform’s billing and refund rules.</li>
        </ul>
        <p>
          You are responsible for canceling through the platform through which you purchased the subscription.
        </p>
        <p>Nothing in this section limits refund or cancellation rights that cannot lawfully be waived.</p>

        <h3>22. Suspension and Termination</h3>
        <p>
          Gray Sky AI may investigate suspected violations and may restrict, suspend, or terminate access when it reasonably believes that:
        </p>
        <ul>
          <li>These Terms have been violated;</li>
          <li>An account presents a security, legal, operational, or safety risk;</li>
          <li>Payment is overdue or reversed;</li>
          <li>Use could harm another person, Gray Sky AI, or the Services;</li>
          <li>Continued access could expose Gray Sky AI to liability;</li>
          <li>The Services are being attacked, exploited, or reverse engineered; or</li>
          <li>Suspension or termination is required by law.</li>
        </ul>
        <p>
          Serious security violations, jailbreak campaigns, system-prompt extraction attempts, unauthorized automated testing, data-exfiltration attempts, or repeated efforts to circumvent restrictions may result in immediate termination without prior notice.
        </p>
        <p>
          Gray Sky AI may preserve relevant records and cooperate with lawful investigations.
        </p>
        <p>
          You may discontinue using the Services at any time. Account deletion and subscription cancellation are separate actions unless expressly stated otherwise.
        </p>

        <h3>23. Third-Party Services</h3>
        <p>
          The Services may depend on or interact with app stores, payment processors, hosting providers, artificial-intelligence providers, analytics services, communication services, connected tools, websites, or other third parties.
        </p>
        <p>
          Gray Sky AI is not responsible for third-party services that it does not control. Your use of a third-party service may be governed by separate terms and privacy policies.
        </p>
        <p>
          The availability or integration of a third-party service does not constitute an endorsement or guarantee.
        </p>

        <h3>24. Service Changes and Availability</h3>
        <p>Gray Sky AI may add, modify, suspend, or discontinue features at any time.</p>
        <p>
          The Services may be unavailable because of maintenance, network failures, security incidents, provider outages, legal restrictions, software errors, or other circumstances.
        </p>
        <p>
          Gray Sky AI does not guarantee uninterrupted availability, retention of every conversation, compatibility with every device, or continued availability of any particular model, feature, response style, or subscription plan.
        </p>

        <h3>25. Disclaimer of Warranties</h3>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICES AND ALL OUTPUT ARE PROVIDED “AS IS” AND “AS AVAILABLE.”
        </p>
        <p>
          GRAY SKY AI DISCLAIMS ALL EXPRESS, IMPLIED, AND STATUTORY WARRANTIES, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, RELIABILITY, AVAILABILITY, SECURITY, AND ERROR-FREE OPERATION.
        </p>
        <p>GRAY SKY AI DOES NOT WARRANT THAT:</p>
        <ul>
          <li>THE SERVICES WILL MEET YOUR EXPECTATIONS;</li>
          <li>OUTPUT WILL BE ACCURATE OR APPROPRIATE;</li>
          <li>THE SERVICES WILL IDENTIFY A CRISIS OR SAFETY CONCERN;</li>
          <li>USE OF THE SERVICES WILL PRODUCE A PARTICULAR PERSONAL, EMOTIONAL, PROFESSIONAL, OR HEALTH-RELATED RESULT;</li>
          <li>DATA WILL NEVER BE LOST OR EXPOSED; OR</li>
          <li>DEFECTS WILL ALWAYS BE CORRECTED.</li>
        </ul>
        <p>Some jurisdictions do not allow certain warranty disclaimers, so portions of this section may not apply to you.</p>

        <h3>26. Limitation of Liability</h3>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, GRAY SKY AI AND ITS OWNERS, OFFICERS, EMPLOYEES, CONTRACTORS, AFFILIATES, LICENSORS, AND SERVICE PROVIDERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OPPORTUNITY, OR BUSINESS INTERRUPTION.
        </p>
        <p>THIS LIMITATION APPLIES TO CLAIMS ARISING FROM OR RELATING TO:</p>
        <ul>
          <li>USE OF OR INABILITY TO USE THE SERVICES;</li>
          <li>RELIANCE ON OUTPUT;</li>
          <li>PERSONAL, PROFESSIONAL, MEDICAL, PSYCHOLOGICAL, LEGAL, OR FINANCIAL DECISIONS;</li>
          <li>FAILURE TO IDENTIFY OR RESPOND TO AN EMERGENCY;</li>
          <li>UNAUTHORIZED ACCESS OR SECURITY INCIDENTS;</li>
          <li>LOSS OR CORRUPTION OF DATA;</li>
          <li>THIRD-PARTY CONDUCT OR SERVICES; OR</li>
          <li>SUSPENSION, MODIFICATION, OR TERMINATION OF THE SERVICES.</li>
        </ul>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, GRAY SKY AI’S TOTAL LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE SERVICES WILL NOT EXCEED THE GREATER OF:
        </p>
        <ul>
          <li>THE AMOUNT YOU PAID TO GRAY SKY AI FOR THE SERVICES DURING THE SIX MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM; OR</li>
          <li>ONE HUNDRED U.S. DOLLARS ($100).</li>
        </ul>
        <p>Nothing in these Terms excludes liability that cannot lawfully be excluded or limited.</p>

        <h3>27. Indemnification</h3>
        <p>
          To the extent permitted by law, you agree to defend, indemnify, and hold harmless Gray Sky AI and its owners, officers, employees, contractors, affiliates, licensors, and service providers from claims, losses, liabilities, damages, judgments, costs, and reasonable attorneys’ fees arising from:
        </p>
        <ul>
          <li>Your violation of these Terms;</li>
          <li>Your unlawful or unauthorized use of the Services;</li>
          <li>Your User Content;</li>
          <li>Your use or distribution of Output;</li>
          <li>Your violation of another person’s rights; or</li>
          <li>Your adversarial attack, security circumvention, automated extraction, or unauthorized access involving the Services.</li>
        </ul>
        <p>
          Gray Sky AI may assume control of the defense of a matter subject to indemnification, and you agree to cooperate reasonably with that defense.
        </p>

        <h3>28. Changes to These Terms</h3>
        <p>Gray Sky AI may revise these Terms from time to time.</p>
        <p>
          Material changes will become effective on the date stated in the revised Terms or after any notice required by applicable law. Your continued use of the Services after the effective date constitutes acceptance of the revised Terms.
        </p>
        <p>
          If you do not agree to a revision, you must discontinue use of the Services and cancel any recurring subscription.
        </p>

        <h3>29. Governing Law and Disputes</h3>
        <p>
          These Terms are governed by the laws of the State of Texas, without regard to conflict-of-law principles, except where applicable consumer law requires otherwise.
        </p>
        <p>
          Any judicial proceeding that is not subject to a separately agreed arbitration provision must be brought in a court of competent jurisdiction located in Tarrant, Texas, unless applicable law gives you the right to bring the proceeding elsewhere.
        </p>
        <p>
          Before filing a formal claim, the parties agree to make a good-faith effort to resolve the dispute informally by providing written notice describing the dispute and requested resolution.
        </p>
        <p>
          <strong>Legal Notice Contact:</strong> <a href="mailto:support@grayskyai.com">support@grayskyai.com</a>
        </p>
        <p>
          Any arbitration provision, class-action waiver, jury-trial waiver, or shortened limitations period should be presented separately and reviewed by qualified counsel before implementation.
        </p>

        <h3>30. Electronic Communications</h3>
        <p>
          You consent to receive agreements, notices, disclosures, receipts, and other communications electronically where permitted by law.
        </p>
        <p>
          You are responsible for maintaining a current email address and reviewing communications associated with your account.
        </p>

        <h3>31. Assignment</h3>
        <p>You may not assign or transfer your rights under these Terms without Gray Sky AI’s written consent.</p>
        <p>
          Gray Sky AI may assign these Terms in connection with a merger, acquisition, reorganization, sale of assets, financing, corporate restructuring, or transfer of the Services.
        </p>

        <h3>32. Severability and Waiver</h3>
        <p>
          If any provision of these Terms is found unenforceable, that provision will be enforced to the maximum extent permitted or severed, and the remaining provisions will remain effective.
        </p>
        <p>A failure to enforce a provision is not a waiver of the right to enforce it later.</p>

        <h3>33. Entire Agreement</h3>
        <p>
          These Terms, the Privacy Policy, any applicable subscription terms, and any additional terms expressly presented for a particular feature constitute the complete agreement between you and Gray Sky AI concerning the Services.
        </p>
        <p>
          If separate enterprise, organizational, developer, or Business Associate Agreement terms apply, those terms will control to the extent of a direct conflict concerning the applicable service.
        </p>

        <h3>34. Contact Information</h3>
        <p>Questions about the Services or these Terms may be directed to:</p>
        <p>
          <strong>Gray Sky AI LLC</strong><br />
          <a href="mailto:support@grayskyai.com">support@grayskyai.com</a>
        </p>
        <p>
          Privacy questions and requests may be directed to:<br />
          <strong>Privacy Contact:</strong> <a href="mailto:support@grayskyai.com">support@grayskyai.com</a>
        </p>
        <p>
          Security vulnerabilities may be reported to:<br />
          <strong>Security Contact:</strong> <a href="mailto:support@grayskyai.com">support@grayskyai.com</a>
        </p>

        <h3>35. Acknowledgment</h3>
        <p>
          By creating an account, purchasing a subscription, clicking an acceptance button, signing below, or continuing to use the Services, you acknowledge that:
        </p>
        <ul>
          <li>You have read and understood these Terms;</li>
          <li>You understand that Vesela is an artificial-intelligence system;</li>
          <li>You understand that Vesela is not a medical, mental-health, emergency, or licensed professional service;</li>
          <li>You understand that the Services are not continuously monitored;</li>
          <li>You accept responsibility for evaluating and verifying Output;</li>
          <li>You agree not to conduct jailbreaks, system-prompt extraction, prompt injection, memory poisoning, unauthorized security testing, model extraction, scraping, reverse engineering, or other prohibited adversarial activity; and</li>
          <li>You agree to be bound by these Terms and the Privacy Policy.</li>
        </ul>
      </Box>
    </SettingSection>
  );
};

export default TermsContent;
