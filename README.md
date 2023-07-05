<div align="center">

# Feelsbot

</div>

Hello internet! This is [Feelsbot](https://www.feelsbot.me/). Feelsbot tries to understand how humans are feeling by reading their tweets. Feelsbot can analyze Tweets of any geographical location or any public Twitter profile.

<div align="center">

![Map Gif](https://www.alli.science/assets/img/feelsbot.gif)

</div>

Feelsbot uses artificial intelligence to analyze emotional sentiment in Tweets. Play around with Feelsbot and see if it surprises in any way.

## How Feelsbot Works

### Overview

Feelsbot uses a machine learning model from IBM to analyze emotions in
tweets. Using this model, Feelsbot put tweets into five categories: joy, sadness, anger, fear, and disgust. This model only works in English, limiting the number of tweets Feelsbot can analyze. Each tweet receives a score, called a confidence score, of how strongly it matches one of those categories. Feelsbot puts tweets that have a confidence score higher than 65% in each category. Once the tweets have been categorized, the joy meter is calculated as the percentage of joyful tweets versus every other emotion.

When using the map, Feelsbot uses Twitter's API to fetch the last 100 tweets that are geotagged near the location entered. If there are not many recent geotagged tweets near that location, Twitter fetches tweets of users whose profile locations are nearby. When analyzing tweets by a specific Twitter account, Feelsbot fetches the last 150 tweets by that account. Twitter profiles need to be public for Feelsbot to work.

### Technology Stack

Feelsbot was built using IBM Watson, React, and GraphQL. The GraphQL Server sends requests to the Twitter and IBM APIs. The client was built using React and JavaScript.

### GraphQL Server

The GraphQL API serves as a wrapper around the API calls to Twitter and IBM. The GraphQL server exposes just one flexible endpoint for the client to consume, which makes integration between the client and the server very smooth. The resolvers for the GraphQL API are written in Node.js. The GraphQL server is deployed via a serverless service called Vercel.

#### Example Queries

The client can query the GraphQL server for the emotional sentiment of any text. The category field returns the highest category.

```
emotion(text: String!){
  category
}
```

The client query all tweets from a certain location. By taking advantage of GraphQL's graphical nature, the client can ask for the emotional sentiment of these tweets in the same query.

```
tweets: tweets(lat: Float!, lng: Float!, m: Int!) {
  id_str
  text
  url
  retweeted_status
  user {
    screen_name
  }
  emotion {
    category
  }
}
```

The client can query the emotional sentiment of tweets from any Twitter user.

```
tweets: user(screen_name: String!) {
  id_str
  text
  retweeted_status
  user {
    screen_name
  }
  emotion {
    category
  }
}
```

Lastly, the client can query for all Twitter profile handles matching a string. This is used in the autocompleting dropdown when searching for users.

```
autocomplete(text: String!) {
  name
  screen_name
  profile_image_url
  description
}
```

### React Client

The client-side code is written in React. The React client queries the GraphQL server using the client library for Apollo GraphQL. The React components are styled using styled-components.

## Inspiration for Creating Feelsbot

There are a few reasons why I created Feelsbot. First off, I was inspired by how easy it is to hop in and use some of the machine learning APIs from IBM and Google. Additionally, I wanted to create a software project to help people better understand how AI works.

Feelsbot highlights a couple of important things about AI and natural language processing.

- Many machine learning models have a rather simplistic view of emotion, and can’t pick up on subtle things, such as sarcasm.
- Sometimes figures of speech can throw off the model, for example, "I'm so happy I could cry" is detected as sad with a 65% confidence.

Although Feelsbot is not perfect, it’s more accurate than you might expect! I am often surprised by how well it can categorize more ambiguous tweets. Try it out to see for yourself.

## Contributors

1. Feelsbot was created by Allison Colyer
2. Robot drawings were created by Ruby Ríos
3. Big thanks to Novvum for supporting the development of Feelsbot

<table>
  <tr>
    <td align="center"><a href="https://github.com/allicolyer"><img src="https://avatars1.githubusercontent.com/u/11083917?s=460&v=4" width="200px;" alt="Picture of Allison Colyer"/><br /><b>Alli Colyer</b></a></td>
    <td align="center"><a href="https://www.rubyrios.com"><img src="https://roobeedotorg.files.wordpress.com/2019/10/ruby.png?w=400" width="200px;" alt="Picture of Ruby Rios"/><br /><b>Ruby Ríos</b></a></td>
    <td align="center"><a href="https://www.novvum.io"><img src="https://pbs.twimg.com/profile_images/1668795641462689793/Rva68oqK_400x400.jpg" width="200px;" alt="Novvum Logo"/><br /><b>Novvum</b></a></td>
  </tr>
</table>
