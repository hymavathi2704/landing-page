import React, { useState } from 'react';
import Icon from '../../../components/ui/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';
import axios from 'axios'; 

const WaitlistSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  // NEW STATE: Controls the visibility of the pop-up form
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone is now optional but validate format if present
    if (formData?.phone?.trim() && !/^\+?[\d\s-()]+$/?.test(formData?.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData?.role) {
      newErrors.role = 'Please select your role';
    }

    if (!agreedToTerms) {
      newErrors.terms = 'You must agree to the terms';
    }

    // Clear previous submission error when validating
    setErrors({ ...newErrors, submit: '' }); 
    return Object.keys(newErrors)?.length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
        submit: '' // Clear submission error on input change
      }));
    }
  };

  const handleRoleSelect = (role) => {
    setFormData(prev => ({
      ...prev,
      role
    }));
    if (errors?.role) {
      setErrors(prev => ({
        ...prev,
        role: '',
        submit: '' // Clear submission error on role change
      }));
    }
    // NEW: Open the modal pop-up immediately after selecting the role
    setIsModalOpen(true);
  };


  const handleSubmit = async (e) => {
    e?.preventDefault();

    if (!validateForm()) {
      // Scroll to the first error
      const firstErrorElement = document.querySelector('.text-error');
      if (firstErrorElement) {
        firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // API call to the Node.js backend running on port 5000
      await axios.post('http://localhost:5000/api/waitlist', formData);

      setIsSubmitted(true);
      localStorage.setItem('equibudx_user_role', formData?.role);
      // NEW: Close modal on successful submission
      setIsModalOpen(false); 

    } catch (error) {
      console.error('Waitlist submission failed:', error);
      
      let errorMessage = 'Failed to submit interest. Please check your connection.';
      
      if (error.response) {
        // The request was made and the server responded with a status code
        if (error.response.status === 409) {
          // 409 Conflict: Email already exists (from your backend logic)
          errorMessage = error.response.data?.message || 'That email is already registered. Thank you for your continued interest!';
        } else if (error.response.status === 500) {
          // 500 Server Error
          errorMessage = 'A server error occurred. Please try again later.';
        } else {
          errorMessage = error.response.data?.message || `Error: ${error.response.status} returned from server.`;
        }
      }

      setErrors(prev => ({
        ...prev,
        submit: errorMessage
      }));
    } finally {
      setIsSubmitting(false);
    }
  };


  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-cta text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center animate-bounce">
              <Icon name="Check" size={40} color="var(--color-success)" />
            </div>

            <h2 className="font-headline font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Interest Confirmed!
            </h2>

            <p className="font-body text-lg text-muted-foreground mb-6">
              Thank you for registering your interest! You will receive future updates.
            </p>

            <div className="bg-background rounded-lg p-6 mb-6">
              <h3 className="font-headline font-bold text-xl text-foreground mb-4">
                What Happens Next?
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <Icon name="Calendar" size={20} color="var(--color-secondary)" className="mt-1 flex-shrink-0" />
                  <p className="font-body text-foreground">
                    <span className="font-semibold">Launch Updates:</span> Regular progress reports on platform development
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Gift" size={20} color="var(--color-accent)" className="mt-1 flex-shrink-0" />
                  <p className="font-body text-foreground">
                    <span className="font-semibold">Future Access:</span> You will be notified when the platform is ready for users
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                iconName="ArrowUp"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Back to Top
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    role: '',
                    notes: ''
                  });
                  setAgreedToTerms(false);
                }}
                iconName="RefreshCw"
                iconPosition="left"
              >
                Submit Another
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Icon name="Rocket" size={20} color="var(--color-accent)" />
            <span className="font-body text-sm font-semibold text-accent-foreground">Future Platform Access</span>
          </div>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Show Your
            <span className="block text-primary mt-2">Interest & Join For Updates</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Be the first to know when the balanced coaching platform launches
          </p>
        </div>

        <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-cta">
          {/* Form wrapper is kept here only for the role selection and errors */}
          <div className="space-y-6">
            <div className="mb-6">
              <p className="font-body text-sm text-muted-foreground mb-4 text-center">
                I'm interested as a:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                
                {/* Coach Role Selection Card */}
                <div
                  onClick={() => handleRoleSelect('coach')}
                  className={`relative p-6 rounded-xl border-2 transition-all duration-200 cursor-pointer group ${
                    formData?.role === 'coach' ?'border-primary bg-primary/5 shadow-cta' :'border-border hover:border-muted'
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      formData?.role === 'coach' ? 'bg-primary/10' : 'bg-muted group-hover:bg-primary/5'
                    }`}>
                      <Icon name="Users" size={32} color={formData?.role === 'coach' ? 'var(--color-primary)' : 'var(--color-muted-foreground)'} />
                    </div>
                    <div>
                      <p className="font-headline font-bold text-lg text-foreground">Coach</p>
                      <p className="font-body text-sm text-muted-foreground">Fair fees, equal support</p>
                    </div>
                    {/* Checkbox-style indicator for Coach */}
                    <div className={`absolute top-3 right-3 h-5 w-5 rounded-sm border-2 flex items-center justify-center transition-colors duration-200 ${
                       formData?.role === 'coach' ? 'bg-primary border-primary' : 'bg-card border-border group-hover:border-primary'
                    }`}>
                      {formData?.role === 'coach' && <Icon name="Check" size={14} color="var(--color-primary-foreground)" />}
                    </div>
                  </div>
                </div>

                {/* Client Role Selection Card */}
                <div
                  onClick={() => handleRoleSelect('client')}
                  className={`relative p-6 rounded-xl border-2 transition-all duration-200 cursor-pointer group ${
                    formData?.role === 'client' ?'border-secondary bg-secondary/5 shadow-cta' :'border-border hover:border-muted'
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      formData?.role === 'client' ? 'bg-secondary/10' : 'bg-muted group-hover:bg-secondary/5'
                    }`}>
                      <Icon name="User" size={32} color={formData?.role === 'client' ? 'var(--color-secondary)' : 'var(--color-muted-foreground)'} />
                    </div>
                    <div>
                      <p className="font-headline font-bold text-lg text-foreground">Client</p>
                      <p className="font-body text-sm text-muted-foreground">Authentic growth awaits</p>
                    </div>
                     {/* Checkbox-style indicator for Client */}
                    <div className={`absolute top-3 right-3 h-5 w-5 rounded-sm border-2 flex items-center justify-center transition-colors duration-200 ${
                       formData?.role === 'client' ? 'bg-secondary border-secondary' : 'bg-card border-border group-hover:border-secondary'
                    }`}>
                      {formData?.role === 'client' && <Icon name="Check" size={14} color="var(--color-secondary-foreground)" />}
                    </div>
                  </div>
                </div>
              </div>
              {errors?.role && (
                <p className="mt-2 text-sm text-error text-center">{errors?.role}</p>
              )}
            </div>
            
            {/* Display guidance text if no role is selected */}
            {!formData?.role && (
              <div className="bg-accent/10 rounded-lg p-4 mb-4 text-center animate-fade-in">
                <p className="font-body text-sm text-foreground">
                  Select your role (Coach or Client) above to proceed and join the waitlist!
                </p>
              </div>
            )}
          </div>
          
        </div>
        
        {/* NEW: Modal Pop-up for the rest of the form */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-foreground/50 backdrop-blur-sm animate-fade-in">
            <div className="relative bg-card rounded-2xl shadow-cta max-w-lg w-full mx-4 p-6 lg:p-8 animate-slide-up max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  // Optional: Clear role and form data when closing without submitting
                  setFormData(prev => ({ name: '', email: '', phone: '', role: '', notes: '' })); 
                  setAgreedToTerms(false);
                  setErrors({});
                }}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Close modal"
              >
                <Icon name="X" size={24} />
              </button>

              <h3 className="font-headline font-bold text-2xl text-foreground mb-4 text-center">
                Complete Your Interest Form
              </h3>
              <p className="font-body text-center text-muted-foreground mb-6">
                You selected: <span className="capitalize font-semibold text-primary">{formData?.role}</span>. Complete your profile to secure your spot.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Form Fields - Moved from the inline section */}
                <Input
                  type="text"
                  label="Full Name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData?.name}
                  onChange={handleChange}
                  error={errors?.name}
                  required
                />

                <Input
                  type="email"
                  label="Email Address"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData?.email}
                  onChange={handleChange}
                  error={errors?.email}
                  description="We'll send you updates and notifications about the launch"
                  required
                />

                <Input
                  type="tel"
                  label="Phone Number"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData?.phone}
                  onChange={handleChange}
                  error={errors?.phone}
                  description="For important launch notifications only (optional)"
                />

                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">
                    Tell Us More (Optional)
                  </label>
                  <textarea
                    name="notes"
                    rows={4}
                    placeholder={formData?.role === 'coach' ?'What type of coaching do you offer? What are your goals with Equibudx?' :'What areas are you looking to grow in? What do you hope to achieve?'}
                    value={formData?.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors duration-200"
                  />
                </div>

                <div>
                  <Checkbox
                    label="I agree to receive updates about Equibudx launch and future opportunities"
                    checked={agreedToTerms}
                    onChange={(e) => {
                      setAgreedToTerms(e?.target?.checked);
                      if (errors?.terms) {
                        setErrors(prev => ({
                          ...prev,
                          terms: ''
                        }));
                      }
                    }}
                    error={errors?.terms}
                  />
                </div>
                
                {errors?.submit && (
                  <p className="mt-2 text-sm text-error text-center">{errors?.submit}</p>
                )}

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-cta"
                >
                  {isSubmitting ? 'Submitting Request...' : 'Show My Interest'}
                </Button>

                <p className="text-center font-body text-xs text-muted-foreground">
                  By submitting your information, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </div>
          </div>
        )}

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <div className="bg-card rounded-lg p-4 text-center">
            <Icon name="Shield" size={24} color="var(--color-primary)" className="mx-auto mb-2" />
            <p className="font-body text-sm text-foreground font-semibold">Secure & Private</p>
            <p className="font-body text-xs text-muted-foreground">Your data is protected</p>
          </div>
          <div className="bg-card rounded-lg p-4 text-center">
            <Icon name="Zap" size={24} color="var(--color-secondary)" className="mx-auto mb-2" />
            <p className="font-body text-sm text-foreground font-semibold">Instant Updates</p>
            <p className="font-body text-xs text-muted-foreground">Get notified immediately</p>
          </div>
          <div className="bg-card rounded-lg p-4 text-center">
            <Icon name="Gift" size={24} color="var(--color-accent)" className="mx-auto mb-2" />
            <p className="font-body text-sm text-foreground font-semibold">Future Opportunities</p>
            <p className="font-body text-xs text-muted-foreground">Be first in line</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;