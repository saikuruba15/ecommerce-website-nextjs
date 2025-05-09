
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HomeFooter from "@/components/home-footer";
import HomeNavbar from "@/components/home-navbar";
import "../home.css";

export const metadata: Metadata = {
  title: "Terms of Use | Reacho",
  description:
    "Explore Reacho's Terms of Use to understand the guidelines, limitations, and legal considerations that govern the use of our ecommerce helpdesk services.",
};

const page = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="This is the home page" />
        <meta name="keywords" content="next.js, seo, meta tags" />
        <meta name="author" content="Your Name" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://example.com/styles.css" />
      </Head>
      <HomeNavbar />
      <div className="bg-white">
        <div className="container mx-auto p-4">
          <div className="max-w-[44rem] mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-900 pt-16 pb-14 mt-10">
              Terms Of Use
            </h1>
            <section className="mb-12 max-w-[44rem] mx-auto px-4 sm:px-6 lg:px-6">
              <p className="text-gray-700 pb-[20px]">
                These Website Terms of Use ("Terms") apply to the use of our
                websites and other digital platforms that link to these Terms
                (collectively, "Sites"), owned or operated by Reacho Inc. and
                its affiliates ("Company," "we," "us"). These Terms govern all
                access to and use of the Sites, including their content,
                services, and tools, by you, your agents, and other
                representatives on your behalf (collectively referred to as
                "You"). These Terms do not apply to your access and use of our
                products or services made available to you under a subscription
                (the "Services"). The acquisition, use, and support of our
                Services are subject to our Master Subscription Agreement, which
                governs any information and data we collect in connection with
                your use of the Services.
              </p>
              <p className="text-gray-700">
                By accessing or using the Sites or any of their content, you
                affirm to Reacho that (i) you have the legal capacity to accept
                these Terms and form this contract (e.g., you are not a minor),
                (ii) you consent to contract with Reacho electronically,
                acknowledge that the Terms can be retained in electronic form,
                and understand that using the Sites or clicking the 'Submit'
                button constitutes your acceptance of these Terms with the
                intention to be legally bound, analogous to these Terms and
                electronic signatures being executed in paper form, and (iii) if
                you are agreeing to these Terms on behalf of an entity, such as
                the company you work for, you possess the authority to bind that
                entity. If you do not agree to these Terms, please refrain from
                using the Sites.
              </p>
              <h2 className="text-2xl font-bold text-gray-700 mt-6 mb-3">
                1. Access and Use
              </h2>
              <h3 className="text-xl font-bold text-gray-700 mt-4 mb-2">
                Right to Access
              </h3>
              <p className="text-gray-700">
                You are granted permission to use the Sites and their content
                for your internal business purposes and consideration only, and
                not for further distribution, publication, copying, or any other
                exploitation not explicitly permitted under these Terms or other
                agreements between you and us. The Sites and the content
                available on them are owned or licensed by us and are subject to
                United States and international intellectual property laws. No
                rights or licenses to our Sites or the content therein are
                granted by these Terms, except as expressly stated herein. This
                permission applies to both public-facing Sites and those Sites
                or services and tools on such Sites that require the creation of
                an account or the use of security access credentials.
              </p>
              <h3 className="text-xl font-bold text-gray-700 mt-4 mb-2">
                Authenticated Access
              </h3>
              <p className="text-gray-700">
                Depending on the Sites and the online services and tools made
                accessible to our customers, you may need to create an account
                with us to gain access to such services and tools (e.g., the
                Referral Program Portal). When creating such an account, you
                affirm that the account is being created by you or someone
                authorized to legally act on your behalf. Your use and access to
                these authenticated services and tools are (i) contingent upon
                your adherence to these Terms and any policies communicated to
                you, and (ii) granted for the duration we have accorded access
                to such services and tools, at our sole discretion or as
                stipulated in the pertinent agreement governing such
                authenticated services and tools, if any.
              </p>
              <h3 className="text-xl font-bold text-gray-700 mt-4 mb-2">
                Order of Precedence
              </h3>
              <p className="text-gray-700">
                These Terms are supplemental and do not supersede any other
                agreements between you and Reacho related to the Sites and any
                online services, including any Software-as-a-Service
                subscriptions you have with Reacho. In the event of any
                inconsistencies between these Terms and other agreements
                governing your use of the relevant Sites or digital services and
                tools accessible thereon, the terms of those agreements shall
                prevail.
              </p>
              <h2 className="text-2xl font-bold text-gray-700 mb-3 mt-6">
                2. Privacy
              </h2>
              <p className="text-gray-700">
                For information about our practices related to the collection,
                use, disclosure, and other processing of personally identifiable
                information and data, please review Reacho’s Privacy Notice if
                you reside outside the European Economic Area, the United
                Kingdom, and Switzerland. For details on our processing of
                personal data from the aforementioned regions, please review our
                EU Privacy Policy.
              </p>
              <h2 className="text-2xl font-bold text-gray-700 mb-3 mt-6">
                3. User Requirements
              </h2>
              <h3 className="text-xl font-bold text-gray-700 mt-4 mb-2">
                Prohibitions
              </h3>
              <p className="text-gray-700">
                You, and those using the Sites on your behalf or for your
                benefit, are prohibited from using the Sites to violate any
                applicable laws or regulations, engage in fraudulent activities,
                exploit or harm others, store or transmit unlawful or tortious
                material, send unsolicited messages, compromise the security of
                any Reacho or third-party network, system, server, or account,
                impersonate Reacho or any entity, or restrict or inhibit
                anyone’s use or enjoyment of Reacho’s services.
              </p>
              <h3 className="text-xl font-bold text-gray-700 mt-4 mb-2">
                User Credentials
              </h3>
              <p className="text-gray-700">
                You are responsible for safeguarding the login credentials
                provided or created for accessing authenticated services and
                tools on the Sites. Reacho shall not be liable for any damages
                resulting from your failure to maintain the confidentiality of
                your login credentials. Reacho reserves the right to reject or
                cancel passwords deemed inappropriate and will inform you
                accordingly. Any unauthorized use or access to your account
                should be promptly reported to Reacho at
                <Link
                  href="mailto:support@reacho.com"
                  className="text-blue-600 hover:text-blue-800 underline pl-1"
                >
                  support@reacho.com
                </Link>
                .
              </p>
              <h2 className="text-2xl font-bold text-gray-700 mb-3 mt-6">
                4. Third Party Services
              </h2>
              <h3 className="text-xl font-bold text-gray-700 mt-4 mb-2">
                Third-Party Links
              </h3>
              <p className="text-gray-700">
                The Sites may feature links to third-party services.
                Interactions with such third-party services are between you and
                the applicable third party, not with Reacho, and are undertaken
                at your own risk. Reacho disclaims any responsibility for
                third-party services or their providers, including the accuracy
                of the information provided or their privacy practices.
              </p>
              <h3 className="text-xl font-bold text-gray-700 mt-4 mb-2">
                No Sponsorship
              </h3>
              <p className="text-gray-700">
                The inclusion of any third-party service or a link thereto does
                not imply endorsement or approval by Reacho. Reacho is not
                liable for the content or practices of any third-party service,
                even if linked by the Sites. We recommend that you review the
                terms, conditions, and privacy policies of such third parties
                before using their services or disclosing personal information.
              </p>
              <h2 className="text-2xl font-bold text-gray-700 mb-3 mt-6">
                5. Termination and Monitoring
              </h2>
              <h3 className="text-xl font-bold text-gray-700 mt-4 mb-2">
                Content Removal
              </h3>
              <p className="text-gray-700">
                Reacho reserves the right to investigate any violations of these
                Terms or misuse of the Sites and to remove content that violates
                these Terms. Reacho may report suspicious activities and
                cooperate with law enforcement agencies in the investigation and
                prosecution of illegal conduct, providing network and systems
                information related to alleged violations.
              </p>
              <h3 className="text-xl font-bold text-gray-700 mt-4 mb-2">
                Termination
              </h3>
              <p className="text-gray-700">
                Reacho reserves the right to terminate or suspend these Terms or
                your access to the Sites at any time. Reacho is not liable to
                you or any third party if it suspends or terminates your access
                or use of the Sites, regardless of the circumstances. Provisions
                of the Terms that should reasonably survive termination will
                continue to remain in effect.
              </p>
              <h2 className="text-2xl font-bold text-gray-700 mb-3 mt-6">
                6. Warranties and Disclaimers
              </h2>
              <p className="text-gray-700">
                THE WEBSITES, ALONG WITH ALL CONTENT AND OTHER ITEMS MADE
                AVAILABLE BY REACHO, ARE PROVIDED ON AN “AS IS” AND “AS
                AVAILABLE” BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER
                EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING ANY IMPLIED
                WARRANTY OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE, OR NON-INFRINGEMENT, TO THE FULLEST EXTENT PERMITTED BY
                APPLICABLE LAW. REACHO ASSUMES NO LIABILITY OR RESPONSIBILITY
                FOR ANY (i) ERRORS, MISTAKES, OR INACCURACIES OF DATA OR
                INFORMATION POSTED, DISPLAYED, PUBLISHED, OR MADE AVAILABLE FOR
                DOWNLOAD OR USE ON OR THROUGH THE SITE, (ii) DAMAGES OF ANY
                NATURE WHATSOEVER (INCLUDING TO SYSTEMS OR DATA) RESULTING FROM
                USE OF THE SITE OR ANY CONTENT, SOFTWARE, AND OTHER MATERIALS
                DOWNLOADED FROM THE SITES, (iii) ANY INTERRUPTION OR CESSATION
                OF TRANSMISSION TO OR FROM THE SITES, OR (iv) THE DEFAMATORY,
                OFFENSIVE, OR ILLEGAL CONDUCT OF ANY THIRD PARTY NOT UNDER
                REACHO’S REASONABLE CONTROL. REACHO DOES NOT WARRANT THAT THE
                SITES WILL BE SECURED OR AVAILABLE AT ANY PARTICULAR TIME OR
                LOCATION. REACHO SHALL EMPLOY REASONABLE EFFORTS CONSISTENT WITH
                PREVAILING INDUSTRY STANDARDS TO MAINTAIN THE SITES IN A MANNER
                WHICH MINIMIZES ERRORS AND INTERRUPTIONS IN THE SITES AND
                SERVICES AND TOOLS OFFERED THEREON. HOWEVER, THE SITES (OR
                COMPONENTS THEREOF) MAY BE TEMPORARILY UNAVAILABLE DUE TO
                SCHEDULED OR UNSCHEDULED MAINTENANCE, EITHER BY REACHO OR BY
                THIRD-PARTY PROVIDERS, OR DUE TO OTHER CAUSES BEYOND REACHO’S
                REASONABLE CONTROL.
              </p>
              <h2 className="text-2xl font-bold text-gray-700 mb-3 mt-6">
                7. Limitation of Liability
              </h2>
              <p className="text-gray-700">
                UNDER NO CIRCUMSTANCES AND UNDER NO LEGAL THEORY (WHETHER IN
                CONTRACT, TORT, NEGLIGENCE, OR OTHERWISE) SHALL EITHER PARTY TO
                THIS AGREEMENT, OR THEIR RESPECTIVE AFFILIATES, OFFICERS,
                DIRECTORS, EMPLOYEES, AGENTS, SERVICE PROVIDERS, SUPPLIERS, OR
                LICENSORS, BE LIABLE TO THE OTHER PARTY OR ANY THIRD PARTY FOR
                ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, OR ANY OTHER LOSSES OR DAMAGES OF ANY KIND,
                ARISING OUT OF THIS AGREEMENT, REGARDLESS OF WHETHER SUCH PARTY
                HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                NOTWITHSTANDING THE FOREGOING, REACHO’S AGGREGATE LIABILITY TO
                THE CUSTOMER, OR ANY THIRD PARTY ARISING OUT OF THIS AGREEMENT
                SHALL IN NO EVENT EXCEED $100.00 USD PER EVENT OR OCCURRENCE
                GIVING RISE TO SUCH LIABILITY. CUSTOMER RECOGNIZES THAT THE
                ESSENTIAL PURPOSE OF THIS SECTION IS TO ALLOCATE THE RISKS UNDER
                THIS AGREEMENT BETWEEN THE PARTIES AND LIMIT POTENTIAL LIABILITY
                GIVEN THE ACCESS TO THE SITES, WHICH WOULD HAVE BEEN
                SUBSTANTIALLY HIGHER IF REACHO WERE TO ASSUME ANY FURTHER
                LIABILITY OTHER THAN AS SET FORTH HEREIN. THE LIMITATIONS SET
                FORTH IN THIS SECTION SHALL APPLY TO ANY CLAIMS OR DAMAGES
                ARISING FROM (1) BODILY INJURY OF A PERSON, OR (2) ANY FRAUD OR
                WILLFUL MISCONDUCT OF REACHO.
              </p>
              <h2 className="text-2xl font-bold text-gray-700 mb-3 mt-6">
                8. Indemnification
              </h2>
              <p className="text-gray-700">
                You agree to defend, indemnify, and hold harmless Reacho, its
                affiliates, and their respective employees, contractors, agents,
                officers, and directors from all liabilities, claims, and
                expenses, including attorney’s fees, that arise from or relate
                to (i) your use of the Sites, (ii) breach of these Terms, (iii)
                violation of law, or (iv) any content or information that you
                post, disclose, or submit to Reacho in connection with the use
                of the Sites.
              </p>
              <h2 className="text-2xl font-bold text-gray-700 mb-3 mt-6">
                9. Digital Millennium Copyright Act
              </h2>
              <p className="text-gray-700 pb-[20px]">
                Reacho complies with the Digital Millennium Copyright Act (DMCA)
                and will respond to clear notices of alleged copyright
                infringement. It is recommended that DMCA notices be sent
                directly to the customer who provided the content. Reacho’s
                response to these notices may include forwarding the notice to
                the customer or disabling access to the material claimed to be
                the subject of infringing activity.
              </p>
              <p className="text-gray-700">
                DMCA notifications to Reacho should be sent to
                <Link
                  href="mailto:legal@reacho.com"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  {" "}
                  legal@reacho.com
                </Link>{" "}
                and must include the information specified in the DMCA.
              </p>
              <h2 className="text-2xl font-bold text-gray-700 mb-3 mt-6">
                10. Jurisdiction
              </h2>
              <p className="text-gray-700">
                These Terms shall be governed by the laws of the State of
                Delaware. Any legal action arising under these Terms shall be
                brought exclusively in the state or federal courts located in
                the Court of Chancery, State of Delaware.
              </p>
              <h2 className="text-2xl font-bold text-gray-700 mb-3 mt-6">
                11. Amendments
              </h2>
              <p className="text-gray-700">
                Reacho reserves the right to modify or amend this policy. You
                will be notified of any material changes, as determined by
                Reacho. Your continued use of the Sites constitutes your
                acceptance of the updated Terms.
              </p>
              <h3 className="text-2xl font-bold text-gray-700 mb-3 mt-6">
                Contacting Reacho
              </h3>
              <p className="text-gray-700">
                For questions or complaints regarding these Terms, please
                contact us by email at:
                <Link
                  href="mailto:support@reacho.com"
                  className="text-blue-600 hover:text-blue-800 underline pl-1"
                >
                  support@reacho.com
                </Link>
              </p>
            </section>
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
};

export default page;
