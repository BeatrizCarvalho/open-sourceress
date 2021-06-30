---
title: "My Project at Linux Kernel "
description: "Outreachy Saga - Part 3 #outreachy #kernel #linux #drm #vkms"
date: 2021-06-28 07:48:21
thumbnail: assets/img/OpenSourceress.png
introduction: "Today is part 3 of my Outreachy Saga! Come see what happened in these weeks! "
twitter_text: "Today is part 3 of my Outreachy Saga! Come see what happened in these weeks! "
category: Linux Kernel
background: "#B31917"
---
#### Hi all, hope you all are doing fine!

Today it's part 3 of my Outreachy Saga it’s been 5 weeks of my Outreachy internship, and everything is not sailing smoothly how I would like! Why?? Because I had a little problem with my setup and I was stuck for 2 days without working until be able to correctly do my setup, how I said in [my introduction post](https://open-sourceress.com/outreachy-introduction/), one thing that I'm learning at my internship is "learning", because not everything goes as I would like, sometimes it is necessary to stop, breathe, redo everything and, after redoing everything, it is so rewarding when things start to flow.  

Today my week’s blog will be focusing on the Linux Kernel Community at which I’m interning and the project on which I’m working. So, let’s get started! 

## What is Linux Kernel?

A small context: the core of an Operating System (OS) is the **Kernel**, as this is responsible for the integration of the physical devices (hardware) of the computer with the programs (software). In a Linux OS this core is also known as **Linux Kernel**, has open source code, and is freely available for the community,  how I said in my introduction blog https://open-sourceress.com/outreachy-introduction/, the community it's a set of people and companies that want to collaborate in the development of the system.  

Due to these contributions Linux Kernel has grown a lot, with over 8 million lines of code and well over 1000 contributors to each release, is one of the largest and most active free software projects in existence.  The kernel codebase has been logically broken down into a set of subsystems: network, architecture-specific support (x86, ARM, MIPS, ...), memory management, devices video, real-time systems, among others. This makes it a little easier to manage the contributions made in the Kernel, as most subsystems have a designated maintainer, and they handle verifying and accepting contributions before they are incorporated in *Linux kernel mainline* 

About my project at Linux Kernel – “Improvements to DRI-devel (aka kernel GPU subsystem)“ 

In laptops, tablets, phones, and lots of other places GPU/display uses more silicon die space than everything else combined (humans are mostly visual people after all), dri-devel (and the wider set of projects under the X.org Foundation's umbrella) is the community that makes this all work and shine. 

In my project, I would like to create new features and better understand how the DRM core works. To achieve this goal, I chose these tasks: [Clean up the debugfs support](https://dri.freedesktop.org/docs/drm/gpu/todo.html#clean-up-the-debugfs-support) and [remove custom dumb_map_offset implementations](https://dri.freedesktop.org/docs/drm/gpu/todo.html#remove-custom-dumb-map-offset-implementations) 

## How can you contribute to Linux Kernel?

Anyone can contribute to the development of the kernel, just develop a patch, send it to the system's mailing list, wait for community considerations, fix whatever it takes, and that's it. 

But yes, I know well, that starting to contribute to the kernel is scary, especially for anyone who is a noob (beginner, newbie) in the Free Software development world and also doesn't know where to start. 

But there are several things and initiatives to help, for example: 

### Internet courses and materials:

[A  beginners guide to linux kernel development](https://training.linuxfoundation.org/training/a-beginners-guide-to-linux-kernel-development-lfd103/)

[Kernel newbies](https://kernelnewbies.org/)

[First Patch tutorial](https://kernelnewbies.org/Outreachyfirstpatch)

[Write and Submit your first Linux kernel Patch](https://www.youtube.com/watch?v=LLBrBBImJt4) 

### Internship programs:

[Outreachy](https://www.outreachy.org/)

Outreachy is a paid, remote internship program. Outreachy's goal is to support people from groups underrepresented in tech. We help newcomers to free software and open source make their first contributions. Outreachy provides internships to open source work. People apply from all around the world. Interns work remotely and are not required to move. Interns are paid a stipend of $5,500 USD for the three month internship. Interns have a $500 USD travel stipend to attend conferences or events. Interns work with experienced mentors from open source communities. Outreachy internship projects may include programming, user experience, documentation, illustration, graphical design, or data science. Interns often find employment after their internship with Outreachy sponsors or in jobs that use the skills they learned during their internship. 

[GSoC](https://summerofcode.withgoogle.com/)

Google Summer of Code is a global program focused on bringing more student developers into open source software development. Students work with an open source organization on a 10 week programming project during their break from school. 

### Study groups:

In Brazil, I met 2 of these groups 

In Campinas - [LKCamp](https://lkcamp.gitlab.io/)

In São Paulo - [FLUSP](https://flusp.ime.usp.br/)

It's scary I know, but as you can see there are several initiatives and content to start contributing to the Linux Kernel. So don't be afraid, try to contribute to the Linux kernel and ask the community for help there will always be someone who can help you! 

Ah!!! And I almost forgot, if you need help you can send a message, I'm also starting in this world of kernel contribution, but I'll do my best to help and my goal with the blog besides showing my Outreachy internship progress is also to create content to help with the contribution and development of the kernel for beginners, both in English and in Portuguese (my native language). 

Thank you for following me so far, please feel free to comment! And stay tuned to the next chapters of this Saga!!! 

Take care and have a great day!