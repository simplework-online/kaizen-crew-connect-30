
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowLeft, Send, User, Mail, Phone, MapPin, FileText, Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Bewerbung = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [selectedJob, setSelectedJob] = useState<string>('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    motivation: ''
  });

  const jobTypes = [
    { id: 'logistic', name: 'Logistik', emoji: '📦' },
    { id: 'service', name: 'Service', emoji: '🍽️' },
    { id: 'barkeeper', name: 'Barkeeper', emoji: '🍸' },
    { id: 'kitchen', name: 'Küchenhilfe', emoji: '👨‍🍳' }
  ];

  useEffect(() => {
    if (location.state?.selectedJob) {
      setSelectedJob(location.state.selectedJob);
    }
  }, [location.state]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { ...formData, selectedJob });
    alert('Bewerbung erfolgreich gesendet! Wir melden uns bald bei Ihnen.');
  };

  const getJobName = (jobId: string) => {
    return jobTypes.find(job => job.id === jobId)?.name || '';
  };

  const getJobEmoji = (jobId: string) => {
    return jobTypes.find(job => job.id === jobId)?.emoji || '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/mitspieler')}
            className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            {t('application.back')}
          </button>
          
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 px-2">
              {t('application.title')}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              {t('application.subtitle')}
            </p>
          </div>
        </div>

        {/* Form Card */}
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <User className="w-6 h-6 mr-2" />
              {t('application.personal.title')}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Job Selection */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
                <label className="block text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {t('application.position')}
                </label>
                <select
                  name="selectedJob"
                  value={selectedJob}
                  onChange={(e) => setSelectedJob(e.target.value)}
                  className="w-full p-4 border-2 border-indigo-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-lg"
                  required
                >
                  <option value="">{t('application.position.select')}</option>
                  {jobTypes.map(job => (
                    <option key={job.id} value={job.id}>
                      {job.emoji} {job.name}
                    </option>
                  ))}
                </select>
                {selectedJob && (
                  <div className="mt-4 p-4 bg-white rounded-lg border border-indigo-100">
                    <p className="text-indigo-700 font-medium">
                      {t('application.position.selected')} {getJobEmoji(selectedJob)} {getJobName(selectedJob)}
                    </p>
                  </div>
                )}
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-2">
                    {t('application.firstname')} *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-2">
                    {t('application.lastname')} *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-2 flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    {t('application.email')} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-2 flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    {t('application.phone')} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Address Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  {t('application.address.title')}
                </h3>
                
                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-2">
                    {t('application.address.street')} *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold text-gray-800 mb-2">
                      {t('application.address.postal')} *
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-lg font-semibold text-gray-800 mb-2">
                      {t('application.address.city')} *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Motivation */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  {t('application.motivation')}
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder={t('application.motivation.placeholder')}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-12 py-4 rounded-xl text-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center mx-auto"
                >
                  <Send className="w-6 h-6 mr-2" />
                  {t('application.submit')}
                </button>
                <p className="text-gray-500 mt-4">
                  {t('application.response')}
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Bewerbung;
