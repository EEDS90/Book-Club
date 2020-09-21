# Book-Club BookFinder by EEDS90

#### App Description:
This application allows you to find any book and the book details page by using the toolbar component and navigator and textinput.

#### API: https://www.googleapis.com/books/v1/volumes?q=search+terms

#### API Snipet:

```JSON {
            "kind": "books#volume",
            "id": "zYw3sYFtz9kC",
            "etag": "VtEDrlNq1Fw",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/zYw3sYFtz9kC",
            "volumeInfo": {
                "title": "The Contemporary Thesaurus of Search Terms and Synonyms",
                "subtitle": "A Guide for Natural Language Computer Searching",
                "authors": [
                    "Sara D. Knapp"
                ],
                "publisher": "Greenwood Publishing Group",
                "publishedDate": "2000",
                "description": "Whether your search is limited to a single database or is as expansive as all of cyberspace, you won't find the intended results unless you use the words that work. Now in its second edition, Sara Knapp has updated and expanded this invaluable resource. Unlike any other thesaurus available, this popular guide offers a wealth of natural language options in a convenient, A-to-Z format. It's ideal for helping users find the appropriate word or words for computer searches in the humanities, social sciences, and business. The second edition has added more than 9,000 entries to the first edition's extensive list. Now, the Thesaurus contains almost 21,000 search entries! New or expanded areas include broader coverage of business terms and humanities-including arts literature, philosophy, religion, and music.",
                "industryIdentifiers": [
                  
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 99000000,
                            "currencyCode": "USD"
                        },
                        "retailPrice": {
                            "amountInMicros": 79200000,
                            "currencyCode": "USD"
                        },
                        "giftable": true
                    },
                    {
                        "finskyOfferType": 3,
                        "listPrice": {
                            "amountInMicros": 34650000,
                            "currencyCode": "USD"
                        },
                        "retailPrice": {
                            "amountInMicros": 30150000,
                            "currencyCode": "USD"
                        },
                        "rentalDuration": {
                            "unit": "DAY",
                            "count": 90
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "US",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
                "epub": {
                    "isAvailable": false
                },
     
            
            "searchInfo": {
                "textSnippet": "<b>Search</b>. <b>Terms</b>. Google says that most <b>searches</b> consist of just two or three <b>words</b>. <br>\nGoogle does the best it can with these cryptic queries, but adding more <b>words</b> to <br>\nyour query will usually provide better results. Think of how you interact with a&nbsp;..."
            }
        }
    ]
}
```
#### Wireframes:
https://wireframe.cc/pro/edit/374929


#### MVP:

1) Create my Index.HTML with the Website description, background, header and everything it needs.
2) Build my CSS outline in accordance to desktop guidelines.
3) Use the API to get google books information using JS and Axios.
4) Create my click buttons using eventListeners.
5) Use the API to get book and authors names.
6) Use API to find any book
7) Allow the user to find a link for where to buy the book

### MVP/PostMVP

1) Style the toolbar component using CSS.
2) Stylw Navivator and Textinput 
3) Create the listview
4) Add the listview pressrow functionality
5) Creat an input that gives the chosen book detail page

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Sept 18-21| Prompt / Wireframes / Priority Matrix / Timeframes | Complted
|Sept 21| Project Approval | Incomplete
|Sept 22| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Sept 23| MVP | Incomplete
|Sept 24| Post MVP/Styling | Incomplete
|Sept 25| Presentations | Incomplete

## Priority Matrix
https://wireframe.cc/pro/edit/374929

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
















