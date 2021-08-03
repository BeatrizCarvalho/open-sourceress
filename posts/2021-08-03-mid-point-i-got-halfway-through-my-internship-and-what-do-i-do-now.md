---
title: "Mid-point: I got halfway through my internship and what do I do now?"
description: "Outreachy Saga - Part 4 #outreachy #kernel #linux #drm-misc #vkms"
date: 2021-08-03 05:05:13
thumbnail: assets/img/OpenSourceress.png
introduction: " Finally the part 4 of my Outreachy Saga! Mid-point: I got
  halfway through my internship and what do I do now? Come see what happened in
  these weeks!    "
twitter_text: " Finally the part 4 of my Outreachy Saga! Mid-point: I got
  halfway through my internship and what do I do now? Come see what happened in
  these weeks!    "
category: Linux Kernel
background: "#B31917"
---
# Hi all, hope you all are doing fine!

Finally today the part 4 of my Outreachy Saga came out, the mid-point was on 5/7/21 and as you can see I'm really late, this week had the theme: “**Modifying Expectations**”. 

But why did it take me so long to post? First, I had to internalize the topic a lot, because in my head I thought that when I reached this point, I would have achieved all the goals I had proposed at the beginning of the internship, but when the mid-point arrived, it seemed to me that I didn't have done anything and that my internship was going to end, as I didn't fulfill expectations.  

The project aimed at 2 tasks  

* Clean up the debugfs support
* Remove custom dumb_map_offset implementations  

During the development of the first task, we found that it could not be carried out as intended, so it needed to be restructured and resulted in:  

* Create vkms_config_show( )  

  * function Which aims to print the data in drm_debugfs_create_files()
  * It has already been reviewed and approved to be part of the
    [ drm-misc tree](https://cgit.freedesktop.org/drm/drm-misc/commit/?id=911684de2a8b891603784703cd5a316fc98b3c0a)

During the development of this function, I came across an improvement in the code:  

* Replace macro in vkms_release()  

  * It has already been reviewed and approved to be part of the [drm-misc tree](https://cgit.freedesktop.org/drm/drm-misc/commit/?id=1a3c1959740c1a376fbcdf87916e96fb5cce5518)  

As part of this week's assignments, I needed to talk to my advisors about the internship progress and schedule review. During our conversation, I could see/understand that I managed to achieve one of the goals, as presented above (I thought I hadn't achieved anything!!), and we also realized that I was not going to be able to do the second task, as it was in another context and could take a long time to understand how to solve it.  

Thus, for the second half of the internship, it was decided to convert vkms_config_debugfs into the structure proposed by [Wambui Karuga](https://lore.kernel.org/dri-devel/20200513114130.28641-2-wambui.karugax@gmail.com/), and here I'm working on it. 

During this time I'm learning that the Linux Kernel development is not linear, that several things can happen (setup problem again, break the kernel, not knowing what to do...), so I realized that one of the goals of Outreachy is learning to contribute and work with the project I've chosen.  

So I started to take advantage of my journey to learn how to contribute as much I can in the Linux Kernel and as I identified a lot with the development, maybe I can find a job to keep working/contributing to the Linux Kernel development. 

Thank you for following me so far, please feel free to comment! And stay tuned to the next chapters of this Saga!!! 

Take care and have a great day!