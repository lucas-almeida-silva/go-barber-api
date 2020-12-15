interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethreal',

  defaults: {
    from: {
      email: 'lucas@lucassilva.dev',
      name: 'Lucas Silva',
    },
  },
} as IMailConfig;
