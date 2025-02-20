import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NUXT_SENDGRID_API_KEY);

export default defineEventHandler(async (event) => {
    const { firstName, lastName, email, message } = await readBody(event);

    const msg = {
        to: 'tanner.r.mead@gmail.com',
        from: 'admin@tannermead.com',
        subject: 'Contact Form Submission',
        html: `
      <p>Hello Tanner,</p>
      <p>You have received a contact form submission from ${firstName} ${lastName}.</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    `,
    };

    try {
        await sgMail.send(msg);
        return { message: 'Email sent successfully' };
    } catch (error) {
        throw createError({ statusCode: 500, statusMessage: 'Error sending email' });
    }
});