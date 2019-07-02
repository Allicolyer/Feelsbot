# Feelsbot

Feelsbot assess how humans are feeling by reading their tweets.

### How Feelsbot works

Feelsbot uses a machine learning model from IBM to analyze emotions in
tweets. Using this algorithm, Feelsbot put tweets into five categories:
joy, sadness, anger, fear and disgust. This algorithm only works in
English, so Feelsbot can only analyze tweets that are in English. Each
tweet receives a confidence level of how strongly it matches one of
those categories. Feelsbots puts tweets that have a confidence level
higher than 65% into each category. Once the tweets have been
categorized, the joy meter is calculated as the percentage joyful tweets
versus every other emotion.

When using the map, Feelsbot uses Twitter's API to fetch the last 100
tweets that are geotagged near the location entered. Often times, there
are not many recent geotagged tweets. When this happens Twitter fetches
tweets of users whose profile locations are near the location entered
into the map. When analyzing tweets by a specific Twitter account,
Feelsbot fetches the last 150 tweets by that account. Twitter profiles
need to be public for Feelsbot to work.

### What we can learn from Feelsbot

The way Feelsbot categorizes tweets can tell us a lot about the nuances
of human language that are hard for a machine to pick up on. Did
Feelsbot surprise you in any way? If you want to explore more with
natural language processing, check out IBM's [demo](https://natural-language-understanding-demo.ng.bluemix.net/) of their machine learning model.

### Contributors

1.  Feelbot was created by [Allison Colyer](https://twitter.com/allicolyer)
2.  Robot drawings were created by[Ruby Ríos.](https://www.rubyrios.com)
3.  Big thanks to [Novvum](https://www.novvum.io/) for supporting the development of Feelsbot.

If you liked this AI experiment, please share it with your friends. Feel free to add me on [Twitter](https://www.twitter.com/allicolyer) or reach out with any issues.
