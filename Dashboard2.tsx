import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Users, BookOpen, Settings, TrendingUp, AlertTriangle, CheckCircle, FileText, Target, MessageSquare, Monitor, Eye, Shield, Clock, Lightbulb, HelpCircle } from 'lucide-react';

const CompleteDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Executive Summary', icon: FileText },
    { id: 'general', title: 'General Usage & Attitudes', icon: Users },
    { id: 'teaching', title: 'GenAI in Teaching', icon: BookOpen },
    { id: 'learners', title: 'GenAI for Learners', icon: TrendingUp },
    { id: 'admin', title: 'GenAI in Administration', icon: Settings },
    { id: 'demographics', title: 'Staff Demographics & IT Proficiency', icon: Monitor },
    { id: 'feedback', title: 'Open Feedback', icon: MessageSquare },
    { id: 'recommendations', title: 'Recommendations', icon: Target }
  ];

  // All data consolidated for the complete dashboard
  const keyStats = {
    totalResponses: 112,
    responseRate: 56,
    totalStaff: 201,
    academicStaff: 92,
    nonTeachingStaff: 20,
    genAiUsage: 77,
    personalUsage: 71,
    chatGptUsage: 80,
    trainingRequests: 76,
    licenseRequests: 61,
    approvedToolsRequests: 58,
    ethicalConcerns: 40,
    cheatingConcerns: 69,
    efficiencyBenefits: 73
  };

  const ExecutiveSummary = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Executive Summary</h2>
        <p className="text-gray-600 mb-6">
          Strong participation (112 staff, ~56% response rate) reveals cautiously optimistic attitudes 
          toward GenAI with widespread usage already occurring.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600">{keyStats.totalResponses}</div>
            <div className="text-sm text-gray-600">Total Responses</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">{keyStats.responseRate}%</div>
            <div className="text-sm text-gray-600">Response Rate</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-yellow-600">{keyStats.genAiUsage}%</div>
            <div className="text-sm text-gray-600">Use GenAI at Work</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-600">{keyStats.chatGptUsage}%</div>
            <div className="text-sm text-gray-600">Use ChatGPT</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold mb-4 flex items-center text-green-800">
              <CheckCircle className="w-5 h-5 mr-2" />
              Key Positive Findings
            </h3>
            <ul className="space-y-2 text-sm text-green-700">
              <li>• Staff cautiously optimistic about GenAI benefits (efficiency & creativity)</li>
              <li>• 86% support GenAI for curriculum planning and lesson preparation</li>
              <li>• Experience with GenAI strongly correlates with positive attitudes</li>
              <li>• High IT proficiency indicates readiness for adoption</li>
              <li>• Strong support across administrative departments (50-70%)</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-lg font-semibold mb-4 flex items-center text-yellow-800">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Key Concerns to Address
            </h3>
            <ul className="space-y-2 text-sm text-yellow-700">
              <li>• 69% of teachers concerned about academic honesty & cheating</li>
              <li>• 43% worried about ethical implications & accountability</li>
              <li>• 87% fear over-reliance could harm student skill development</li>
              <li>• Need for clear policies and detection tools</li>
              <li>• Gap between support levels and actual usage</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const GeneralUsage = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <Users className="w-6 h-6 mr-3 text-blue-600" />
          General GenAI Usage and Attitudes
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600">77%</div>
            <div className="text-sm text-gray-600">Use GenAI for Work</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">71%</div>
            <div className="text-sm text-gray-600">Personal Usage</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-600">80%</div>
            <div className="text-sm text-gray-600">Use ChatGPT</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-gray-600">6%</div>
            <div className="text-sm text-gray-600">No Usage Yet</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-3">Most Popular Activities</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Writing/Proofreading (71%)</li>
              <li>• Research Assistant (67%)</li>
              <li>• Educational Content (44%)</li>
              <li>• Image Creation (35%)</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-3">Recognized Benefits</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Improved Efficiency (73%)</li>
              <li>• Enhanced Creativity (64%)</li>
              <li>• Task Automation (65%)</li>
              <li>• Better Quality Output (55%)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const Teaching = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
          GenAI in Teaching (92 Academic Staff)
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">86%</div>
            <div className="text-sm text-gray-600">Support Curriculum Planning</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600">88%</div>
            <div className="text-sm text-gray-600">Support Content Creation</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-yellow-600">56%</div>
            <div className="text-sm text-gray-600">Support Assessment Use</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-600">62%</div>
            <div className="text-sm text-gray-600">Use ChatGPT for Teaching</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-3">Strong Support Areas</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Lesson preparation & planning</li>
              <li>• Teaching materials creation</li>
              <li>• Administrative documentation</li>
              <li>• Professional development support</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-3">Areas of Concern</h3>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Student assessment & grading</li>
              <li>• Content reliability & accuracy</li>
              <li>• Professional ethics & accountability</li>
              <li>• Role uncertainty & job impact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const Learners = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <TrendingUp className="w-6 h-6 mr-3 text-blue-600" />
          GenAI for Learners (Teacher Perspectives)
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">67%</div>
            <div className="text-sm text-gray-600">Support Self-Assessment</div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-red-600">87%</div>
            <div className="text-sm text-gray-600">Fear Over-reliance</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-yellow-600">69%</div>
            <div className="text-sm text-gray-600">Academic Honesty Concerns</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-600">45%</div>
            <div className="text-sm text-gray-600">Suspect Current Abuse</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-3">Acceptable Student Uses</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Self-assessment & improvement (67%)</li>
              <li>• Personalized learning support (62%)</li>
              <li>• Study material generation (60%)</li>
              <li>• Research assistance (57%)</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-red-800 mb-3">Major Misuse Concerns</h3>
            <ul className="text-sm text-red-700 space-y-1">
              <li>• Over-reliance harming skills (87%)</li>
              <li>• Copying without attribution (86%)</li>
              <li>• Cheating on tests/exams (86%)</li>
              <li>• Using AI without understanding (85%)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const Administration = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <Settings className="w-6 h-6 mr-3 text-blue-600" />
          GenAI in Administration (20 Non-Teaching Staff)
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">70%</div>
            <div className="text-sm text-gray-600">Support Admin Office Use</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600">65%</div>
            <div className="text-sm text-gray-600">Use for Text Creation</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-600">70%</div>
            <div className="text-sm text-gray-600">See Efficiency Benefits</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-yellow-600">40%</div>
            <div className="text-sm text-gray-600">Ethical Concerns</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-3">High Support Departments</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Administrative Office (70%)</li>
              <li>• Marketing (65%)</li>
              <li>• IT Department (60%)</li>
              <li>• HR (55%)</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-3">Current Usage Patterns</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Text creation & editing (65%)</li>
              <li>• Research & information (50%)</li>
              <li>• Meeting preparation (25%)</li>
              <li>• Media creation (20%)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const Demographics = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <Monitor className="w-6 h-6 mr-3 text-blue-600" />
          Staff Demographics & IT Proficiency
        </h2>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600">92</div>
            <div className="text-sm text-gray-600">Teaching Staff</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">20</div>
            <div className="text-sm text-gray-600">Non-Teaching Staff</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-600">18</div>
            <div className="text-sm text-gray-600">Median Teaching Experience</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-orange-600">26</div>
            <div className="text-sm text-gray-600">Median Work Experience</div>
          </div>
          <div className="bg-cyan-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-cyan-600">99%</div>
            <div className="text-sm text-gray-600">Teachers Moderate+ IT Skills</div>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-teal-600">100%</div>
            <div className="text-sm text-gray-600">Non-Teachers Moderate+ IT Skills</div>
          </div>
        </div>
      </div>

      {/* Teaching Staff Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
          <BookOpen className="w-6 h-6 mr-3" />
          Academic Staff Profile (92 Respondents)
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-xl font-bold text-blue-600">54%</div>
            <div className="text-sm text-gray-600">High School Teachers</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-xl font-bold text-green-600">36%</div>
            <div className="text-sm text-gray-600">Primary Teachers</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-xl font-bold text-purple-600">29%</div>
            <div className="text-sm text-gray-600">English Teachers</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg text-center">
            <div className="text-xl font-bold text-yellow-600">35%</div>
            <div className="text-sm text-gray-600">Advanced IT Skills</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Grade Distribution</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• High School (8-12): 54%</li>
              <li>• Primary (1-7): 36%</li>
              <li>• Pre-Primary/Reception: 18%</li>
              <li><em>Note: Some teach multiple phases</em></li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Subject Areas</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• English: 29% of teachers</li>
              <li>• Sciences: 20% coverage</li>
              <li>• Languages (Greek, other): 20%</li>
              <li>• Mathematics: 14%</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-3">Experience & Skills</h4>
            <ul className="text-sm text-purple-700 space-y-1">
              <li>• 18 years median total experience</li>
              <li>• 8 years median at IIE</li>
              <li>• 64% moderate IT skills</li>
              <li>• 35% advanced IT skills</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Non-Teaching Staff Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
          <Settings className="w-6 h-6 mr-3" />
          Non-Teaching Staff Profile (20 Respondents)
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-xl font-bold text-green-600">40%</div>
            <div className="text-sm text-gray-600">General Administration</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-xl font-bold text-blue-600">20%</div>
            <div className="text-sm text-gray-600">Finance</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-xl font-bold text-purple-600">6</div>
            <div className="text-sm text-gray-600">Years Median at IIE</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg text-center">
            <div className="text-xl font-bold text-yellow-600">40%</div>
            <div className="text-sm text-gray-600">Advanced IT Skills</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Department Breakdown</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• General Administration: 40%</li>
              <li>• Finance: 20%</li>
              <li>• HR: 10%</li>
              <li>• Alumni Office: 10%</li>
              <li>• Marketing, Operations, etc.: 20%</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Experience Profile</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• 6 years median at SAHETI</li>
              <li>• 20 years median external experience</li>
              <li>• Range: 1-25 years at school</li>
              <li>• 75% have 9+ years external experience</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-3">IT Proficiency</h4>
            <ul className="text-sm text-purple-700 space-y-1">
              <li>• 40% advanced IT skills</li>
              <li>• 60% moderate IT skills</li>
              <li>• 0% low IT proficiency</li>
              <li>• Higher advanced % than teachers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Comparison & Insights */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Group Comparison & Implementation Insights</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-3">Key Similarities</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Both groups show high IT proficiency (99%+ moderate or advanced)</li>
              <li>• No significant difference in GenAI adoption between moderate and advanced users</li>
              <li>• Both groups experienced professionals with substantial expertise</li>
              <li>• Strong representation across school functions</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Key Differences</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Non-teaching staff: Higher % advanced IT skills (40% vs 35%)</li>
              <li>• Teaching staff: Longer experience, more subject diversity</li>
              <li>• Non-teaching: Higher external experience (20 vs 8 years median)</li>
              <li>• Different professional development needs and contexts</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h4 className="font-medium text-blue-800 mb-2">Strategic Implementation Insights:</h4>
          <p className="text-sm text-blue-700">
            Both staff groups show strong readiness for AI adoption with excellent IT foundations. 
            The high experience levels (18 years teaching, 20 years external for admin) suggest 
            adaptability and wisdom in technology integration. However, the 44% survey non-response 
            rate indicates potential underrepresentation of less tech-confident staff who may need 
            additional support during AI implementation.
          </p>
        </div>
      </div>
    </div>
  );

  const Feedback = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <MessageSquare className="w-6 h-6 mr-3 text-blue-600" />
          Open Feedback & Suggestions
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600">76%</div>
            <div className="text-sm text-gray-600">Want Training</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">61%</div>
            <div className="text-sm text-gray-600">Want Paid Tools</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-600">58%</div>
            <div className="text-sm text-gray-600">Need Approved List</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-yellow-600">82</div>
            <div className="text-sm text-gray-600">Detailed Responses</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-3">Top Support Requests</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Hands-on training workshops (76%)</li>
              <li>• Premium tool subscriptions (61%)</li>
              <li>• Vetted approved tools list (58%)</li>
              <li>• Clear policies and guidelines</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-3">Desired Use Cases</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Lesson planning & preparation</li>
              <li>• Teaching resources creation</li>
              <li>• Student support & differentiation</li>
              <li>• Administrative & communication tasks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const Recommendations = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <Target className="w-6 h-6 mr-3 text-blue-600" />
          Recommendations & Action Plan
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-red-50 p-4 rounded-lg text-center border border-red-200">
            <div className="text-lg font-bold text-red-600">Immediate</div>
            <div className="text-sm text-gray-600">Policies & Tools</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg text-center border border-yellow-200">
            <div className="text-lg font-bold text-yellow-600">Short-term</div>
            <div className="text-sm text-gray-600">Training & Infrastructure</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-200">
            <div className="text-lg font-bold text-blue-600">Medium-term</div>
            <div className="text-sm text-gray-600">Pilots & Education</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
            <div className="text-lg font-bold text-green-600">Long-term</div>
            <div className="text-sm text-gray-600">Monitor & Optimize</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border rounded-lg p-4 border-l-4 border-red-500">
            <h3 className="font-semibold text-gray-800 flex items-center mb-2">
              <Shield className="w-5 h-5 mr-2 text-red-600" />
              1. Develop Clear GenAI Usage Policies
            </h3>
            <p className="text-sm text-gray-600 mb-2">Create comprehensive policies for ethical staff and student use</p>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm">Immediate Priority</span>
          </div>
          
          <div className="border rounded-lg p-4 border-l-4 border-yellow-500">
            <h3 className="font-semibold text-gray-800 flex items-center mb-2">
              <Users className="w-5 h-5 mr-2 text-yellow-600" />
              2. Provide Comprehensive Training
            </h3>
            <p className="text-sm text-gray-600 mb-2">Tiered training program from basic to advanced AI applications</p>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm">Short-term Priority</span>
          </div>
          
          <div className="border rounded-lg p-4 border-l-4 border-blue-500">
            <h3 className="font-semibold text-gray-800 flex items-center mb-2">
              <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
              3. Launch Pilot Projects
            </h3>
            <p className="text-sm text-gray-600 mb-2">Structured pilots to demonstrate effective AI integration</p>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm">Medium-term Priority</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200 mt-6">
          <h3 className="text-lg font-semibold mb-3 text-blue-800">Expected Outcomes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-green-800 mb-2">Efficiency Gains:</h4>
              <ul className="text-green-700 space-y-1">
                <li>• Reduced lesson planning time</li>
                <li>• Faster administrative reporting</li>
                <li>• Enhanced student engagement</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Staff Development:</h4>
              <ul className="text-blue-700 space-y-1">
                <li>• Increased AI comfort levels</li>
                <li>• Higher tool adoption rates</li>
                <li>• Innovation in teaching methods</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-purple-800 mb-2">Risk Mitigation:</h4>
              <ul className="text-purple-700 space-y-1">
                <li>• Maintained academic integrity</li>
                <li>• Clear ethical guidelines</li>
                <li>• Controlled student AI use</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch(activeSection) {
      case 'overview': return <ExecutiveSummary />;
      case 'general': return <GeneralUsage />;
      case 'teaching': return <Teaching />;
      case 'learners': return <Learners />;
      case 'admin': return <Administration />;
      case 'demographics': return <Demographics />;
      case 'feedback': return <Feedback />;
      case 'recommendations': return <Recommendations />;
      default: return <ExecutiveSummary />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-gray-900">SAHETI GenAI Survey Results</h1>
          <p className="text-gray-600 mt-1">Complete Analysis Dashboard - May-July 2025</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-gray-800 mb-4">Survey Sections</h3>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const IconComponent = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                        activeSection === section.id
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 mr-3" />
                      <span className="text-sm">{section.title}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Quick Stats Panel */}
              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">Quick Stats</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Responses:</span>
                    <span className="font-medium">{keyStats.totalResponses}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Response Rate:</span>
                    <span className="font-medium">{keyStats.responseRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Work Usage:</span>
                    <span className="font-medium">{keyStats.genAiUsage}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Want Training:</span>
                    <span className="font-medium">{keyStats.trainingRequests}%</span>
                  </div>
                </div>
              </div>

              {/* Section Progress */}
              <div className="mt-4 bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-2">Navigation</h4>
                <div className="text-xs text-blue-600">
                  Section {sections.findIndex(s => s.id === activeSection) + 1} of {sections.length}
                </div>
                <div className="mt-2 bg-blue-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{width: `${((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100}%`}}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderSection()}
            
            {/* Navigation Footer */}
            <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
              <div className="flex justify-between items-center">
                <button
                  onClick={() => {
                    const currentIndex = sections.findIndex(s => s.id === activeSection);
                    if (currentIndex > 0) {
                      setActiveSection(sections[currentIndex - 1].id);
                    }
                  }}
                  disabled={sections.findIndex(s => s.id === activeSection) === 0}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ← Previous
                </button>
                
                <span className="text-sm text-gray-600">
                  {sections.find(s => s.id === activeSection)?.title}
                </span>
                
                <button
                  onClick={() => {
                    const currentIndex = sections.findIndex(s => s.id === activeSection);
                    if (currentIndex < sections.length - 1) {
                      setActiveSection(sections[currentIndex + 1].id);
                    }
                  }}
                  disabled={sections.findIndex(s => s.id === activeSection) === sections.length - 1}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteDashboard;