import React, { useState } from 'react';
import Icon from '../../../components/ui/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

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

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/?.test(formData?.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData?.role) {
      newErrors.role = 'Please select your role';
    }

    if (!agreedToTerms) {
      newErrors.terms = 'You must agree to the terms';
    }

    setErrors(newErrors);
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
        [name]: ''
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
        role: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    localStorage.setItem('equibudx_user_role', formData?.role);
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
              Check your email at <span className="font-semibold text-foreground">{formData?.email}</span> for your confirmation and future updates.
            </p>

            <div className="bg-background rounded-lg p-6 mb-6">
              <h3 className="font-headline font-bold text-xl text-foreground mb-4">
                What Happens Next?
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={20} color="var(--color-primary)" className="mt-1 flex-shrink-0" />
                  <p className="font-body text-foreground">
                    <span className="font-semibold">Confirmation Email:</span> Arriving in your inbox within 5 minutes
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Calendar" size={20} color="var(--color-secondary)" className="mt-1 flex-shrink-0" />
                  <p className="font-body text-foreground">
                    <span className="font-semibold">Launch Updates:</span> Weekly progress reports on platform development
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-6">
              <p className="font-body text-sm text-muted-foreground mb-4 text-center">
                I'm interested as a:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => handleRoleSelect('coach')}
                  className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                    formData?.role === 'coach' ?'border-primary bg-primary/5 shadow-cta' :'border-border hover:border-muted'
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      formData?.role === 'coach' ? 'bg-primary/10' : 'bg-muted'
                    }`}>
                      <Icon name="Users" size={32} color={formData?.role === 'coach' ? 'var(--color-primary)' : 'var(--color-muted-foreground)'} />
                    </div>
                    <div>
                      <p className="font-headline font-bold text-lg text-foreground">Coach</p>
                      <p className="font-body text-sm text-muted-foreground">Fair fees, equal support</p>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleRoleSelect('client')}
                  className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                    formData?.role === 'client' ?'border-secondary bg-secondary/5 shadow-cta' :'border-border hover:border-muted'
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      formData?.role === 'client' ? 'bg-secondary/10' : 'bg-muted'
                    }`}>
                      <Icon name="User" size={32} color={formData?.role === 'client' ? 'var(--color-secondary)' : 'var(--color-muted-foreground)'} />
                    </div>
                    <div>
                      <p className="font-headline font-bold text-lg text-foreground">Client</p>
                      <p className="font-body text-sm text-muted-foreground">Authentic growth awaits</p>
                    </div>
                  </div>
                </button>
              </div>
              {errors?.role && (
                <p className="mt-2 text-sm text-error text-center">{errors?.role}</p>
              )}
            </div>

            {formData?.role && (
              <div className="space-y-4 animate-fade-in">
                <div className="bg-accent/10 rounded-lg p-4 mb-4">
                  <p className="font-body text-sm text-foreground text-center">
                    Thank you for showing interest! We will keep you updated on our progress and launch date.
                  </p>
                </div>

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
              </div>
            )}
          </form>
        </div>

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