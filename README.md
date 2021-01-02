<p align="center">
   <img src=".github/gobarber-logo.jpg" alt="GoBarber"/>
</div>

# :page_with_curl: Table of Contents

* [About](#information_source-about)
* [Requirements](#page_with_curl-requirements)
* [Technologies](#computer-technologies)
* [Databases](#floppy_disk-databases)
* [Features](#rocket-features)
* [How to run](#seedling-how-to-run)
* [License](#pencil-license)

# :information_source: About

GoBarber is a application to make appointments with hairdressers or barbers. The application has Web and Mobile versions, that was developed during the bootcamp GoStack offered by RocketSeat. This is the API that the web and mobile applications consumes.

# :page_with_curl: Requirements

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) (optional)
- [Docker](https://www.docker.com/) (optional)
- [AWS account](https://aws.amazon.com/) (optional)
- [Git](https://git-scm.com/) (to clone the repository)

# :computer: Technologies

- Node.js
- Typescript
- Express
- TypeORM
- Amazon S3
- Amazon SES

# :floppy_disk: Databases

- Postgres: used to store the main data of the application.
- MongoDB: used to store the notifications sent to the service providers.
- Redis: used to cache data.

### Docker containers

If you want, you can to create the databases instances in Docker containers.

```bash
$ docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
$ docker run --name mongodb -p 27017:27017 -d -t mongo
$ docker run --name redis -p 6379:6379 -d -t redis:alpine
```
To run the containers again, you just need to start the containers, using their names, because they have already been created.

```bash
$ docker start postgres
$ docker start mongo
$ docker start redis
```

**If you choose not to use the Docker, you must install each database manually.**

# :rocket: Features

### Users

- Create an user
- Update user avatar
- Update user profile
- Login and authentication
- Recover password

### Providers

- List providers.
- List the availability of a provider in a month (whether or not there are times available on each day of the month).
- List the availability of a provider in a day (available and unavailable times).
- List the appointments of a day from a provider.

### Appointments

- Create an appointment.

# :gear: Configurations

It is necessary to create an file called **.env** at the root of the project, that will contain the environtment variables. There is a file called **.env.example** with the necessary variables.
In addition, there is a folder called config at the src folder, which contains some other configurations.

### AWS SES

The application can use **AWS SES** to send e-mails. For this, the first step it is change the value of the variable **MAIL_DRIVER** in the .env file to **ses**. The default it is **ethereal**, that is used in development.
You need to have an [AWS](https://aws.amazon.com/) account. If you don't have, it's necessary to create.

After that, go to **Simple Email Service** and select the **Domains** option. You need to have an domain and configure it in the AWS SES, at the option **Verify a new domain**.  After finishing, enter the information returned in your domain's DNS. This can take up to 48 hours to verify.

If you have an user created, only add the **AwsSESFullAccess** permision, for a admin user (you can change it). If you don't have a user, you need to go to **IAM** in the AWS console to create one. Select the **Users** option and after, the **Add user** option. Define the user name and select the option **Programatic access**. After that, select the user at the list of users and select the option **Add permissions**. Select the option **Attach existing policies directly** and select **AmazonSESFullAccess**, for a admin user. You can change it. Put the access key id returned it the enviroment variable **AWS_ACCESS_KEY_ID** in the .env file and the secret access key in the environtment variable **AWS_SECRET_ACCESS_KEY**.

Finally, check the configurations in the file **mail.ts**, located in src/config.

### AWS S3

The application can use **AWS S3** to store users' avatars. For this, the first step it is change the value of the variable **STORAGE_DRIVER** in the .env file to **s3**. The default it is **disk**, that is used in development to storage the avatars in a folder in the server.
You need to have an [AWS](https://aws.amazon.com/) account. If you don't have, it's necessary to create.

After that, go to **S3** service and select the **Create bucket** option. Define the bucket name and region and uncheck the **Block all public access** option, because the images need to be accessed publicly.

If you have an user created, only add the **AwsS3FullAccess** permision, for a admin user (you can change it). If you don't have a user, you need to go to **IAM** in the AWS console to create one. Select the **Users** option and after, the **Add user** option. Define the user name and select the option **Programatic access**. After that, select the user at the list of users and select the option **Add permissions**. Select the option **Attach existing policies directly** and select **AmazonS3FullAccess**, for a admin user. You can change it. Put the access key id returned it the enviroment variable **AWS_ACCESS_KEY_ID** in the .env file and the secret access key in the environtment variable **AWS_SECRET_ACCESS_KEY**.

Finally, check the configurations in the file **upload.ts**, located in src/config and change the name of the bucket.

# :seedling: How to run

```bash
# Clone the repository
$ git clone https://github.com/lucas-almeida-silva/gobarber-api.git

# Go to the project folder
$ cd gobarber-api

# Install Dependencies
$ yarn
# or npm install

# Run the application
$ yarn dev:server
# or npm run dev:server
```
Access the API at http://localhost:3333

You can use [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/download/core/) to make requests to the API.

# :pencil: License

This project is under the [MIT license](LICENSE).
