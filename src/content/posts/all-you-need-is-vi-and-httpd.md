---
title: All you need is a text editor and a web server
publishDate: 12 May 2024
description: Technology is distracting us from content.
---

I would like to use this post to announce the fact I'm planning to get back
into the blogging game, but also use it as an opportunity to explain something
deeper about the direction I think the web is going today.

I'm working on a new project that I think will help make the internet better
and I think documenting that process here will be quite interesting. That's
however for another day.

Where I would like to start in this story is from my first personal website
[hellais.netsons.org](https://web.archive.org/web/20080531043317/http://hellais.netsons.org/).
The latest snapshot visible from the internet archive is from 2008 and you
can still read the embarassing words of a teenager, yet all the images are broken.
Even though that site has disappeared from the face of the internet (the domain
is an NXDOMAIN), the Internet Archive took a snapshot of it. What they were able
to effectively store and keep was just the text. Even though probably digging
a fully encrypted hard drive of which I have forgotten the password I might have found 
the original dump of the site, I don't have to.

Netsons was an italian "cloud" hosting provider which offered people free web
hosting at a time when that was something relatively costly. They still run a
hosting company, however their free tier doesn't exist anymore, probably
because websites have gotten too data hungry these days, but I'm jumping ahead.

When I got involved with the [Tor Project](https://torproject.org/), one of my early contributions as a
volunteer was a guide on [how to setup a hidden service (aka Onion Services)
blog](https://github.com/hellais/Hidden-Blog) (Note: this guide is at this
point incredibly dated, so please don't rely on it for anything serious).  In
this guide I explained how to setup and harden this perl based blogging
platform called [blosxom](https://en.wikipedia.org/wiki/Blosxom) and expose it
as a tor hidden service. I included tips on how to make it harder to leak your 
identity through potential side-channels that could come from the Apache web
server or the blogging platform. The key is that it was easier because the stack
was simple.

The setup was pretty striaghtforward and it was mostly just about copy pasting
some lines of code into some config files and copying over a single file to
your web server and you were off to the races!

What has happened of this kind of simple software? Kids these days have to run
`npm` or `yarn` or whatever is the new trendy tool to install GBs of
dependencies so they can generate a single HTML file, while back in 2011 you
could drop a single Perl cgi file into your web server dir and you were good to
go. I am getting ahead of myself though.

For [my own personal blog](https://hellais.wordpress.com/), though, for the
longest time I just ran it from the free hosted wordpress. The reason for that
is that wordpress is a very complex piece of software and keeping it up to date
so that you don't get pwned is basically a full time job.

However fundamentally the problem is even bigger than that. I have the
impression that we are all moving more and more in a direction of very
short-form and fast writing, especially when it comes to online content.
The attention span of [internet users is
reducing](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7766706/) and it's
something very concerning.

I do however think it would be very easy and simplistic to just blame [tiktok](https://en.wikipedia.org/wiki/Restrictions_on_TikTok_in_the_United_States) or
[facebook](https://en.wikipedia.org/wiki/2021_Facebook_leak) or whatever [big tech
platform](https://en.wikipedia.org/wiki/Big_Tech) you decide to pick as your
scapegoat.

I think the problem is more fundamental and in my view has to do mostly with
the economy of the internet.

Back in 2011 it was possible to maintain a blog and have people read it. It was
possible because people felt like they had the time to sit down and enjoy a
long form read without being concerned of missing out on the rest of the things
out there.
Ultimately, in my view, this reduced attention span problem comes as a direct
result of consumer culture and the fear of missing out on something which you
didn't even think you needed.

What happened to the times when we used to send each other lengthly emails and
we left those sitting in our inbox for weeks until we had the time to share a
thoughtful and throrough reply?

The point I'm making here is that opting for a fast-paced way of interacting
online is a choice we make, but we can also make the opposite choice.

And the secondary point is that the way in which technology is built and the
direction in which it's going, at a fundamental level, is optimizing for this
fast paced way of interacting with it.

In my opinion we need to slow it all down. Why is it that CDNs celebrate when
they are able to shave off 10ms from response times and that's something
significant enough to give them an edge in the market?

Can't we just take it a bit more easy? What's all the hurry?

Are you in a hurry to get spammed with ads telling you do buy stuff you don't
need so that you can get fed more junk content?

What happened of [pond](https://github.com/agl/pond) and the slow crypto (as in
cryptography) movement? Those of you who rememeber those days hanging out in
IRC channels on OFTC and sending each other messages that would be answered
days later know what I'm talking about. Those of you still living in this
consumerist world without a smartphone, I tip my hat to you.
Those of you that still believe in the [dream of the cypherpunks](https://en.wikipedia.org/wiki/Cypherpunk) I am all in.

During these days I explored this concept through a project which was the
original implementation of `arturo.filasto.net`, called
[latenza.js](https://github.com/hellais/latenza.js).

I also though feel as a community we need to recognize the fact that we [don't
live in the 90s anymore](https://www.youtube.com/watch?v=TZt-pOc3moc) and we
can't expect all these new internet users to understand that.



I will end it here with what I meant in the title. Back in 2011 all you needed
was just a text editor (hopefully vi) and a web server (make your pick) to start
a website.
My arguement is that still today, fundamentally that's all you need. It's
actually never been easier than before to run a static website. Just pick one of the many
free static site hosting services.
So why is it that we are investing so much time and energy and [thought](https://en.wikipedia.org/wiki/ActivityPub) and
[code](https://en.wikipedia.org/wiki/Diaspora_\(social_network), in building even more complicated tech stacks like the [fediverse](https://en.wikipedia.org/wiki/Mattermost)?
Why aren't we happy with what we have?

I'm of the idea that on the tools are just instruments to do what you want to
do. If you can do what you want to do with the simplest possible tool, you
should.

I feel like sometimes as hackers we get distracted by shiny new things, which I
get, however let's not forget that ultimately software is a perishable good. At
some point it will go bad and we will have to rewrite it. On the other hand
text and words will remain long after the code has gone rotten.

I will end this here, because there would be so much more to say just on this last point.

If you enjoy this kind of content please share it with your friends and if you
would like reach out to me. You can find my contacts on this site.
