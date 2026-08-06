import { Toaster } from "react-hot-toast";

const AppToaster = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={12}
      containerStyle={{
        top: 24,
        right: 24,
      }}
      toastOptions={{
        duration: 3500,

        style: {
          background: "var(--color-black-100)",
          color: "var(--color-white-100)",
          border: "1px solid var(--color-black-200)",
          borderRadius: "var(--radius-card)",
          padding: "16px 18px",
          fontSize: "14px",
          fontWeight: 500,
          boxShadow: "var(--shadow-toast)",
        },

        success: {
          iconTheme: {
            primary: "var(--color-accent-3)",
            secondary: "var(--color-primary)",
          },
        },

        error: {
          iconTheme: {
            primary: "var(--color-highlight)",
            secondary: "var(--color-primary)",
          },
        },

        loading: {
          iconTheme: {
            primary: "var(--color-accent)",
            secondary: "var(--color-primary)",
          },
        },
      }}
    />
  );
};

export default AppToaster;
