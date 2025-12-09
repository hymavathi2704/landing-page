import React from 'react';
import LegalPage from './LegalPage';

const content = (
  <>
    [cite_start]<p>STARTWORKS TECHNOLOGIES PRIVATE LIMITED (CIN: U72200AP2022PTC123413) ("STARTWORKS","we," "us," or "our"), a company incorporated under the laws of India with its registered office at 37ABJCS8459E1ZT STARTWORKS TECHNOLOGIES PRIVATE LIMITED PLOT NO. 19-20, Floor 2, HILL VIEW PARADISE, MADHURAWADA, Madhurawada, Visakhapatnam, Andhra Pradesh,530048, operates Equibudx ("Platform"), an online marketplace that connects third-party Service Providers with Buyers for services such as event tickets, experiential bookings, and consultations. [cite: 139, 140] [cite_start]We are dedicated to fostering trust and transparency in every transaction. [cite: 141]</p>
    [cite_start]<p>This Refund and Cancellation Policy ("Policy") sets forth the terms governing cancellations and refunds for all Bookings made through our Services, including the website equibudx.com/equibudx.in mobile applications (iOS and Android), and related tools (collectively, the "Services"). [cite: 142] [cite_start]This Policy is an integral part of our Terms and Conditions ("Terms") and applies uniformly to all Users, including Buyers and Service Providers. [cite: 143]</p>
    [cite_start]<p>As a technology intermediary under Section 2(1)(w) of the Information Technology Act, 2000 ("IT Act"), we facilitate interactions and payments but do not provide, endorse, or guarantee any services. [cite: 144] [cite_start]The underlying contract for service delivery remains between the Buyer and Service Provider, and all refunds are processed in accordance with this Policy, applicable laws, and the specific terms displayed at the time of Booking. [cite: 145]</p>
    [cite_start]<p>This Policy adheres to the Consumer Protection Act, 2019 ("CPA"), the Consumer Protection (E-Commerce) Rules, 2020, the Reserve Bank of India ("RBI") Master Directions on Payment Aggregators, and other relevant regulations. [cite: 146] All refunds are handled securely and compliantly through our integrated payment gateway, Cashfree Payments India Pvt. [cite_start]Ltd. ("Cashfree"). [cite: 147] [cite_start]We do not store, access, or process full financial details; [cite: 148] [cite_start]such data is managed exclusively by Cashfree in a PCI DSS-compliant environment. [cite: 149]</p>
    <p>By using the Services, you agree to this Policy. [cite_start]If you have any questions, concerns, or require assistance, please contact our support team at <strong>support@equibudx.com</strong> (available Monday to Saturday, 9:00 AM to 6:00 PM IST). [cite: 150]</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">1. Applicability and Key Principles</h2>
    [cite_start]<p>This Policy applies to all confirmed Bookings processed via the Platform and is designed to balance Buyer protection with Service Provider commitments, ensuring fairness and efficiency. [cite: 152]</p>
    
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">1.1 Scope</h3>
    <ul className="list-disc ml-6 space-y-2">
      [cite_start]<li>Covers all services listed by third-party Service Providers, including but not limited to events, workshops, consultations, and experiential activities. [cite: 154]</li>
      [cite_start]<li>Does not apply to off-Platform transactions, direct payments to Service Providers, or third-party fees (e.g., bank surcharges or international transaction levies). [cite: 155]</li>
    </ul>

    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">1.2 Key Principles</h3>
    <ul className="list-disc ml-6 space-y-2">
      [cite_start]<li><strong>Non-Refundable Elements:</strong> Convenience fees, payment gateway charges, or processing fees (up to 2% of the Booking amount, as disclosed at checkout) are non-refundable to cover operational costs. [cite: 157]</li>
      [cite_start]<li><strong>Currency:</strong> All transactions and refunds are denominated in Indian Rupees (INR). [cite: 158]</li>
      [cite_start]<li><strong>Taxes:</strong> Eligible refunds include any applicable taxes (e.g., GST at prevailing rates) that were collected at Booking. [cite: 159] [cite_start]Service Providers are solely responsible for their tax compliance and remittance obligations. [cite: 160]</li>
      [cite_start]<li><strong>Request Process:</strong> Cancellations and refund requests must be submitted exclusively through the Platform's user dashboard, mobile app, or official support channels. [cite: 162] [cite_start]We do not accept verbal, email-only, or third-party requests to prevent fraud. [cite: 163]</li>
      [cite_start]<li><strong>Evidence Requirements:</strong> For disputed cases, Users must provide verifiable proof (e.g., medical certificates, screenshots) within specified timelines. [cite: 164]</li>
    </ul>
    [cite_start]<p>We reserve the right to amend this Policy at any time to reflect legal, operational, or business changes. [cite: 165] [cite_start]Amendments will be posted on the Platform with the updated "Last Updated" date, and material changes (e.g., revised refund percentages) will be notified via email or in-app alerts at least 30 days in advance. [cite: 166] [cite_start]Your continued use of the Services after such notice constitutes acceptance. [cite: 167]</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">2. Buyer-Initiated Cancellations and Refunds</h2>
    [cite_start]<p>Buyers may initiate cancellations at any time prior to the Service Fulfillment Date (the scheduled date and time of service delivery), subject to the refund schedule below. [cite: 169] [cite_start]This tiered structure accounts for Service Provider preparation and opportunity costs while prioritizing early cancellations. [cite: 170]</p>

    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">2.1 Refund Schedule</h3>
    <p className="italic text-muted-foreground">The full table data is omitted for brevity, summarizing the key points:</p>
    <ul className="list-disc ml-6 space-y-2">
      [cite_start]<li><strong>Within 24 hours of Booking Confirmation:</strong> 100% Refund (excluding non-refundable fees) for errors or change of mind. [cite: 173]</li>
      [cite_start]<li><strong>After 24 hours from Booking Confirmation but more than 24 hours before Service Fulfillment Date:</strong> 50% of the Booking amount (excluding non-refundable fees). [cite: 173]</li>
      [cite_start]<li><strong>Within 24 hours of Service Fulfillment Date (Last-Minute Cancellation) or No-Show:</strong> 0% Refund. [cite: 173]</li>
    </ul>

    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">2.2 How to Initiate a Cancellation</h3>
    <ol className="list-decimal ml-6 space-y-2">
      [cite_start]<li>Log in to your Platform account via the website or app. [cite: 175]</li>
      [cite_start]<li>Navigate to "My Bookings" and select the relevant Booking. [cite: 176]</li>
      [cite_start]<li>Click "Cancel Booking" and follow the prompts to confirm. [cite: 177]</li>
      [cite_start]<li>Receive an instant confirmation email or SMS with details, including estimated refund amount and timeline. [cite: 178]</li>
    </ol>

    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">2.3 Disputes and Exceptions</h3>
    <ul className="list-disc ml-6 space-y-2">
      [cite_start]<li>If you believe the standard policy does not apply (e.g., due to a medical emergency), submit a support ticket within 7 days of the Service Fulfillment Date, including supporting evidence. [cite: 181, 182]</li>
      [cite_start]<li>Our dedicated support team will review and mediate within 5-7 business days. [cite: 183]</li>
      [cite_start]<li>For group or multi-attendee Bookings, cancellations are prorated per individual; full refunds require all attendees to opt out within the applicable window. [cite: 185, 186]</li>
    </ul>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">3. Service Provider-Initiated Cancellations</h2>
    [cite_start]<p>Service Providers are encouraged to honor all confirmed Bookings but may cancel under exceptional circumstances. [cite: 188] [cite_start]Cancellations must be initiated via the Platform dashboard at least 24 hours before the Service Fulfillment Date (or immediately upon discovery in emergencies). [cite: 189]</p>

    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">3.1 Remedies for Affected Buyers</h3>
    [cite_start]<p>Upon a Service Provider-initiated cancellation, the Buyer is entitled to one of the following options, provided at no additional cost: [cite: 191]</p>
    <ul className="list-disc ml-6 space-y-2">
      [cite_start]<li>100% Refund of the full Booking amount (excluding non-refundable fees), processed per Section 4; [cite: 193] or</li>
      [cite_start]<li>Complimentary Rescheduling to an equivalent or comparable service slot, subject to availability (Buyer must confirm within 14 days). [cite: 194]</li>
    </ul>

    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">3.2 Service Provider Obligations</h3>
    <ul className="list-disc ml-6 space-y-2">
      [cite_start]<li>Provide immediate notification to the Platform and Buyer. [cite: 196]</li>
      [cite_start]<li>Offer reasonable alternatives. [cite: 197]</li>
      [cite_start]<li>Repeated cancellations (e.g., exceeding 5% of total Bookings in a quarter) may result in penalties, including account termination. [cite: 198]</li>
    </ul>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">4. Refund Processing</h2>
    [cite_start]<p>Refunds are approved and initiated within **48 hours** of the cancellation confirmation. [cite: 203] [cite_start]Funds are credited to the **original payment method** within **7-10 business days** (up to 15 days for international transactions). [cite: 204, 205]</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">5. Force Majeure Cancellations</h2>
    [cite_start]<p>In the event a Booking is disrupted due to a Force Majeure Event (e.g., natural disasters, government actions), the affected Buyer will receive, at our discretion: [cite: 217, 219]</p>
    <ul className="list-disc ml-6 space-y-2">
      [cite_start]<li>100% Refund of the Booking amount; [cite: 220] or</li>
      [cite_start]<li>Free Rescheduling; [cite: 221] or</li>
      [cite_start]<li>Platform Credit equivalent to the Booking value (redeemable within 6 months). [cite: 222]</li>
    </ul>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">6. Dispute Resolution</h2>
    [cite_start]<p>Disputes must be raised via the support ticket system. [cite: 231] [cite_start]For unresolved matters, escalate to our Grievance Officer at <strong>support@equibudx.com</strong>, with a guaranteed response within **48 hours** as per CPA (E-Commerce) Rules. [cite: 234, 235]</p>
    
    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">7. Contact Information</h2>
    <ul className="list-disc ml-6 space-y-2">
      [cite_start]<li><strong>Customer Support:</strong> support@equibudx.com (Monday-Saturday, 9:00 AM-6:00 PM IST) [cite: 241]</li>
      <li><strong>Grievance Officer:</strong> support@equibudx.com | [cite_start]Response time: 48 hours [cite: 242]</li>
      <li><strong>Mailing Address:</strong> STARTWORKS TECHNOLOGIES PRIVATE LIMITED, PLOT NO. [cite_start]19-20, Floor 2, HILL VIEW PARADISE, MADHURAWADA, Visakhapatnam, Andhra Pradesh, 530048, India [cite: 243]</li>
    </ul>
  </>
);

const RefundAndCancellationPolicy = () => {
  return (
    <LegalPage 
      title="Refund and Cancellation Policy" 
      content={content} 
      lastUpdated="December 03, 2025" 
    />
  );
};

export default RefundAndCancellationPolicy;