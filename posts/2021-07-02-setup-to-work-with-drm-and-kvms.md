---
title: Setup to work with DRM and KVMS
description: "Outreachy Saga - Part 3.5 #outreachy #kernel #linux #drm #vkms"
date: 2021-07-02 09:55:35
thumbnail: assets/img/OpenSourceress.png
introduction: This tutorial is a compilation of several tutorials that I used to
  make my setup for the development of the project.
twitter_text: This tutorial is a compilation of several tutorials that I used to
  make my setup for the development of the project.
category: Linux Kernel
background: "#B31917"
---
# Hi all, hope you all are doing fine!

This tutorial is a compilation of several tutorials that I used to make my setup for the development of the project.

I really liked FLUSP's idea of creating a command summary, for you consult to after done the tutorial, in case just want to remember a specific command.
SO!!!
If you haven't read this tutorial yet, skip this section.



```shell
qemu-img create -f qcow2 [NAME] 15G

qemu-system-x86_64 -cdrom ~/PATH/DISTRO_ISO.iso -boot order=d -drive \
                file=[NAME],format=qcow2 -m 2G

qemu-system-x86_64 -enable-kvm -net nic -net user,hostfwd=tcp::2222-:22,smb=$PWD/ \
                   -daemonize -m 4G -smp cores=4,cpus=4 [NAME]
```