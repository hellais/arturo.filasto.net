---
title: All you need is a text editor and a web server
publishDate: 12 May 2024
description: Technology is distracting us from content.
---

I would like to use this post to announce the fact I'm planning to get back
into the blogging game, but also use it as an opportunity to explain something
deeper about the direction I think the web is going today.

I'm working on a new project that I think will help make the internet a better
and I think documenting that process here will be quite interesting. That's
however for another day.

Where I would like to start in this story is from my first personal website
[hellais.netsons.org](https://web.archive.org/web/20080531043317/http://hellais.netsons.org/).
The latest snapshot visible from the internet archive is from 2008 and you
can still read the embarassing words of a teenager, yet all the images are broken.
Even though that site has disappeared from the face of the internet (the domain
is an NXDOMAIN), the Internet Archive took a snapshot of it. What they were able
to effectively store and keep was just the text, so even though probably digging 
a fully encrypted hard drive of which I have forgotten the password I might have found 
the original dump of the site, I don't have to.

Netsons was an italian "cloud" hosting provider which offered people free web
hosting at a time when that was something relatively costly. They still run a
hosting company, however their free tier doesn't exist anymore, probably
because websites have gotten too data hungry these days, but I'm jumping ahead.

When I got involved with the Tor project, one of my early contributions as a
volunteer was a guide on [how to setup a hidden service (aka Onion Services)
blog](https://github.com/hellais/Hidden-Blog) (Note: this guide is at this
point incredibly dated, so please don't rely on it for anything serious).  In
this guide I explained how to setup and harden this perl based blogging
platform called [blosxom](https://en.wikipedia.org/wiki/Blosxom) and expose it
as a tor hidden service. I included tips on how to make it harder to identity
yourself through potential sidechannels that could come from the Apache web
server.

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

I do however think it would be very easy and simplistic to just blame tiktok or
facebook or whatever big tech platform you decide as your scapegoat.

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

I will end it here with what I meant in the title. Back in 2011 all you needed
was just a text editor (hopefully vi) and a web server (make your pick) to start
a website.
My arguement is that still today, fundamentally that's all you need. It's
actually never been easier than before to run a static website. Just pick one of the many
free static site hosting services.
So why is it that we are investing so much time and energy and thought and
code, in building even more complicated tech stacks like the [fediverse](https://en.wikipedia.org/wiki/Mattermost)?
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
