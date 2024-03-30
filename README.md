# Personal Portfolio

Welcome to the repository for my personal portfolio website. This portfolio is designed to showcase my skills, projects, and professional journey. It's built with modern web technologies and includes a contact form with automated email responses for improved interaction with visitors.

## Features

- **Portfolio Showcase**: A curated selection of my projects and contributions, highlighting my skills in web development, design, and other areas of expertise.
- **Contact Form**: An easy way for visitors to leave messages or inquiries, directly integrated into my email.
- **Automated Email Notifications**: Automated responses to contact form submissions, ensuring that every message is acknowledged and I'm promptly notified.

## Recent Enhancements

- **Deno-based Email Automation**: Integration with Deno runtime and Supabase Edge Functions for server-side logic handling email notifications.
- **Secure Environment Variable Management**: Utilizes Supabase for securely managing and accessing API keys and sensitive information required for email automation.
- **Improved User Interaction**: Immediate feedback to users upon submitting the contact form, enhancing the overall user experience.

## Getting Started

To run this project locally:

1. Ensure you have [Node.js](https://nodejs.org/) installed.\n2. Clone the repository:
   ```bash
    git clone https://github.com/rlajous/website.git
    cd website
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The site should now be running on [http://localhost:3000](http://localhost:3000).

## Deployment

This site is configured for deployment on [Vercel](https://vercel.com/), leveraging its seamless integration with GitHub for CI/CD. To deploy your version:

1. Fork this repository.
2. Connect your fork to Vercel.
3. Set up environment variables as needed in Vercel's project settings.

## Contributing

Feedback and contributions are always welcome! Please open an issue or submit a pull request with any suggestions, questions, or enhancements.

## License

This project is open-source and available under the [MIT License](LICENSE).
