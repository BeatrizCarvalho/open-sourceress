---
title: Everyone struggles!
description: Outreachy Saga - Part 2
date: 2021-06-16 09:37:47
thumbnail: assets/img/OpenSourceress.png
introduction: "It's been 3 weeks since I started the Outreachy internship, I've
  done a lot but at the same time, I don't think I've done anything. "
twitter_text: "It's been 3 weeks since I started the Outreachy internship, I've
  done a lot but at the same time, I don't think I've done anything. "
category: Linux Kernel
background: "#B31917"
---
Hi all, hope you all are doing fine! 

It's been 3 weeks since I started the Outreachy internship, I've done a lot but at the same time, I don't think I've done anything. 

In the first week, it was that week of setup machine, fighting with IRC to be able to send messages, sending some information necessary for Outreachy organizers. I also needed to configure my blog's RSS Feed (yes, at a time when I was in doubt whether I wanted to work with backend or frontend, I decided to learn how to develop a blog) as I use Gatsby as the base of the blog, it was relatively easy to configure the RSS (Hooray!! One thing worked \o/) 

To do my setup, my mentor Melissa gave me 2 tutorials as a base: 

[Setting up your QEMU VM](https://flusp.ime.usp.br/others/use-qemu-to-play-with-linux/)

[How to compile and install the Linux Kernel](https://flusp.ime.usp.br/others/Kernel-compilation-and-installation/)

And I needed to redo them a few times to understand how they worked (it's in my GIANT to-do list, a tutorial with my steps explaining where I had a problem, one day it leaves...) because I was going to use a virtual machine to run the tests and see if I didn't break the kernel too much after it was configured I needed to test to see if everything was right, for that I used the tutorial 

[Experiment-one-iio-dummy](https://flusp.ime.usp.br/iio/experiment-one-iio-dummy/)

Ok, setup working and now?? I still needed to configure one thing: The VKMS (a software-only model of a KMS driver that is useful for testing and for running X (or similar) on headless machines) and the IGT (a test suite used specifically for debugging and development of the DRM drivers), for this I used the tutorial: 

[VKMS](https://dri.freedesktop.org/docs/drm/gpu/vkms.html#todo)  

I was stuck for a few days in this task, the tests failed but why??? Configuration error? Tool installation error?? 

Nooo! It was my own mistake... That I didn't read the tutorial properly, and I didn't see the message that said: 

> “The tests need to be run without a composer, so you need to switch to text-only mode” 

For that I only needed to do: 

```
sudo systemctl isolate multi-user.target 
```

Ready! Solved, tests working \o/ and now what? 

Now my task for the next few days is to “create a debugfs file for vkms using drm_state_dump()”, but that's a subject for the next post. 

Thank you for following me so far, please feel free to comment! And stay tuned to the next chapters of this Saga called Outreachy!! 

Take care and have a great day!