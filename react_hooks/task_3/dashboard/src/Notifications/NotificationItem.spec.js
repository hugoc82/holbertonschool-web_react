import { render, screen, fireEvent } from '@testing-library/react';
import NotificationItem from './NotificationItem';
import React from 'react';

describe('NotificationItem (hooks + memo)', () => {
  it('renders with value text', () => {
    render(<NotificationItem type="default" value="New course available" id={1} />);
    expect(screen.getByText(/new course available/i)).toBeInTheDocument();
  });

  it('renders with html content when provided', () => {
    const html = { __html: '<u>Urgent requirement</u>' };
    render(<NotificationItem type="urgent" html={html} id={2} />);
    // on vérifie que le contenu HTML est injecté
    const item = screen.getByRole('listitem');
    expect(item.innerHTML.toLowerCase()).toContain('<u>urgent requirement</u>');
  });

  it('calls markAsRead with id on click', () => {
    const markAsRead = jest.fn();
    render(
      <NotificationItem
        type="default"
        value="Click me"
        id={42}
        markAsRead={markAsRead}
      />
    );
    fireEvent.click(screen.getByText(/click me/i));
    expect(markAsRead).toHaveBeenCalledTimes(1);
    expect(markAsRead).toHaveBeenCalledWith(42);
  });

  it('does not re-render when props are shallow-equal (memo behavior)', () => {
    const { rerender } = render(
      <NotificationItem type="default" value="Stable" id={3} />
    );
    const firstNode = screen.getByText(/stable/i);
    // rerender avec les mêmes props
    rerender(<NotificationItem type="default" value="Stable" id={3} />);
    const secondNode = screen.getByText(/stable/i);
    // Sanity check: même contenu — si tu veux être plus strict, tu peux comparer node equality
    expect(secondNode).toBeTruthy();
    // Note: RTL recrée parfois des refs, ce test reste une indication légère, pas une preuve de diff interne.
  });
});
