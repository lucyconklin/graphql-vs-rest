# GraphQL vs REST APIs

A quick tutorial introduction to GraphQL and how it differs from a REST API.

## What is GraphQL?

GraphQl is an alternative to REST developed at Facebook and publicly released in 2015.

When the project was started in 2012 the mobile site was little more than a wrapper around the desktop site, crashed frequently, and performed poorly. The developers saw there was a big problem with how data was being sent and often dealt with over-fetching, under-fetching, and writing a lot of code to prepare and parse the data.

To solve these problems they created GraphQL which sends a string to a server which returns JSON back to the client. Using this system, developers could specify the information that they wanted, no more and no less, and get back a response that mirrors the query.

It also resolves the need for a version number on an API. Servers become simpler, and additional fields can be added while leaving existing clients unaffected. Depreciated fields can continue to function.

#### 'A query language for your API'

## Let's see an example

### Star Wars REST API

Using the [Star Wars API](https://swapi.co/), we can get any character's information with their user id.
Go to [.../api/people/4](https://swapi.co/api/people/4) to get this information:
```
{
    "name": "Darth Vader", 
    "height": "202", 
    "mass": "136", 
    "hair_color": "none", 
    "skin_color": "white", 
    "eye_color": "yellow", 
    "birth_year": "41.9BBY", 
    "gender": "male", 
    "homeworld": "https://swapi.co/api/planets/1/", 
    "films": [
        "https://swapi.co/api/films/2/", 
        "https://swapi.co/api/films/6/", 
        "https://swapi.co/api/films/3/", 
        "https://swapi.co/api/films/1/"
    ], 
    "species": [
        "https://swapi.co/api/species/1/"
    ], 
    "vehicles": [], 
    "starships": [
        "https://swapi.co/api/starships/13/"
    ], 
    "created": "2014-12-10T15:18:20.704000Z", 
    "edited": "2014-12-20T21:17:50.313000Z", 
    "url": "https://swapi.co/api/people/4/"
}
```

But what if we didn't need all that? What if our app is never going to need mass or vehicles or eye color? 

### Star Wars GraphQl API

Ok, now go to the [Star Wars GraphQl API](http://graphql.org/swapi-graphql/) and type in the following: 
```
{
  person(personID: 4) {
    name,
    birthYear,
    homeworld {
      name
    },
    filmConnection {
      films {
        title
      }
    }
  }
}
```

You should see a much simpler response like this: 
```
{
  "data": {
    "person": {
      "name": "Darth Vader",
      "birthYear": "41.9BBY",
      "homeworld": {
        "name": "Tatooine"
      },
      "filmConnection": {
        "films": [
          {
            "title": "A New Hope"
          },
          {
            "title": "The Empire Strikes Back"
          },
          {
            "title": "Return of the Jedi"
          },
          {
            "title": "Revenge of the Sith"
          }
        ]
      }
    }
  }
}
```

## Resources

* [GraphQl: A data query language](https://code.facebook.com/posts/1691455094417024)
