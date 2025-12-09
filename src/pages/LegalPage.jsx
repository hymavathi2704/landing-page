import React from 'react';
import Icon from 'components/ui/AppIcon';
import Button from 'components/ui/Button';

const LegalPage = ({ title, content, lastUpdated }) => {
  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card">
          <header className="mb-8 border-b border-border pb-6">
            <h1 className="font-headline font-bold text-3xl sm:text-4xl text-foreground mb-2">
              {title}
            </h1>
            {lastUpdated && (
              <p className="font-body text-sm text-muted-foreground">
                Last Updated: {lastUpdated}
              </p>
            )}
          </header>
          
          <div className="font-body text-base text-foreground space-y-6 leading-relaxed policy-content">
            {/* Render content dynamically. Content is expected to be an array of JSX elements or strings. */}
            {content}
          </div>

          <div className="mt-12 pt-6 border-t border-border flex justify-center">
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              iconName="ArrowLeft"
              iconPosition="left"
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;