import React from 'react';
import LegalPage from './LegalPage';

const content = (
  <>
    <p>Startworks Technologies Private Limited ("STARTWORKS","we," "us," or "our"), a company incorporated under the laws of India with its registered office at STARTWORKS TECHNOLOGIES PRIVATE LIMITED, PLOT NO. 19-20, Floor 2, HILL VIEW PARADISE, MADHURAWADA, Madhurawada, Visakhapatnam, Andhra Pradesh, 530048, India, operates Equibudx ("Platform"), an online marketplace that connects third-party Service Providers offering services (e.g., event tickets, experiential bookings) with Buyers seeking to purchase or book such services. We prioritize your privacy and are committed to handling personal information responsibly and transparently.</p>
    <p>This Privacy Policy ("Policy") describes how we collect, use, disclose, store, secure, and protect personal information when you ("you," "your," or "User") access, browse, or use our Services, which include the website equibudx.com/equibudx.in, mobile applications (iOS and Android), APIs, and related tools (collectively, the "Services"). By accessing or using the Services, registering an account, making a Booking, or providing information, you acknowledge that you have read, understood, and consent to this Policy, our Terms and Conditions ("Terms"), and any supplemental notices.</p>
    <p>This Policy forms part of our Terms and is governed by the Information Technology Act, 2000 ("IT Act"), the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 ("SPDI Rules"), the Digital Personal Data Protection Act, 2023 ("DPDP Act"), the Consumer Protection (E-Commerce) Rules, 2020, and other relevant Indian and international data protection laws (e.g., GDPR for EU Users). As a "Data Fiduciary" under the DPDP Act, we determine the purpose and means of processing your personal data and are accountable for compliance.</p>
    <p>We act as an intermediary under the IT Act, and while we process data to facilitate connections, Service Providers are independent data controllers for data they receive from Buyers for service delivery.</p>
    <p>If you do not agree with this Policy, please discontinue use of the Services. For privacy-related questions, complaints, or to exercise rights, contact our Data Protection Officer ("DPO") at support@equibudx.com.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">1. Scope of This Policy</h2>
    <p>This Policy applies to all Users, including Buyers (who book services) and Service Providers (who list services), as well as visitors. It does not apply to third-party sites linked from the Services (e.g., Cashfree's payment gateway) or employment-related data (governed by separate HR policies). We may update this Policy periodically; see Section 13 for details.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">2. Information We Collect</h2>
    <p>We collect only the minimum personal information necessary to provide the Services ("Personal Data") and non-personal data for analytics. Collection is lawful, fair, and transparent.</p>
    
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">2.1 Personal Data Collected Directly from You</h3>
    <ul className="list-disc ml-6 space-y-2">
      <li>Registration and Account Data: Full name, email address, mobile number (verified via OTP), password, date of birth, and profile picture. Service Providers also provide business details like GSTIN, PAN, bank account information (for payouts), and Verification Documents (e.g., Aadhaar, business license).</li>
      <li>Booking and Transaction Data: Service selections, attendee details (e.g., names, ages for group Bookings), billing/shipping address, payment instrument details (e.g., last four digits of card, UPI ID), and Booking history (dates, amounts, refunds).</li>
      <li>Communication Data: Inquiries, support tickets, chat messages between Buyers and Service Providers, and feedback (e.g., reviews, ratings).</li>
      <li>User-Generated Content: Photos, videos, or documents uploaded for listings (e.g., event posters) or reviews.</li>
    </ul>

    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">2.2 Personal Data Collected Automatically</h3>
    <ul className="list-disc ml-6 space-y-2">
      <li>Technical and Usage Data: IP address, device identifiers (e.g., IMEI, advertising ID), browser/OS type/version, screen resolution, time zone, pages viewed, session duration, referral sources, and clickstream data.</li>
      <li>Location Data: Approximate location via IP geolocation for service recommendations or fraud detection; precise location (e.g., GPS) only with explicit consent for features like venue check-ins.</li>
      <li>Behavioral Data: Search queries, wishlist items, cart abandonment patterns, and interaction logs.</li>
    </ul>

    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">2.3 Personal Data from Third Parties</h3>
    <ul className="list-disc ml-6 space-y-2">
      <li>Verification and KYC Data: From integrated partners (e.g., government APIs or third-party KYC services) for identity checks.</li>
      <li>Payment Data: Transaction metadata from Cashfree (e.g., confirmation IDs); full financial details are handled solely by them.</li>
      <li>Social Media Data: If you log in via Google/Facebook, basic profile info (with consent).</li>
      <li>Analytics Partners: Aggregated insights from tools like Google Analytics or Facebook Pixel.</li>
    </ul>

    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">2.4 Sensitive Personal Data or Information (SPDI)</h3>
    <p>Under SPDI Rules, we do not collect SPDI (e.g., health details, financial account numbers, biometric data, sexual orientation, or religious beliefs) unless strictly necessary and with explicit, informed consent (e.g., medical restrictions for adventure services). Such data is encrypted and access-restricted.</p>

    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">2.5 Non-Personal Data</h3>
    <p>Anonymous or aggregated data (e.g., total Bookings by city, average rating per service category) that cannot identify individuals.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">3. How We Collect Information</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>Direct Methods: Forms, sign-ups, uploads, or in-app prompts.</li>
      <li>Automated Methods: Cookies, web beacons, SDKs in apps, and server logs.</li>
      <li>Interactive Methods: User interactions (e.g., button clicks) and device APIs (e.g., camera for ID scans, with permission).</li>
      <li>Third-Party Sources: As noted in Section 2.3, with your consent or legitimate interest.</li>
    </ul>
    <p>We provide clear notices (e.g., consent banners) before collecting non-essential data and allow withdrawal of consent.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">4. Purposes and Legal Basis for Processing</h2>
    <p>We process Personal Data only for specified, legitimate purposes under DPDP Act grounds (consent, contract performance, legal obligations, or legitimate interests). Examples:</p>
    <ul className="list-disc ml-6 space-y-2">
      <li>Core Services (Contract Necessity): Account creation, Booking processing, payment facilitation, service matching, and notifications (e.g., e-tickets via email/SMS).</li>
      <li>Enhancements (Legitimate Interests): Personalization (e.g., recommending similar events), fraud prevention (e.g., anomaly detection), and analytics for Platform improvements.</li>
      <li>Marketing (Consent): Newsletters, promotional offers, or retargeting ads; opt-out via unsubscribe links or settings.</li>
      <li>Compliance (Legal Obligation): KYC/AML checks under RBI/PMLA, tax withholding (TDS on Service Provider payouts), and dispute resolution.</li>
      <li>Security and Integrity: Monitoring for abuse, backups, and audits.</li>
    </ul>
    <p>Processing is proportionate; we pseudonymize/anonymize where possible.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">5. Sharing and Disclosure of Personal Data</h2>
    <p>We do not sell, rent, or trade Personal Data. Disclosures are limited, secure, and contractual:</p>
    <ul className="list-disc ml-6 space-y-2">
      <li>To Service Providers: Minimal data for fulfillment (e.g., Buyer contact for event check-in); they act as independent controllers and must adhere to equivalent privacy standards.</li>
      <li>To Vendors and Processors: Data processors (e.g., Cashfree for payments, AWS for hosting, Twilio for SMS) bound by data processing agreements (DPAs) ensuring DPDP compliance, confidentiality, and sub-processor controls.</li>
      <li>For Business Purposes: Aggregated data to affiliates for joint marketing (anonymized) or in audits.</li>
      <li>Legal Disclosures: To regulators, courts, or law enforcement (e.g., cybercrime complaints under IT Act) upon valid request; we notify you unless prohibited.</li>
      <li>Mergers/Acquisitions: To potential buyers, with notice and opt-out rights.</li>
      <li>With Consent: For third-party integrations (e.g., sharing reviews on social media).</li>
    </ul>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">6. International Data Transfers</h2>
    <p>Personal Data may be transferred to processors in countries outside India (e.g., US-based cloud servers). Such transfers comply with DPDP Act via adequacy decisions, standard contractual clauses (SCCs), or binding corporate rules. We assess transfer risks and implement safeguards (e.g., encryption in transit/rest). EU/UK Users' data follows GDPR adequacy or SCCs.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">7. Cookies, Tracking, and Advertising</h2>
    <p>We use first- and third-party cookies, tags, and similar technologies for:</p>
    <ul className="list-disc ml-6 space-y-2">
      <li>Essential: Session management, security (e.g., CSRF tokens).</li>
      <li>Functional: Preferences (e.g., language), localization.</li>
      <li>Analytics: Usage patterns (e.g., Google Analytics, anonymized IP).</li>
      <li>Advertising: Interest-based ads (e.g., via Google Ads); we use device IDs for cross-device tracking with consent.</li>
    </ul>
    
    <p>The following table:</p>
    <table className="table-auto w-full border border-border mt-4 mb-6">
        <thead className="bg-muted text-left">
            <tr>
                <th className="p-2 border-b border-border">Cookie Type</th>
                <th className="p-2 border-b border-border">Purpose</th>
                <th className="p-2 border-b border-border">Duration</th>
                <th className="p-2 border-b border-border">Providers</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="p-2 border-b border-border">Essential</td>
                <td className="p-2 border-b border-border">Core functionality</td>
                <td className="p-2 border-b border-border">Session</td>
                <td className="p-2 border-b border-border">[Platform Name]</td>
            </tr>
            <tr>
                <td className="p-2 border-b border-border">Analytics</td>
                <td className="p-2 border-b border-border">Performance metrics</td>
                <td className="p-2 border-b border-border">Up to 2 years</td>
                <td className="p-2 border-b border-border">Google Analytics</td>
            </tr>
            <tr>
                <td className="p-2 border-b border-border">Marketing</td>
                <td className="p-2 border-b border-border">Personalized ads</td>
                <td className="p-2 border-b border-border">Up to 13 months</td>
                <td className="p-2 border-b border-border">Facebook Pixel, Google Ads</td>
            </tr>
        </tbody>
    </table>
    
    <p>Manage via browser settings, our cookie consent tool, or [Do Not Track] signals. Opting out may degrade experience. See our Cookie Policy [link] for details.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">8. Data Retention and Deletion</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>Retention Periods: As needed for purposes (e.g., 7 years for financial/tax records under Income Tax Act; 90 days for logs post-resolution). Inactive accounts: 2 years, then anonymized.</li>
      <li>Deletion: Upon request (see Section 9), purpose fulfillment, or legal expiry. We securely erase (e.g., overwriting) and notify processors.</li>
      <li>Backups: Retained up to 30 days for recovery; excluded from deletion requests unless specified.</li>
    </ul>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">9. Your Rights and Choices</h2>
    <p>As a Data Principal under DPDP Act, you have verifiable rights. Submit requests via [privacy@platformname.com] with proof of identity; we verify and respond within 30 days (extendable to 90 for complexity). No fee unless excessive.</p>
    <ul className="list-disc ml-6 space-y-2">
      <li>Access: Free copy of your Personal Data in portable format (e.g., JSON/CSV).</li>
      <li>Rectification: Correct inaccuracies or incompletes.</li>
      <li>Erasure: Delete data if no longer needed, consent withdrawn, or unlawful processing ("right to be forgotten"); exceptions for legal holds.</li>
      <li>Restriction: Temporarily halt processing during disputes or verification.</li>
      <li>Objection: To direct marketing or legitimate interest processing (e.g., profiling); we assess and cease unless overriding grounds.</li>
      <li>Portability: Transfer data to another controller.</li>
      <li>Withdraw Consent: Revoke anytime via settings; impacts future processing but not past lawful acts.</li>
      <li>Automated Decisions: Minimal use (e.g., fraud scoring); right to human review for significant impacts.</li>
    </ul>
    <p>Service Providers handle their own data rights for Buyer info they control. Complaints: Escalate to DPO or adjudicating officer under DPDP Act.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">10. Children's Privacy</h2>
    <p>Services are not for children under 18. We do not knowingly collect data from minors. If aware, we delete promptly and notify parents/guardians. Report suspected cases [privacy@platformname.com].</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">11. Data Security Practices</h2>
    <p>As an SPDI-compliant entity, we adopt ISO 27001-aligned measures:</p>
    <ul className="list-disc ml-6 space-y-2">
      <li>Technical: End-to-end encryption (AES-256), firewalls, DDoS protection, regular vulnerability scans.</li>
      <li>Organizational: Access on "need-to-know" basis (role-based), employee training, annual audits by certified auditors.</li>
      <li>Incident Response: Breach notification to CERT-In (within 6 hours) and Users (as per DPDP); post-incident reviews.</li>
    </ul>
    <p>We cannot guarantee absolute security; you share responsibility (e.g., strong passwords).</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">12. Third-Party Links and Services</h2>
    <p>Links to external sites (e.g., Cashfree, social logins) are not covered. Review their policies; we are not liable for their practices.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">13. Changes to This Policy</h2>
    <p>We review annually or upon legal changes. Updates post on the Platform with "Last Updated" date. Material amendments (e.g., new sharing) get 30 days' notice via email/app. Continue use = acceptance; opt-out by closing account.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">14. Governing Law and Dispute Resolution</h2>
    <p>Governed by Indian laws; disputes per Terms' arbitration clause (Section 18). For DPDP grievances, contact adjudicating officer.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">15. Contact Information</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>Data Protection Officer: support@equibudx.com</li>
      <li>Grievance Officer: support@equibudx.com (48-hour response under E-Commerce Rules)</li>
      <li>Postal: STARTWORKS TECHNOLOGIES PRIVATE LIMITED, PLOT NO. 19-20, Floor 2, HILL VIEW PARADISE, MADHURAWADA, Madhurawada, Visakhapatnam, Andhra Pradesh, 530048, India</li>
      <li>Hours: 9 AM - 6PM IST, Mon-Sat</li>
    </ul>
    <p>Thank you for trusting [Platform Name]. This Policy ensures your data empowers seamless experiences while safeguarding privacy. For advice, consult a legal expert.</p>
  </>
);

const PrivacyPolicy = () => {
  return (
    <LegalPage 
      title="Privacy Policy" 
      content={content} 
      lastUpdated="December 03, 2025" 
    />
  );
};

export default PrivacyPolicy;