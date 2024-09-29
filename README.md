# Personal Portfolio

Welcome to the repository for my personal portfolio website. This portfolio showcases my skills, projects, and professional journey.

## Technologies Used

This project is built using a powerful stack of technologies for web development:

- [**Next.js**](https://nextjs.org/): A React framework for production.
- [**TypeScript**](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [**Tailwind CSS**](https://tailwindcss.com/): A utility-first CSS framework for creating custom designs.
- [**Deno**](https://deno.land/): A modern runtime for JavaScript and TypeScript, used for serverless functions.
- [**Resend**](https://resend.com/): A modern email API for sending transactional emails.

## Features

- **Portfolio Showcase**: A curated selection of my projects and contributions, highlighting my skills in web development, design, and other areas of expertise.
- **Contact Form**: An easy way for visitors to leave messages or inquiries, directly integrated into my email using Resend.
- **Automated Email Notifications**: Automated responses to contact form submissions using Resend, ensuring that every message is acknowledged and I'm promptly notified.

## Recent Enhancements

- **Improved User Interaction**: Immediate feedback to users upon submitting the contact form, enhancing the overall user experience.
- **Upgraded Email Functionality**: Implemented Resend for more reliable and efficient email handling.

## Getting Started

To run this project locally:

1. **Node Version**: This project specifies a Node.js version in a .nvmrc file to ensure compatibility. If you have nvm (Node Version Manager) installed, set your Node version to match the project by running:

   nvm use

   If you don't have nvm installed, you can follow the installation instructions on the nvm GitHub page.

2. Clone the repository:
   git clone https://github.com/rlajous/website.git
   cd website

3. Install dependencies:
   npm install

4. Set up environment variables:

   - Create a .env.local file in the root directory.
   - Copy the contents of .env.template into .env.local.
   - Change the values of the environment variables to match your own configuration. You'll need to sign up for a Resend account to get an API key.

5. Start the development server:
   npm run dev
   The site should now be running on http://localhost:3000

## Deployment

This site is configured for deployment on [Vercel](https://vercel.com/), leveraging its seamless integration with GitHub for CI/CD. To deploy your version:

1. Fork this repository.
2. Connect your fork to Vercel.
3. Set up environment variables (including your Resend API key) in Vercel's project settings.

## Contributing

Feedback and contributions are always welcome! Please open an issue or submit a pull request with suggestions, questions, or enhancements.

## License

This project is open-source and available under the [MIT License](LICENSE)
