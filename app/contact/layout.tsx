import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Plan your next event with DHARA Event Pvt. Ltd. Contact our executive team in Bengaluru for sports, corporate, wedding, and live entertainment production.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
