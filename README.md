# 💁👌 Scott Young Website 👌💁

I built a JAMStack website out of the convienience in this automation stack via Gatsby Cloud which integrates DatoCMS and Netlify. Once you linked this Github repository, Gatsby Cloud will be initiating the build process and push the changes to Netlify. The goal of this project is to show how easily you can create static sites using the content (text, images, links, etc.) stored on [DatoCMS](https://www.datocms.com).

## Repo usage

First, install the dependencies of this project:

```
yarn install
```

Add an `.env` file containing the read-only API token of your DatoCMS site:

```
echo 'DATO_API_TOKEN=abc123' >> .env
```

Then, to run this website in development mode (with live-reload):

```
yarn develop
```

To build the final, production ready static website:

```
yarn build
```

The final result will be saved in the `public` directory.


