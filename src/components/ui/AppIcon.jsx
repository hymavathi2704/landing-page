import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '../../utils/cn';

const Icon = ({ name, size = 24, color = "currentColor", className = "" }) => {
  if (!name) return null;

  // Dynamically retrieve the Lucide icon component based on the 'name' prop string.
  const LucideIcon = LucideIcons[name];

  if (!LucideIcon) {
    // Fallback: Use a generic AlertTriangle icon if the specific named icon is not found
    return (
      <LucideIcons.AlertTriangle size={size} color="var(--color-error)" className={cn("text-error", className)} />
    );
  }

  // Render the Lucide icon component
  return (
    <LucideIcon size={size} color={color} className={className} />
  );
};

Icon.displayName = 'AppIcon';

export default Icon;