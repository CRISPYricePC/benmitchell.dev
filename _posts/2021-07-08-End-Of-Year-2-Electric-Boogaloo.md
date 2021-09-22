---
layout: post
title: What I'm working on this summer & Goals for Year 3
categories: blog
---

**Update *2021/09/22*:** Modules have been updated with my new choices, footnote to the [Final Project](#final-project)
section also added with my given project.

It's the end of my 2nd year at university. That means a few things:

1. I have to make some decisions for my final project in Year 3
2. I need to choose what modules I would like to take
3. (most important) I should finish some projects so I can show people outside of University what I can do

<!--more-->

## Time Management

Okay first, Year 3. What do I expect / want to achieve? Year 2 was an absolute mess for both my productivity
and dare I say the quality of the modules. COVID-19 has really made it difficult for both lecturers to produce
a course of the same quality as previous years, but also for me as I wrestle with my consistent procrastination
that stems from me being locked in my house for days on end. With that in mind, my biggest goal for the
academic year is to set myself timetables and allot myself time. I could feel that I was beginning to do this
toward the end of the year, so I'm going to try to keep the momentum up, especially since I now have a project
that I'm supposed to put at least 400 (four hundred?!) hours into. This means timetables, routines, alarm clocks
and allocated free time.

## Modules and Final Project

[Secure Computing](http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=202122&F=P&M=COMP-3911) and
[Individual Project](http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=202122&F=P&M=COMP-3931) are both
compulsory, so I'm taking those no matter what, but the rest of the modules this year I have free choice over.
I have to pick 70 credits worth of optional modules for both semesters, with each credit being equal to 10 hours
of work, some modules are 10 credits, some are 20. As of the time of writing, module enrollment hasn't yet
opened, so my current choices might be subject to change. If so, I might update this post with the new module
options, but here's where it stands now:

### Semester 1

- Computer Graphics -
  [COMP3811](http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=202122&F=P&M=COMP-3811) (10 credits)
- User Adaptive Intelligent Systems -
  [COMP3771](http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=202122&F=P&M=COMP-3771) (10 credits)
- Information Visualization -
  [COMP3736](http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=202122&F=P&M=COMP-3736) (10 credits)

### Semester 2

- Parallel Computation -
  [COMP3221](http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=202122&m=COMP-3221) (10 credits)
- Cryptography -
  [COMP3223](http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=202122&m=COMP-3223) (10 credits)
- Comnbinatorial Optimisation -
  [COMP3910](http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=202122&m=COMP-3910) (10 credits)
- Web Services & Web Data -
  [COMP3011](http://webprod3.leeds.ac.uk/catalogue/dynmodules.asp?Y=202122&m=COMP-3011) (10 credits)

### Final Project

My final project choices are mostly oriented around graphical user interfaces. I've found that I enjoy this type
of project more than any other, and I'm orienting one of my summer projects around this so I can get some
practice in for it.

My first choice is an IDE / IDE extension that is designed to work alongside a programming course, specifically
a Java module from first year. Close second is a Git tool that helps newer users through a graphical interface,
while still intuitively showing what exactly is happening behind the scenes, plus what commands would've done the
action that was performed. My 3rd and 4th choices are related to procedural generation, which I find fascinating
but didn't put so high on the list of preferences purely down to the fact that I know very little about computer
graphics at the moment, and would prefer to wait until I have taken the course in 1st semester to understand how
I could approach this project.

**Update *2021/09/22*:** I have been given my 3rd choice for this project, sadly. It involves procedurally generating
a cityscape, which should be a lot of fun. To prepare for this, I've been learning some graphics programming over the
summer, but I find some of the aspects to be very challenging, hopefully the Computer Graphics module I've enrolled to
should help alleviate some of these struggles. Overall, I'm very excited for this project.

## Summer Projects

Finally, what are those summer projects that I alluded to?

### CloudMounter

> A GUI for mounting Cloud Services to a Linux Filesystem

This is where I hope to gain most of my prerequisite learning for a potential GUI-based final project.
The software is written in C++ and uses GNU's excellent GTK framework for User Interface. The reason I chose
GTK over the more popular Qt was purely because I wanted to try something new, and was slightly in awe as to
how pretty you can make GTK apps look with minimal effort. Also, since the app is only really going to be
needed for Linux, I wasn't concerned about porting it to Windows or MacOS, as there are already plenty of
ways to mount popular cloud services on those platforms.

To avoid reinventing the wheel, I'm using [Rclone](https://rclone.org/)'s pre-existing command line application
to manage the various different cloud drives you could have. That means that the most this app needs to do is
interact with Rclone and [systemd](https://systemd.io/) to provide an easy-to-use experience to the end user.

My main motivation to do this is just the memory of how tedious it was for me to switch from Windows to Linux.
One of the biggest deal-breakers for me was that proprietary cloud services like Google Drive and (more
importantly for studies) OneDrive did not have provided graphical clients like they do on Windows. It took
me a long while to learn about Rclone, and even longer to wrangle how I can set it up so that I can connect
it to a location on my filesystem.

The plan with CloudMounter is to provide easy to use tools for managing mounted drives, and make it super easy
to configure them from a graphical interface. This is the first large graphical project I've ever undertaken,
so I know I won't be able to get it right the first time, but I'm excited to give it a shot and see what I can
produce.

### mcpkg

> A Minecraft Package Manager

This project has already gone quite a bit further along than CloudMounter, so much so that I've already
[reserved a domain](https://mcpkg.app) for it.

In short, it's a package manager, much like `apt` or `pip`, but for various Minecraft "packs". This currently
includes:

- Resource packs
- Data packs
- Crafting tweaks

And in the future I hope for it to also include Mods and Shader Packs too.

It's currently powered by [Vanilla Tweaks](https://vanillatweaks.net), which is a collection of simple,
well-polished packs that remain true to the vanilla experience, while offering enhancements. I thought this
was a good start since I own an SMP that uses many vanilla tweaks data packs and crafting tweaks, as well as
personally using a resource pack from there too.

I have been working on-off for this project for about half a year, and it feels nice to finally have something
that is consistent and well written (save some rushed together CLI bits). Unlike CloudMounter, mcpkg is up
publicly on [GitHub](https://github.com/CRISPYricePC/mcpkg) and open to contributors, so give it a download
and let me know your thoughts.
