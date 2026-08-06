export const config = {
  emailServiceId: String(import.meta.env.VITE_EMAIL_SERVICE_ID),
  emailTemplateId: String(import.meta.env.VITE_EMAIL_TEMPLATE_ID),
  emailPublicKey: String(import.meta.env.VITE_EMAIL_PUBLIC_KEY),
  myEmail: String(import.meta.env.VITE_MY_EMAIL),
  myName: String(import.meta.env.VITE_MY_NAME),
};
