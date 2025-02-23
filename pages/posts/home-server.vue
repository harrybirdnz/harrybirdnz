<script setup></script>

<template>
  <div class="bg-[#36454F] flex justify-center">
    <div class="bg-white p-8 m-10 shadow-lg rounded w-4/5 mt-20 h-min">
      <h1 class="font-medium text-2xl underline pb-6">Home Server Project</h1>
      <h2>1.0 Introduction</h2>
      <p>
        This project started with the fact that being in Christchurch it is
        often cold, and I was wondering how cold my room got. I thought it would
        be a cool project to use a leftover Arduino to log the temperature of my
        room.
      </p>
      <p>
        Following on from this, I already had this website, so I thought it
        would be cool if I was able to access that temperature data from here.
        To do this, I would require a server of some kind, which could store the
        data and make it available over the internet.
      </p>
      <h2>2.0 Initial Steps</h2>
      <p>
        I had an old desktop available, so I started looking into how to convert
        an old PC into a server. Luckily there are plenty of youtube videos on
        the subject, and I was able to find a wide range of strategies. I
        decided to remove windows off my machine, and install Ubuntu server.
      </p>
      <NuxtImg src="/ubuntu-menu.png" alt="Ubuntu Server" class="mx-auto" />
      <p>
        Ubuntu server is really easy to set up, the startup menu steps you
        through all of the required steps in order to connect it to the network
        and set up a user. After that, it was a simple case of leaving it
        running and connected to the network, and I could ssh into this PC from
        my LAN network whenever I wanted.
      </p>
      <h2>3.0 Getting Carried Away</h2>
      <p>
        From all the youtube videos I was watching, I had learnt that there were
        a myriad of things that you could do with a home server. The most
        popular of which was to host a media server. As the sensor that I had
        ordered to do the original project hadn't arrived, I begun looking into
        setting this up. I found that there were two main options, Plex and
        Jellyfin.
      </p>
      <div class="flex">
        <NuxtImg src="/plex.png" alt="Plex Logo" class="w-1/2" />
        <NuxtImg src="/jellyfin.jpg" alt="Jellyfin Logo" class="w-1/2" />
      </div>

      <p>
        Plex is a private company, and Jellyfin is the open source equivalent.
        Due to this, Plex provides a more polished product, with more apps and
        integrations, however there is a paywall to access certain features.
        Jellyfin is not as smooth, yet offers much of the same functionality,
        only really missing device support like Playstation, and some clunky
        apps on IOS/Android.
      </p>
      <h2>4.0 Sensor Setup</h2>
      <h3>4.1 Arduino Setup</h3>
      <p>
        The parts arrived! I had ordered the DHT11 temperature sensor, and so I
        wired this up to my Arduino Uno. I found a github repo with some example
        code, so loaded that up and voila, it worked. I was able to see the
        temperature and humidity of my room via the Arduino serial monitor.
      </p>
      <h3>4.2 Server Setup</h3>
      <p>
        To get this running on my server, I knew that I would have to use Python
        or similar in order to send the data from the arduino to my storage (as
        yet undecided). So the next step was to switch out the Arduino sketch
        for a python file. The python library PySerial allowed me to read data
        from the serial ports, and in no time I had reproduced the code from my
        Arduino sketch, and I was printing sensor data.
      </p>
      <p>
        To get this running on my server, I used some of the knowledge that I
        had gained from "3.0 Getting Carried Away" and decided that I should use
        a docker container to run the python script. In this way, I could ensure
        that the code would always run, even after a reboot, and that it would
        just sit in the background collecting measurements. I decided that a 5
        min collection interval would be adequate, so I added that into my
        python script. At the same time, before I sent it away to the server, I
        had to figure out where I wanted to save the data.
      </p>
      <h3>4.3 SQL setup</h3>
      <p>
        Through work, I have become familiar with the Supabase Postgresql
        interface. I was vaguely aware that it was possible to self host this
        (our company uses the recommended cloud system which hosts with AWS). I
        tried to set this up as a docker container, but ran into issues, and it
        was a little too sophisticated for my needs anyway. Because I just
        wanted to get things working, I decided to set up a cloud instance of
        Supabase, and use that to store my data for now. Down the track I would
        like to set up a basic SQl docker container to store the data, and
        perhaps even look into a nosql database like MongoDB.
      </p>
      <h3>4.4 Integration</h3>
      <p>
        Connecting my python script to Supabase was straightforward. Supabase
        provides API reference for various languages and frameworks, and setting
        up my script to inject the temperature and humidity data was simple
        enough. Once I had tested the code, I set up the docker container on my
        server and begun to collect and store data. It was a great feeling when
        the first datapoints started coming through.
      </p>
      <h2>5.0 Web Interface</h2>
      <p>
        I have worked a plenty with fetching data from supabase to display on
        the web, so I was able to quickly set up a page to display the
        temperature data. I used chartjs to display the data, and set up a few
        tabs to display different time periods.
      </p>
    </div>
  </div>
</template>
