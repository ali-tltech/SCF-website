'use client';

import React, { useState, useEffect } from 'react';
import { AlertTriangle, Info, Shield, Phone, Mail, MapPin } from 'lucide-react';

const DisclaimerPage = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { title: "General Information", icon: <Info className="w-5 h-5" /> },
    { title: "No Warranties", icon: <AlertTriangle className="w-5 h-5" /> },
    { title: "Limitations of Liability", icon: <Shield className="w-5 h-5" /> },
    { title: "Exceptions", icon: <AlertTriangle className="w-5 h-5" /> },
    { title: "Reasonableness", icon: <Info className="w-5 h-5" /> },
    { title: "Other Parties", icon: <Shield className="w-5 h-5" /> },
    { title: "Unenforceable Provisions", icon: <AlertTriangle className="w-5 h-5" /> },
  ];

  useEffect(() => {
    setActiveSection(0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-gray-100 shadow-xl rounded-lg overflow-hidden">
        <div className="px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1 bg-gray-100 p-4 rounded-lg">
              <div className="space-y-2 sticky top-24">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    className={`flex items-center w-full text-left px-4 py-2 rounded transition-colors ${
                      activeSection === index 
                        ? 'bg-indigo-100 text-indigo-700 font-medium' 
                        : 'text-gray-600 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveSection(index)}
                  >
                    {section.icon}
                    <span className="ml-2">{section.title}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-3">
              <div className="prose max-w-none">
                <div>
                  <h1 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center">
                    {sections[activeSection].icon}
                    <span className="ml-2">{sections[activeSection].title}</span>
                  </h1>
                  <DisclaimerContent section={activeSection} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 px-8 py-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <div className="flex flex-wrap items-center text-gray-600">
            <div className="flex items-center mr-8 mb-2">
              <Mail className="w-5 h-5 mr-2" />
              <span>info@scfstrategies.com</span>
            </div>
            <div className="flex items-center mr-8 mb-2">
              <Phone className="w-5 h-5 mr-2" />
              <span>[Insert Phone Number]</span>
            </div>
            <div className="flex items-center mb-2">
              <MapPin className="w-5 h-5 mr-2" />
              <span>[Insert Address]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DisclaimerContent = ({ section }) => {
  const content = {
    0: (
      <p className="text-gray-700">
        The information provided by SCF Strategies on our website (https://www.scfstrategies.com) is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
      </p>
    ),
    1: (
      <>
        <p className="text-gray-700">
          This website is provided "as is" without any representations or warranties, express or implied. SCF Strategies makes no representations or warranties regarding this website or the information and materials provided on it.
        </p>
        <p className="mt-4 text-gray-700">
          SCF Strategies does not warrant that:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>This website will be continuously available, or available at all; or</li>
          <li>The information on this website is complete, true, accurate, or non-misleading.</li>
        </ul>
        <p className="mt-4 text-gray-700">
          Nothing on this website constitutes or is intended to constitute advice of any kind.
        </p>
      </>
    ),
    2: (
      <>
        <p className="text-gray-700">
          SCF Strategies will not be liable to you for any indirect, special, or consequential loss arising from the contents of, or use of, or otherwise in connection with this website, including but not limited to:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Loss of revenue, income, profits, anticipated savings, contracts, business relationships, reputation, goodwill, or data.</li>
        </ul>
        <p className="mt-4 text-gray-700">
          These limitations of liability apply even if SCF Strategies has been expressly advised of the potential for such loss.
        </p>
      </>
    ),
    3: (
      <>
        <p className="text-gray-700">
          Nothing in this disclaimer excludes or limits any warranty implied by law where it would be unlawful to do so; nor does it exclude or limit SCF Strategies' liability for:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Death or personal injury caused by SCF Strategies' negligence;</li>
          <li>Fraud or fraudulent misrepresentation on the part of SCF Strategies; or</li>
          <li>Any matter that it would be illegal or unlawful for SCF Strategies to exclude or limit, or to attempt to exclude or limit, liability.</li>
        </ul>
      </>
    ),
    4: (
      <p className="text-gray-700">
        By using this website, you agree that the exclusions and limitations of liability set out in this disclaimer are reasonable. If you do not believe they are reasonable, you must not use this website.
      </p>
    ),
    5: (
      <p className="text-gray-700">
        You acknowledge that SCF Strategies, as a limited liability entity, has an interest in limiting the personal liability of its officers and employees. Therefore, you agree not to bring any claim personally against SCF Strategies' officers or employees concerning any losses suffered in connection with the website. The limitations of warranties and liability set out in this disclaimer will protect SCF Strategies' officers, employees, agents, subsidiaries, successors, assigns, and subcontractors as well as SCF Strategies.
      </p>
    ),
    6: (
      <p className="text-gray-700">
        If any provision of this disclaimer is or is found to be unenforceable under applicable law, this will not affect the enforceability of the remaining provisions.
      </p>
    ),
  };

  return content[section];
};

export default DisclaimerPage;
