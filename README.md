## Qualitative Project Concept & Sketches

**Project Approach**
Answer project questions as you go along
1. Audience questions
2. Check + prep data (acquire, parse, filter)
3. Mine/explore/sketch/iterate several simple graphics, re: stories (same or diff?), pick one
4. Code initial draft (pseudo first?)
5. Refine/declutter/clean/annotate/clarify (color, labels, titles, legend, summary, etc)
6. Interactivity (more than tooltips, eg: scrolling)
7. Share

*=====================*
- v1 sketch summary:
    - sketch
    - Questions
    - Data set
    - Inspirations
    - Data vis method
    - Current problems

*=====================*
**Project Questions**
- Why are we doing this?
    - What are questions that you want to explore with this visualization?
- What are you hoping to achieve?
    - What will I be looking at(title)?
- Who are we targeting?
    - How is the end product going to be used?
    - How are we publishing?

*=====================*
- What data do we have available? 
    - Which type (qualitative vs quantitative) dataset is used? 
        > https://measuringu.com/qual-methods/
    - What are the properties of the data set? 
    - How many data points
    - What's the quality of the data? 
    - Which other existing materials should we take into account?
    - Which constraints do we have?
- use R to explore data?

*=====================*
- Which visualization method is used and why?
    - What does the visualization enable?
    - Is this a static visualization? Is it interactive?
    - color: Is it intentional and intuitive? data decodable by audience?
        - legends, annotations
    - clear text hierarchy?
    - link to data?
    - links
        > https://www.data-to-viz.com/
        > https://www.d3-graph-gallery.com/
        > https://observablehq.com/@d3/gallery
        > https://d3-legend.susielu.com/
        > https://colorbrewer2.org/

*=====================*
- Who else is doing something similar?
- Abstract/summary/about, re: methodolgy? (1-2 pars)
    - What were your considerations? 
    - What tools did you explore? 
    - What challenges did you run into? 
    - How did you iterate?


**Project Concept**

*Design concept 1*
![sketch title](sketch_url)

1. Questions
    - What are America's most prized pets?
    - Is the dog the most prized pet?

2. Data set
    - Art galleries such as the Cooper Hewitt, Freer Gallery, National Art Gallery, etc
    - Using the item descriptions to find animal types
    > https://collections.si.edu/search/index.htm

3. Inspirations
    - https://www.wired.com/2012/07/you-suck-at-infographics/
    - word maps
    - infographics

4.  Data vis method
    - Word cloud + animal icons
    > https://www.d3-graph-gallery.com/wordcloud.html

5. Current problems
    - certain descriptions contain generic information about the piece's theme, and not the piece itself.

*Design concept 2*
![sketch title](sketch_url)

1. Questions
    - What did a prominent black man experience post slavery?
    - How does Frederick Douglass' life demonstratre discrimination in America?
    - What was life like for a freed slave?
    - How is F. Douglass' life represented accross the museums?
    - How would a researcher use this data to organize the Smithsonian collection?

2. Data set
    - Art galleries, NMAAHC
    - Using the item descriptions to find FD.
    > https://collections.si.edu/search/index.htm

3. Inspirations
    - Social network maps
    > http://tutormentor.blogspot.com/2012/11/mapping-participation-help-build-network.html
    > https://depictdatastudio.com/how-to-make-a-social-network-map-with-nodexl/
    > https://www.swoopanalytics.com/blog/social-network-map

4.  Data vis method
    - Network
        > https://www.d3-graph-gallery.com/network.html
    - bubble chart
        > https://www.d3-graph-gallery.com/bubble.html
    - timeline
        > https://timeline.knightlab.com/
        > https://developers.google.com/chart/interactive/docs/gallery/timeline
        > https://storyline.knightlab.com/

5. Current problems
    - the search for Douglass may return too many items
    - creating relations between items may prove difficult (connect based on item topics array?)

*Design concept 3*
![sketch title](sketch_url)

1. Questions
    - Can we track the evolution of discrimination in America?
    - Is discrimination represented in art?

2. Data set
    - Art galleries such as the Cooper Hewitt, Freer Gallery, National Art Gallery, etc
    - Using the item descriptions to find key words (eg discrmination, african, indian, native, etc)
    > https://collections.si.edu/search/index.htm

3. Inspirations
    > https://booksforlittles.com/info/accountability/who-pays-for-this-where-does-the-money-go/
    > https://www.otherlab.com/blog-posts/us-energy-flow-super-sankey
    > https://towardsdatascience.com/visualizing-in-app-user-journey-using-sankey-diagrams-in-python-8373a7bb2d22

4.  Data vis method
    - Sankey
    > https://www.d3-graph-gallery.com/sankey.html

5. Current problems
    - finding items that represent the theme through key words
    - how to correlate items with discrimination

#### refs
- https://measuringu.com/qual-methods/
- https://www.questionpro.com/blog/qualitative-research-methods/

##### Instructions
- npm install request async dotenv

