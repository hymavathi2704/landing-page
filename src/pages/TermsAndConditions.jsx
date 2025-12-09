import React from 'react';
import LegalPage from './LegalPage';

const content = (
  <>
    <p>Welcome to Equibudx ("Platform"), an online marketplace operated by Startworks Technologies Private Limited, a company incorporated under the laws of India, with its registered office at STARTWORKS TECHNOLOGIES PRIVATE LIMITED, PLOT NO. 19-20, Floor 2, HILL VIEW PARADISE, MADHURAWADA, Madhurawada, Visakhapatnam, Andhra Pradesh, 530048, India ("we," "us," or "our"). These Terms and Conditions ("Terms") govern your access to and use of the Platform, including the website [www.platformname.com] and any associated mobile applications (collectively, the "Services"). By accessing, browsing, or using the Services, you ("User," "you," or "your") agree to be bound by these Terms, our Privacy Policy, and any other applicable policies. If you do not agree, you must not use the Services.</p>
    <p>These Terms constitute a binding legal agreement between you and STARTWORKS TECHNOLOGIES PRIVATE LIMITED (CIN: U72200AP2022PTC123413) The Platform facilitates connections between third-party service providers ("Service Providers") who list and offer services (e.g., event tickets, bookings for experiences, workshops, consultations, or other experiential services) and buyers/bookers ("Buyers") who search, select, and purchase such services. We act strictly as an intermediary and technology facilitator, and we do not provide, endorse, or guarantee any services listed on the Platform. Our role is limited to providing the technological infrastructure for listings, bookings, and payments; all contractual obligations for service delivery rest solely between Buyers and Service Providers.</p>
    
    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">1. Definitions and Interpretation</h2>
    
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">1.1 Definitions.</h3>
    <p>In these Terms, unless the context otherwise requires:</p>
    <ul className="list-disc ml-6 space-y-2">
      <li>"Booking" means a confirmed reservation or purchase of a service made by a Buyer through the Platform, including any associated confirmations, vouchers, or e-tickets.</li>
      <li>"Buyer" means a User who purchases or books services from a Service Provider via the Platform.</li>
      <li>"Cashfree" means Cashfree Payments India Pvt. Ltd., the third-party payment gateway processor integrated with the Platform.</li>
      <li>"Commission" means any fee charged by the Platform to Service Providers for facilitating Bookings, currently set at zero percent (0%) but subject to change as provided herein.</li>
      <li>"Confidential Information" means any non-public information disclosed by one party to the other, including business strategies, user data, and technical details, excluding information that is publicly available or independently developed.</li>
      <li>"Platform" has the meaning given in the preamble.</li>
      <li>"RBI" means the Reserve Bank of India.</li>
      <li>"Refund" means any repayment of amounts paid by a Buyer for a Booking, subject to the policies herein, and excluding any non-refundable processing fees.</li>
      <li>"Service Provider" means a third-party User who lists and offers services on the Platform, including individuals, businesses, or entities duly registered where required.</li>
      <li>"Services" has the meaning given in the preamble.</li>
      <li>"User" means any individual or entity accessing the Services, including Buyers and Service Providers.</li>
      <li>"Verification Documents" means government-issued identification (e.g., Aadhaar, PAN, passport), business licenses, GST registration, or other proofs required for account creation or verification.</li>
    </ul>

    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">1.2 Interpretation.</h3>
    <p>Headings are for convenience only and do not affect interpretation. Words importing the singular include the plural and vice versa. References to statutes include amendments, re-enactments, and subordinate legislation. In case of conflict between these Terms and any other policy (e.g., specific service terms or refund policy), these Terms prevail unless expressly stated otherwise. Any reference to "including" or "for example" shall be construed as illustrative and not exhaustive.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">2. Acceptance of Terms</h2>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">2.1</h3>
    <p>By registering an account, making a Booking, listing a service, submitting content, or otherwise using the Services, you represent that you have read, understood, and agree to these Terms. If you are using the Services on behalf of an entity, you warrant that you have the full legal authority to bind that entity to these Terms and that the entity meets all eligibility criteria.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">2.2</h3>
    <p>These Terms are effective from the date of your first use and continue until terminated as provided herein. We may require affirmative acceptance (e.g., via checkbox) for certain features.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">2.3</h3>
    <p>If you are a minor or lack capacity, you must have parental or guardian consent, and we disclaim liability for any unauthorized use.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">3. Platform as Intermediary / No Agency Relationship</h2>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">3.1 Intermediary Role.</h3>
    <p>The Platform acts solely as a technology-enabled marketplace and intermediary to facilitate interactions between Users. We do not own, operate, manage, or control any services listed by Service Providers, nor do we provide any services ourselves. All services are provided directly by independent third-party Service Providers. We merely host listings and process payments on a pass-through basis.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">3.2 No Agency or Partnership.</h3>
    <p>No agency, partnership, joint venture, employee-employer, or franchisor-franchisee relationship is created between us and any User by these Terms. Users act independently, and we are not liable for any acts, omissions, representations, warranties, or obligations of Service Providers or Buyers. Service Providers are not our representatives, and their actions do not bind us.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">3.3 Intermediary Liability Protection.</h3>
    <p>As an intermediary under Section 2(1)(w) of the Information Technology Act, 2000 ("IT Act"), and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, we are not liable for any third-party content, including service listings, user-generated content, or communications, unless we have actual knowledge of illegality (e.g., via valid court order or government notification) and fail to act expeditiously to remove or disable access thereto. We implement proactive monitoring where feasible but rely on user reports for efficiency.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">4. User Eligibility & Account Creation</h2>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">4.1 Eligibility.</h3>
    <p>You must be at least 18 years old, reside in India or a jurisdiction where use of the Services is legal, and capable of forming a binding contract under Indian law. Service Providers must be legally authorized to offer services in their jurisdiction, including holding valid business registrations if applicable. By using the Services, you represent that you meet these criteria, are not a politically exposed person under anti-money laundering laws, and are not barred from using the Services under applicable law (e.g., sanctions lists).</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">4.2 Account Creation.</h3>
    <p>To access certain features, you must create an account by providing accurate, complete, and verifiable information, including email, phone number (verified via OTP), and Verification Documents where required (e.g., for Service Providers). You agree to:</p>
    <ul className="list-disc ml-6 space-y-2">
      <li>Keep your account credentials (username, password) confidential and not share them with third parties.</li>
      <li>Notify us immediately of any unauthorized use or security breach via [support email].</li>
      <li>Provide truthful, current, and complete information during registration and at all times.</li>
      <li>Update your information promptly upon any changes (e.g., address, contact details).</li>
    </ul>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">4.3</h3>
    <p>We reserve the right to verify accounts using third-party services (e.g., KYC providers), request additional documents, reject applications, or suspend/terminate accounts for non-compliance, suspicious activity, or at our discretion. Multiple accounts per User are prohibited.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">4.4 Account Security.</h3>
    <p>You are responsible for all activities under your account. We may implement multi-factor authentication and are not liable for losses from compromised credentials unless due to our gross negligence.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">5. Service Provider Obligations</h2>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">5.1 Accurate Listing.</h3>
    <p>Service Providers must ensure all listings, descriptions, prices (inclusive of taxes), availability, images, terms (e.g., cancellation windows), and policies are accurate, complete, up-to-date, and not misleading. Listings must include clear disclosures on service limitations, age restrictions, or prerequisites. Prices must comply with fair trade practices under the Consumer Protection Act, 2019.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">5.2 Legal Compliance.</h3>
    <p>Service Providers warrant that they hold all necessary licenses, permits, insurances (e.g., public liability insurance), and registrations (e.g., GSTIN for taxable services) to offer services and will indemnify us against any claims arising from non-compliance, including fines, penalties, or regulatory actions.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">5.3 No Fraudulent Services.</h3>
    <p>Service Providers must not list counterfeit, illegal, unsafe, or fraudulent services (e.g., services violating intellectual property rights or promoting hate/discrimination). They must deliver services as promised, including honoring Bookings, providing access (e.g., e-tickets), and addressing complaints promptly.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">5.4 Performance Standards.</h3>
    <p>Service Providers agree to:</p>
    <ul className="list-disc ml-6 space-y-2">
      <li>Respond to Buyer inquiries and support requests within 24 hours.</li>
      <li>Maintain high service quality, including hygiene, safety, and professionalism standards.</li>
      <li>Cooperte fully in dispute resolution, providing evidence (e.g., attendance logs) as needed.</li>
      <li>Collect and remit applicable taxes (e.g., GST) on their earnings and provide us with necessary invoices.</li>
    </ul>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">5.5 Listing Management.</h3>
    <p>Service Providers must monitor and update listings for real-time availability and remove outdated ones. We may edit listings for clarity or compliance without notice.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">6. Buyer/User Obligations</h2>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">6.1</h3>
    <p>Buyers must provide accurate, complete information for Bookings (e.g., correct attendee details) and pay for services as agreed, including any applicable taxes or fees.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">6.2</h3>
    <p>Users must not misuse the Platform, including:</p>
    <ul className="list-disc ml-6 space-y-2">
      <li>Posting false, manipulated, or incentivized reviews.</li>
      <li>Harassing, defaming, or discriminating against other Users or Service Providers.</li>
      <li>Interfering with operations (e.g., scraping data, using scripts).</li>
      <li>Reselling Bookings without permission or engaging in scalping.</li>
    </ul>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">6.3</h3>
    <p>All Users agree to comply with these Terms, applicable laws (e.g., no circumvention of geo-blocks), and any specific service terms displayed during Booking. Buyers must attend services responsibly and adhere to venue rules.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">6.4 Feedback and Ratings.</h3>
    <p>Users agree to provide honest feedback post-Booking. We may moderate reviews for compliance but do not endorse their accuracy.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">7. Booking, Payment & Cashfree Payment Gateway Terms</h2>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">7.1 Booking Process.</h3>
    <p>Buyers may search, select, and confirm Bookings via the Platform, including optional add-ons (e.g., VIP access). Upon confirmation and payment, a binding contract is formed directly between the Buyer and Service Provider, subject to these Terms. We send confirmations via email/SMS but are not party to the contract.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">7.2 Payments.</h3>
    <p>All payments for Bookings shall be processed securely through Cashfree, in compliance with RBI guidelines on payment aggregators, PCI DSS v4.0 standards, and other cybersecurity norms. We do not store, process, access, or retain any card, banking, UPI, wallet, or financial data; all such sensitive data is tokenized and handled exclusively by Cashfree in a PCI-compliant environment.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">7.3 Cashfree Terms.</h3>
    <p>By using the Services, you acknowledge and agree to Cashfree's terms of service, privacy policy, refund policies, and any applicable RBI regulations (e.g., on two-factor authentication). Cashfree acts as the sole payment processor, and any payment-related disputes (e.g., failed transactions) must be resolved directly with Cashfree or your bank where relevant. We facilitate escalations but bear no responsibility.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">7.4 RBI Compliance.</h3>
    <p>The Platform and its payment processes comply with RBI's Master Directions on Payment Aggregators (as amended), Guidelines on Regulation of Payment Aggregators (2020), and related frameworks. Users agree not to use the Services for money laundering, terrorist financing, evasion of taxes, or other prohibited activities under the Prevention of Money Laundering Act, 2002, or Foreign Exchange Management Act, 1999. We report suspicious transactions to authorities as required.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">7.5 Taxes and Fees.</h3>
    <p>All prices displayed include applicable taxes unless stated otherwise. Buyers are responsible for any additional levies. Currently, no Commission is charged to Service Providers or Buyers. However, we reserve the right to introduce fees (e.g., convenience charges) with 30 days' prior notice via email, in-app notification, or Platform update. Fees, if introduced, will be disclosed clearly before any Booking and may vary by service type.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">7.6 Payment Withholding and Settlement.</h3>
    <p>We may withhold payments to Service Providers in cases of disputes, fraud allegations, chargebacks, non-delivery, or regulatory holds, pending investigation and resolution (up to 90 days). Settlements occur weekly/monthly via bank transfer, net of any deductions (e.g., refunds, fees). Service Providers must provide accurate bank details and tax forms (e.g., Form 16A).</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">8. Cancellation & Refund Policy</h2>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">8.1 Buyer-Initiated Cancellation Policy.</h3>
    <p>Cancellations initiated by Buyers shall be subject to the following tiered policy, which supersedes any conflicting Service Provider terms unless more favorable to the Buyer. All cancellations must be requested via the Platform interface prior to the applicable deadline. Service Providers are required to honor these timelines and process eligible Refunds as outlined herein. The policy is as follows:</p>
    <ul className="list-disc ml-6 space-y-2">
      <li>Cancellations within 24 hours of Booking: Eligible for a 100% Refund of the Booking amount (excluding any non-refundable processing fees up to 2%, as disclosed at checkout).</li>
      <li>Cancellations up to 24 hours before the Service Fulfillment Date: No Refund (0% of the Booking amount).</li>
      <li>Cancellations after 24 hours from Booking but more than 24 hours before the Service Fulfillment Date: Eligible for a 50% Refund of the Booking amount (excluding non-refundable fees).</li>
      <li>Last-Minute Cancellations (within 24 hours of the Service Fulfillment Date) or No-Shows: No Refund. Buyers are encouraged to reschedule where possible, subject to Service Provider availability and any applicable fees.</li>
    </ul>
    <p>Buyers must provide a valid reason for cancellation (e.g., personal emergency) to qualify for the highest refund tier; otherwise, standard penalties apply. Repeated cancellations by a Buyer may result in account restrictions or suspension at our discretion.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">8.2 Service Provider-Initiated Cancellation.</h3>
    <p>In the event a Service Provider cancels a Booking due to unavailability, operational issues, safety conditions, adverse weather (for outdoor events), or any other justified reason beyond their control, the affected Buyer shall be entitled to, at the Service Provider's expense:</p>
    <ul className="list-disc ml-6 space-y-2">
      <li>A full (100%) Refund of the Booking amount (processed via Cashfree); or</li>
      <li>Free rescheduling to an equivalent or comparable service date/time, subject to availability.</li>
    </ul>
    <p>Service Providers must notify the Platform and the Buyer via the Platform messaging system at least 24 hours prior to the Service Fulfillment Date (or as soon as practicable in emergencies). Failure to provide timely notice may result in penalties, including withholding of payouts or account suspension. We reserve the right to facilitate alternative Service Providers in such cases to minimize disruption.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">8.3 Refund Processing Timeline.</h3>
    <p>All eligible Refunds, whether Buyer- or Service Provider-initiated, shall be processed securely through Cashfree to the original payment method (e.g., credit/debit card, UPI, wallet) within 7-10 business days from the date of approval. This timeline is subject to Cashfree's processing standards, bank verification, and any applicable regulatory holds. Refunds will include any applicable taxes remitted but exclude non-refundable elements such as Platform processing fees (up to 2%) or convenience charges. Buyers will receive confirmation via email/SMS upon initiation and completion. Any delays beyond 10 business days must be escalated to Cashfree support; we facilitate but do not guarantee resolution timelines.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">8.4 Force Majeure Event Cancellations.</h3>
    <p>If a Booking is disrupted, postponed, or canceled due to a Force Majeure Event (as defined in Section 16, including but not limited to severe weather, government orders/restrictions, natural disasters, pandemics, or emergencies beyond the control of the Platform, Service Provider, or Buyer), the Platform may, at its sole discretion and in consultation with the Service Provider, offer the affected Buyer one or more of the following remedies:</p>
    <ul className="list-disc ml-6 space-y-2">
      <li>A full (100%) Refund of the Booking amount; or</li>
      <li>Complimentary rescheduling to a mutually agreed alternative date/time, subject to service availability; or</li>
      <li>Credit equivalent to the Booking value for future use on the Platform (valid for 6 months from issuance).</li>
    </ul>
    <p>We will notify affected parties via email/SMS as soon as practicable and provide reasonable evidence of the Force Majeure Event. No additional compensation (e.g., for incidental expenses) shall be payable unless required by applicable consumer protection laws. In such scenarios, the direct contract between Buyer and Service Provider remains subject to these Terms, and neither party shall claim breach against the other or the Platform.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">9. Platform Rights to Refuse, Cancel Bookings, or Suspend Accounts</h2>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">9.1</h3>
    <p>We may, at our sole discretion and without prior notice or liability, refuse new accounts, cancel or modify existing Bookings, suspend or terminate accounts, or remove listings if we suspect violations of these Terms, fraud, security risks, legal non-compliance, or harm to the Platform's integrity (e.g., excessive disputes).</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">9.2</h3>
    <p>Suspended or terminated Users may appeal in writing via [contact email] within 7 days, providing supporting evidence. Reinstatement is at our discretion and not guaranteed. Upon termination, all rights cease, and outstanding payments may be forfeited.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">9.3</h3>
    <p>We may also delist Service Providers with low ratings (e.g., below 3.5/5) or high cancellation rates after warning.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">10. Data Protection & Privacy Compliance</h2>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">10.1</h3>
    <p>We collect and process personal data (e.g., contact details, payment metadata, location) in strict accordance with our Privacy Policy, the IT Act, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, the Digital Personal Data Protection Act, 2023 ("DPDP Act"), and other applicable laws (e.g., GDPR for cross-border data).</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">10.2</h3>
    <p>Users consent to data processing for Platform operations (e.g., Booking fulfillment, fraud detection), marketing (with opt-out via settings or unsubscribe), analytics, and legal compliance. We use cookies, pixels, and similar technologies for functionality and personalization; see our Cookie Policy for details. We implement industry-standard security measures (e.g., encryption, access controls) but disclaim liability for breaches not caused by our gross negligence or willful misconduct.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">10.3</h3>
    <p>Service Providers must obtain explicit consents for any Buyer data shared via the Platform (e.g., for service delivery) and comply with data minimization principles. Data retention is limited to necessary periods (e.g., 7 years for financial records). Users have rights to access, rectify, erase, or port data via [privacy email].</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">10.4</h3>
    <p>Cross-border data transfers (if any) are safeguarded via standard contractual clauses.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">11. Intellectual Property Rights</h2>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">11.1 Our Rights.</h3>
    <p>All Platform content, including text, graphics, logos, trademarks, software, APIs, databases, and designs (collectively, "Platform IP"), are our exclusive property or licensed to us under Indian and international laws. Users are granted a limited, revocable, non-transferable, non-sublicensable license to access and use the Services for personal, non-commercial purposes in accordance with these Terms.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">11.2 User Content.</h3>
    <p>By submitting content (e.g., listings, reviews, photos), Users grant us a worldwide, perpetual, irrevocable, royalty-free, transferable license to use, reproduce, modify, distribute, display, and create derivative works for Platform operations, promotion, and enforcement. Users retain ownership but warrant they have all necessary rights (e.g., model releases for images) and that content does not infringe third-party rights.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">11.3 Infringement Claims.</h3>
    <p>Reports of infringement must be submitted to [DMCA email] with details (e.g., work infringed, evidence). We will respond expeditiously under the IT Act and DMCA safe harbor provisions, including takedown notices and counter-notices.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">11.4</h3>
    <p>Users must not reverse-engineer, decompile, or scrape Platform IP.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">12. Prohibited Uses / Fraud Prevention</h2>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">12.1</h3>
    <p>Prohibited activities include (without limitation):</p>
    <ul className="list-disc ml-6 space-y-2">
      <li>Posting illegal, defamatory, obscene, hateful, or infringing content.</li>
      <li>Engaging in fraud, scams, spam, phishing, or unauthorized data collection/harvesting.</li>
      <li>Interfering with Platform functionality (e.g., via bots, viruses, DDoS attacks, or excessive API calls).</li>
      <li>Violating laws on gambling, narcotics, weapons, child exploitation, or environmental harm.</li>
      <li>Using automated tools for bookings/reservations to circumvent limits.</li>
      <li>Promoting discriminatory practices based on race, gender, religion, or other protected characteristics.</li>
    </ul>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">12.2</h3>
    <p>We employ advanced fraud detection measures (e.g., Al monitoring, device fingerprinting) and reserve the right to share User data with law enforcement or partners for prevention. Violations may lead to immediate account termination, Booking cancellations, legal action, and reporting to authorities (e.g., cybercrime cells).</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">13. Disclaimer of Warranties for Third-Party Services</h2>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">13.1 As-Is Basis.</h3>
    <p>All third-party services, listings, and User interactions are provided "as is" and "as available" without any intervention from us. We disclaim all warranties, express, implied, statutory, or otherwise, including but not limited to merchantability, fitness for a particular purpose, title, non-infringement, and compatibility.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">13.2</h3>
    <p>We do not guarantee, represent, or warrant the service quality, availability, timeliness, completeness, safety, suitability, or outcomes. Services may involve risks (e.g., physical activities); Users assume all such risks and verify details independently. We are not responsible for User-to-User disputes or off-Platform interactions.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">14. Limitation of Liability</h2>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">14.1 Liability Cap.</h3>
    <p>To the fullest extent permitted by law, our total aggregate liability (including our affiliates, directors, officers, employees, agents, licensors, and contractors) to you or any other party for all claims, actions, suits, or proceedings arising out of or relating to these Terms, the Services, or any Booking (collectively, "Claims") shall be limited to the greater of (a) the total amount actually paid by you to us in the transaction or series of related transactions giving rise to the Claim, or (b) INR 1,000 (Indian Rupees One Thousand only). This cap applies per User per calendar year and excludes liability for gross negligence, willful misconduct, or fraud by us, which shall not be so limited.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">14.2 Specific Exclusions.</h3>
    <p>Notwithstanding anything to the contrary, we shall not be responsible or liable for:</p>
    <ul className="list-disc ml-6 space-y-2">
      <li>Any aspect of service quality, delivery, performance, delays, cancellations, overbookings, non-fulfillment, or failures by Service Providers or third parties.</li>
      <li>Personal injury, death, property damage, emotional distress, psychological harm, or any other losses or damages arising from, related to, or in connection with services, events, venues, User interactions, or off-Platform activities.</li>
      <li>Any disputes regarding Refunds, chargebacks, payment failures, transaction declines, currency fluctuations, or banking errors (which shall be resolved directly with Cashfree, your bank, or the relevant Service Provider).</li>
      <li>The accuracy, completeness, reliability, timeliness, or suitability of third-party content, listings, reviews, or communications, or any consequences of your reliance thereon.</li>
      <li>Loss or corruption of data, viruses, malware, cybersecurity incidents, service interruptions, or disruptions caused by third-party actions, internet connectivity issues, force majeure events, or user errors.</li>
      <li>Any indirect, incidental, consequential, punitive, exemplary, special, or foreseeable damages, even if advised of the possibility thereof.</li>
    </ul>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">14.3 Application of Limitations.</h3>
    <p>The exclusions and limitations in this Section 14 apply regardless of the legal or equitable theory of liability (including but not limited to contract, tort, negligence, strict liability, statutory duty, or restitution), whether known or unknown, anticipated or unforeseen, and irrespective of whether we have been advised of the possibility of such damages. These limitations are cumulative and do not operate to increase the total liability cap in Section 14.1. If any portion of this Section 14 is held unenforceable (e.g., due to public policy under Section 23 of the Indian Contract Act, 1872), the remaining provisions shall remain in full force, subject to the severability clause in Section 21.3.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">15. Indemnification</h2>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">15.1</h3>
    <p>Each User agrees to indemnify, defend (at our request), and hold us and our affiliates, directors, officers, employees, and agents harmless from and against all claims, actions, demands, losses, liabilities, damages, costs, and expenses (including reasonable attorneys' fees and court costs) arising out of or relating to:</p>
    <ul className="list-disc ml-6 space-y-2">
      <li>Their breach or violation of these Terms or any applicable law.</li>
      <li>Their use or misuse of the Services, including service provision, Bookings, or User Content.</li>
      <li>Violations of third-party rights (e.g., privacy, IP, publicity) or any User interactions.</li>
      <li>Any taxes, fines, or penalties imposed due to their non-compliance.</li>
    </ul>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">15.2</h3>
    <p>We reserve the right, at your expense, to assume the exclusive defense and control of any matter subject to indemnification, in which event you shall cooperate fully. Settlement requires your consent if it imposes liability on you.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">16. Force Majeure</h2>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">16.1</h3>
    <p>Neither party shall be liable for any delay or failure to perform obligations (except payment) due to events beyond its reasonable control, including but not limited to acts of God (e.g., earthquakes, floods), war, terrorism, riots, pandemics/epidemics, strikes, labor disputes, governmental actions/restrictions (e.g., lockdowns, bans), utility failures, or supplier disruptions ("Force Majeure Events").</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">16.2</h3>
    <p>The affected party must notify the other promptly in writing of the Force Majeure Event and take reasonable steps to mitigate impacts. Obligations resume as soon as practicable post-Event. If suspension exceeds 30 days, either party may terminate affected portions without liability.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">17. Governing Law and Jurisdiction</h2>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">17.1</h3>
    <p>These Terms and any disputes arising hereunder shall be governed exclusively by the laws of India, without regard to its conflict of laws principles.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">17.2</h3>
    <p>Subject to Section 18 (Arbitration), the courts in [e.g., Mumbai, Maharashtra] shall have exclusive jurisdiction over any non-arbitrable disputes.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">18. Arbitration Clause</h2>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">18.1</h3>
    <p>Any dispute, controversy, or claim arising out of, relating to, or in connection with these Terms, including its formation, validity, breach, or termination (each a "Dispute"), shall be resolved exclusively by binding arbitration under the Arbitration and Conciliation Act, 1996 (as amended), and its rules.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">18.2</h3>
    <p>The arbitration shall be conducted by a sole arbitrator appointed by [e.g., the Indian Council of Arbitration (ICA)] in accordance with ICA rules. The seat and venue of arbitration shall be [e.g., Mumbai, India], with proceedings conducted in English. The arbitrator's award shall be final, conclusive, and binding, enforceable in any court of competent jurisdiction.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">18.3</h3>
    <p>Users expressly waive any rights to class, collective, or representative actions, jury trials, or appeals except as permitted by law. Arbitration fees shall be borne equally unless the arbitrator awards otherwise. Emergency interim relief may be sought in courts if urgent.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">18.4</h3>
    <p>This clause survives termination of these Terms.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">19. Termination</h2>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">19.1 By User.</h3>
    <p>You may terminate your account at any time by contacting support@equibudx.com or deleting via settings. Upon termination, you remain liable for outstanding obligations (e.g., Refunds).</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">19.2 By Us.</h3>
    <p>We may terminate or suspend access immediately for cause (e.g., breach) or without cause upon notice. Post-termination, we may retain data for legal/compliance purposes.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">19.3</h3>
    <p>Sections surviving termination include 1, 3, 10-15, 17-20, and any accrued rights.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">20. Modification of Terms</h2>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">20.1</h3>
    <p>We may update these Terms at any time to reflect legal changes, business needs, or improvements by posting the revised version on the Platform with the updated "Last Updated" date. Your continued use of the Services after such posting constitutes acceptance of the modifications.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">20.2</h3>
    <p>For material changes (e.g., new fees, arbitration venue), we will provide at least 30 days' prior notice via email to your registered address, in-app alerts, or prominent Platform banners. If you object, you may terminate use before the changes take effect.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">21. Miscellaneous</h2>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">21.1 Assignment.</h3>
    <p>We may assign these Terms to affiliates or successors without notice. You may not assign without our prior written consent.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">21.2 Entire Agreement.</h3>
    <p>These Terms, together with referenced policies, constitute the entire agreement between the parties and supersede all prior understandings.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">21.3 Severability.</h3>
    <p>If any provision is held invalid or unenforceable, the remainder shall continue in full force, and the invalid provision shall be reformed to the minimum extent necessary.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">21.4 No Waiver.</h3>
    <p>No delay or omission in exercising rights waives them. Waiver must be in writing.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">21.5 Third-Party Rights.</h3>
    <p>These Terms do not confer enforceable rights on third parties except as expressly provided.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">21.6 Export Controls.</h3>
    <p>Use complies with Indian export laws; prohibited in sanctioned countries.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">22. Contact Information</h2>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">22.1</h3>
    <p>For questions, support, complaints, grievances, or notices: support@equibudx.com | Ramesh Botta 9689840943 CEO (9 AM-6 PM IST, Mon-Sat) | Address: STARTWORKS TECHNOLOGIES PRIVATE LIMITED, PLOT NO. 19-20, Floor 2, HILL VIEW PARADISE, MADHURAWADA, Madhurawada, Visakhapatnam, Andhra Pradesh,530048, India</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">22.2</h3>
    <p>A dedicated Grievance Officer is available at support@equibudx.com for escalations under the Consumer Protection (E-Commerce) Rules, 2020. Response time: 48 hours.</p>
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">22.3</h3>
    <p>Notices to us must be in writing, sent via registered post or email to the above. We may send notices via email, SMS, or Platform notifications, deemed received upon sending.</p>
    <p>Users may print or save a copy of these Terms for records. These Terms are subject to periodic review. For personalized legal advice, consult a qualified attorney. By using the Services, you acknowledge that this is a legally binding agreement.</p>
  </>
);

const TermsAndConditions = () => {
  return (
    <LegalPage 
      title="Terms and Conditions" 
      content={content} 
      lastUpdated="November 03, 2025" 
    />
  );
};

export default TermsAndConditions;