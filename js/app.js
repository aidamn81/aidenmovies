// js/app.js
document.addEventListener("DOMContentLoaded", () => {
  const THUMB_DIR = "assets/thumbs/";

  // Helper
  const m = (title, link, file, remote = null) => ({ title, link, file, remote });

  // ===== FULL LIST WITH REMOTE FALLBACKS =====
  const movies = [
    m("28 Days Later", "https://dobby.site/movies/28-days-later-dot-dot-dot-2002?_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "28days.jpg", "https://edef10.pcloud.com/DLZ8ofLtEZO8STuB7ZWjPfZ7ZEPF3VkZNVZZnHXZZ7vkZW4ZL8Z7QZuM5Jl6HpFQ7GLL1oVDQIvSgbASH7/28days.jpg"),
    m("28 Weeks Later", "https://dobby.site/movies/28-weeks-later-2007?_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "28weeks.jpg", "https://edef9.pcloud.com/DLZ4d3hUEZf04gnB7ZWjPfZ7ZtxF3VkZNVZZnHXZZAgRZIHZmkZ50ZSB8SqHieakfjmrJBoUO9uHE2ODOy/28weeks.jpg"),
    m("30 Days of Night", "https://dobby.site/movies/30-days-of-night-2007?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "30days.jpg", "https://edef4.pcloud.com/DLZAl3hUEZ6V4gnB7ZWjPfZ7ZzwF3VkZNVZZnHXZZ1PgZRzZtJZDHZ9zNE2RdJhbYhPCaUePALeL5pLGUy/30days.jpg"),

    m("The Addams Family", "https://dobby.site/movies/the-addams-family-1991?pl=-1&_u=hchh6mwu5k&_t=33dp8k&_rsrc=chrome/newtab", "addams.jpg", "https://edef10.pcloud.com/DLZyq3hUEZup4gnB7ZWjPfZ7ZPoF3VkZNVZZnHXZZmlsZwHZK4Z25Z5Nh4IsQk7CuAdLw9R62bzjyIrHLk/addams.jpg"),
    m("Addams Family Values", "https://dobby.site/movies/addams-family-values-1993?_rsrc=chrome/newtab&_t=33dp8k&_u=hchh6mwu5k&pl=-1", "addams2.jpg", "https://edef7.pcloud.com/DLZGO3hUEZQh4gnB7ZWjPfZ7ZYyp3VkZNVZZnHXZZIPh7Z1RZPpZ1XZF94gu8JfLS7FtC17Bkie54GHYoKk/addams2.jpg"),
    m("A Simple Favour", "https://dobby.site/movies/a-simple-favor-2018?_rsrc=chrome/newtab&_t=7gl997&_u=hchh6mwu5k&pl=-1", "simplefavour.jpg", "https://edef5.pcloud.com/DLZol3hUEZiV4gnB7ZWjPfZ7ZF7p3VkZNVZZnHXZZG85Z1FZ9XZiLZiSaI2OvWbG0YnuSbturu0FSxG8Ey/simplefavour.jpg"),

    m("A.I. Artificial Intelligence", "https://dobby.site/movies/ai-artificial-intelligence-2001?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "ai.jpg", "https://edef6.pcloud.com/DLZ5t3hUEZlJ4gnB7ZWjPfZ7Zlyp3VkZNVZZnHXZZfq27Z55ZkkZNRZcdpXzu4TWdhJ9ijXGwsFERAvncSX/ai.jpg"),

    m("Alien (1979)", "https://dobby.site/movies/alien-1979?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "alien.jpg", "https://edef9.pcloud.com/DLZl63hUEZ444gnB7ZWjPfZ7Z97p3VkZNVZZnHXZZtgwZxHZuHZRpZNEpKfieYG9HYNKcj8Nm2cXbcdjwk/alien.jpg"),
    m("Alien: Romulus (2024)", "https://dobby.site/movies/alien-romulus-2024?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "romulus.jpg", "https://edef6.pcloud.com/DLZ0I3hUEZcS4gnB7ZWjPfZ7ZfXp3VkZNVZZnHXZZKDB7ZQFZCHZeHZ5sBYcqD7kt4kOO7k4uh8rk0d6BV7/romulus.jpg"),
    m("Aliens (1986)", "https://dobby.site/movies/aliens-1986?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "aliens.jpg", "https://edef4.pcloud.com/DLZ9N3hUEZa24gnB7ZWjPfZ7Zkkp3VkZNVZZnHXZZhcFVZY0Zy5ZdFZyNwGKXOMRQ4aR3JkUXan0XzPisaX/aliens.jpg"),
    m("Alien 3 (1992)", "https://dobby.site/movies/alien3-1992?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "alien3.jpg", "https://edef3.pcloud.com/DLZjO3hUEZuQ4gnB7ZWjPfZ7ZN7p3VkZNVZZnHXZZ5vMZfzZDFZ8RZFhwPmQRVys4BlXAuViSBhRk8dtek/alien3.jpg"),
    m("Alien Resurrection (1997)", "https://dobby.site/movies/alien-resurrection-1997?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "alien4.jpg", "https://edef3.pcloud.com/DLZuE3hUEZiR4gnB7ZWjPfZ7ZGkp3VkZNVZZnHXZZHHFZMLZHLZ3XZkM0QMSdR2hzfYc2us8Ycr4Iz1N2V/alien4.jpg"),

    m("Angels in America", "https://dobby.site/shows/angels-in-america?_u=hchh6mwu5k&_t=e14tdp&_rsrc=chrome/newtab", "angels.jpg", "https://edef1.pcloud.com/DLZcA3hUEZoB4gnB7ZWjPfZ7ZFVp3VkZNVZZnHXZZ8s67ZEJZhHZXHZmzVn3YCBUymIAVCbazbG7FKhIOOV/angels.jpg"),

    m("Batman (1989)", "https://dobby.site/movies/batman-1989?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "batman.jpg", "https://edef12.pcloud.com/DLZbI3hUEZRj4gnB7ZWjPfZ7Zq0p3VkZNVZZnHXZZQJYZzzZLzZpFZHt4MrrsB8gj5l8Y2z0DIe5MYTrFX/batman.jpg"),
    m("Batman Returns (1992)", "https://dobby.site/movies/batman-returns-1992?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "batman2.jpg", "https://edef3.pcloud.com/DLZ6a3hUEZ6s4gnB7ZWjPfZ7ZR5p3VkZNVZZnHXZZoNk7ZgJZDHZn5Zz6jijvALWjmv6s7U4tw6yfSWq9rX/batman2.jpg"),
    m("Batman Forever (1995)", "https://dobby.site/movies/batman-returns-1992?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "batmanforever.jpg", "https://edef4.pcloud.com/DLZlN3hUEZuW4gnB7ZWjPfZ7Zq5p3VkZNVZZnHXZZc4aZ6FZ45ZDLZFCx0vO2830unIOxIqI3Y4mwhx7xV/batmanforever.jpg"),
    m("The Batman (2022)", "https://dobby.site/movies/the-batman-2022?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "thebatman.jpg", "https://edef1.pcloud.com/DLZXN3hUEZGB4gnB7ZWjPfZ7ZRJp3VkZNVZZnHXZZTbzZeLZhJZr0ZasMfyfU0Iszwt8P86PICjhnXgETk/thebatman.jpg"),

    m("Barb & Star Go to Vista Del Mar", "https://dobby.site/movies/barb-and-star-go-to-vista-del-mar-2021?_rsrc=chrome/newtab&_t=gcqrcb&_u=hchh6mwu5k&pl=-1", "barb.jpg", "https://edef7.pcloud.com/DLZja3hUEZGs4gnB7ZWjPfZ7ZmVp3VkZNVZZnHXZZTy4ZkHZbFZJRZOUoK1gAYg3zuiga6E9HaPbcD8UoV/barb.jpg"),
    m("Becky", "https://dobby.site/movies/becky-2020?_rsrc=chrome/newtab&_t=h5aqtn&_u=hchh6mwu5k&pl=-1", "becky.jpg", "https://edef3.pcloud.com/DLZK33hUEZ7e4gnB7ZWjPfZ7ZCJp3VkZNVZZnHXZZFMbZfJZCFZ3XZTCFH4OqTEe0mykQEBAPiqQC1OjNX/becky.jpg"),
    m("The Wrath of Becky", "https://dobby.site/movies/the-wrath-of-becky-2023?pl=-1&_u=hchh6mwu5k&_t=h5aqtn&_rsrc=chrome/newtab", "becky2.jpg", "https://edef11.pcloud.com/DLZQi3hUEZ4g4gnB7ZWjPfZ7ZrJp3VkZNVZZnHXZZKqMZapZo5ZqLZSkLMrWKXRfFAThY4OHFfpXEVobak/becky2.jpg"),

    m("Black Swan", "https://dobby.site/list/Watch%20Later/55?_rsrc=chrome/newtab&_t=2tq1n7&_u=hchh6mwu5k&pl=-1", "blackswan.jpg", "https://edef1.pcloud.com/DLZ6c3hUEZBt4gnB7ZWjPfZ7ZjFp3VkZNVZZnHXZZcII5ZM0ZQJZ7JZoLjtGhliwmVVFKhcVYaKYbQztTAy/blackswan.jpg"),
    m("Chocolat", "https://dobby.site/movies/chocolat-2000?pl=-1&_u=hchh6mwu5k&_t=n8hvit&_rsrc=chrome/newtab", "chocolat.jpg", "https://edef3.pcloud.com/DLZ0c3hUEZLK4gnB7ZWjPfZ7ZfHp3VkZNVZZnHXZZ4kxZzJZ5HZg7Z1BMtOtUPPjk5IwDPM24kyuy4o4pk/chocolat.jpg"),
    m("Coyote Ugly", "https://dobby.site/movies/coyote-ugly-2000?pl=-1&_u=hchh6mwu5k&_t=n8hvit&_rsrc=chrome/newtab", "coyote.jpg", "https://edef5.pcloud.com/DLZkr3hUEZkx4gnB7ZWjPfZ7ZJzp3VkZNVZZnHXZZj8FZMzZ2HZJXZlQ8mkl6u4tuP2qnDd47AURe59UhV/coyote.jpg"),
    m("Clueless", "https://dobby.site/movies/clueless-1995?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "clueless.jpg", "https://edef5.pcloud.com/DLZaXGhUEZiN4gnB7ZWjPfZ7Znzp3VkZNVZZnHXZZJsm7Z4JZiHZJFZrURMR7Qo46FVAqw5lJd0WhGaj43k/clueless.jpg"),
    m("Crawl", "https://dobby.site/movies/crawl-2019?pl=-1&_u=hchh6mwu5k&_t=qgkarn&_rsrc=chrome/newtab", "crawl.jpg", "https://edef6.pcloud.com/DLZJo3hUEZYd4gnB7ZWjPfZ7ZNzp3VkZNVZZnHXZZcrKZXFZG5ZhRZlTyjpUrWdP5T9DDsOhfwxR5BjmnX/crawl.jpg"),
    m("Cruel Intentions", "https://dobby.site/list/Watch%20Later/26?_rsrc=chrome/newtab&_t=4ar4fj&_u=hchh6mwu5k&pl=-1", "cruel.jpg", "https://edef2.pcloud.com/DLZBo3hUEZPl4gnB7ZWjPfZ7ZHRp3VkZNVZZnHXZZH9BZXkZwXZSJZyHnEFyQyFEBQw0AKkEfamYaBeUu7/cruel.jpg"),
    m("Dark City", "https://dobby.site/list/Watch%20Later/27?_rsrc=chrome/newtab&_t=fse6bl&_u=hchh6mwu5k&pl=-1", "darkcity.jpg", "https://edef2.pcloud.com/DLZfyGhUEZxt4gnB7ZWjPfZ7Z9Rp3VkZNVZZnHXZZh0X7ZLRZY5ZxFZ8g0tCHLLzRQRot4oouOorpqJwLCy/darkcity.jpg"),
    m("Dawn of the Dead (2004)", "https://dobby.site/movies/dawn-of-the-dead-2004?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "dawn.jpg", "https://edef8.pcloud.com/DLZByGhUEZ8t4gnB7ZWjPfZ7ZARp3VkZNVZZnHXZZLuLZhHZ0pZ25Zid3vYYCHkNQ7SX3AGufzHLuSIXFX/dawn.jpg"),
    m("Dennis the Menace", "https://dobby.site/movies/dennis-the-menace-1993?_rsrc=chrome/newtab&_t=atjrk6&_u=hchh6mwu5k&pl=-1", "dennis.jpg", "https://edef8.pcloud.com/DLZd7GhUEZ4O4gnB7ZWjPfZ7ZvLp3VkZNVZZnHXZZqh9Z75Z7RZa5ZKTymcM1XrHFiqXluwnmmD8eENKYX/dennis.jpg"),
    m("Dogma", "https://dobby.site/movies/dogma-1999?_rsrc=chrome/newtab&_t=kba74h&_u=hchh6mwu5k&pl=-1", "dogma.jpg", "https://edef7.pcloud.com/DLZEkGhUEZDI4gnB7ZWjPfZ7Zm4p3VkZNVZZnHXZZHlQ7ZrVZRXZQzZ5OuzW333gxRFGuVK4k1iV7E0k6d7/dogma.jpg"),
    m("Don't Breathe", "https://dobby.site/movies/dont-breathe-2016?pl=-1&_u=hchh6mwu5k&_t=kba74h&_rsrc=chrome/newtab", "dontbreathe.jpg", "https://edef3.pcloud.com/DLZBJGhUEZdo4gnB7ZWjPfZ7ZP4p3VkZNVZZnHXZZaKakZm5ZULZ3RZ4I1z6PWBtYzHPuoKBl1fqBnnACDV/dontbreathe.jpg"),
    m("Don't Breathe 2", "https://dobby.site/movies/dont-breathe-2-2021?pl=-1&_u=hchh6mwu5k&_t=3mg952&_rsrc=chrome/newtab", "dontbreathe2.jpg", "https://edef5.pcloud.com/DLZR5GhUEZkr4gnB7ZWjPfZ7Zo4p3VkZNVZZnHXZZMNHkZ2HZdRZ80ZoEQ01rk4OuJd1D8B6v1K7RfwodnX/dontbreathe2.jpg"),
    m("Dracula (1992)", "https://dobby.site/movies/dracula-1992?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "dracula.jpg", "https://edef9.pcloud.com/DLZP5GhUEZRk8gnB7ZWjPfZ7ZY8p3VkZNVZZnHXZZSYT7ZJRZc5ZmkZQo5pb8Mpvib5wHEIwvHmDz93rSTV/dracula.jpg"),

    m("Edward Scissorhands", "https://dobby.site/movies/edward-scissorhands-1990?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "edward.jpg", "https://edef12.pcloud.com/DLZ9VGhUEZfN4gnB7ZWjPfZ7Zg8p3VkZNVZZnHXZZDX4ZnRZCLZu5Z4i8McucspaYn8C97rM4xjhqU12I7/edward.jpg"),
    m("Elvis", "https://dobby.site/movies/elvis-2022?_rsrc=chrome/newtab&_t=oo4prj&_u=hchh6mwu5k&pl=-1", "elvis.jpg", "https://edef12.pcloud.com/DLZ30GhUEZTy8gnB7ZWjPfZ7Zv8p3VkZNVZZnHXZZmWmZa5ZaHZSRZfH7krqydt2fxRBFmc7w0zjXmU9Qy/elvis.jpg"),
    m("Fight Club", "https://dobby.site/movies/fight-club-1999?pl=-1&_u=hchh6mwu5k&_t=n8hvit&_rsrc=chrome/newtab", "fight.jpg", "https://edef4.pcloud.com/DLZe5GhUEZKr4gnB7ZWjPfZ7ZLQp3VkZNVZZnHXZZNbPZx0ZDVZapZVMVlnsuMfQBCFJ1d9FW1nzvaj85k/fight.jpg"),
    m("Ghost", "https://dobby.site/movies/ghost-1990?_rsrc=chrome/newtab&_t=aed2ap&_u=hchh6mwu5k&pl=-1", "ghost.jpg", "https://edef7.pcloud.com/DLZ65GhUEZNr4gnB7ZWjPfZ7ZmYp3VkZNVZZnHXZZauLZBJZGHZgkZxRCK9BptFfzm0wGvT2vJYFbLDDDX/ghost.jpg"),

    m("Ginger Snaps", "https://dobby.site/movies/ghost-1990?_rsrc=chrome/newtab&_t=aed2ap&_u=hchh6mwu5k&pl=-1", "ginger.jpg", "https://edef7.pcloud.com/DLZjzGhUEZXY8gnB7ZWjPfZ7ZdYp3VkZNVZZnHXZZwbAZXFZdHZHFZO2wuMRv3uaX4FUDGn8bMDkUqUWey/ginger.jpg"),
    m("Ginger Snaps 2", "https://www.effedupmovies.com/ginger-snaps-2-2004/", "ginger2.jpg", "https://edef12.pcloud.com/DLZ2pGhUEZck8gnB7ZWjPfZ7ZJmp3VkZNVZZnHXZZN0OZBHZfLZX0Z3W4Ds4PlwMjyGGVzaEqThFbPpcJ7/ginger2.jpg"),
    m("Ginger Snaps 3", "https://www.lookmovie2.to/movies/view/ginger-snaps-back-the-beginning-2004", "ginger3.jpg", "https://edef6.pcloud.com/DLZPLGhUEZHz8gnB7ZWjPfZ7Znmp3VkZNVZZnHXZZ9jt7ZcHZiLZQXZLTy04CUo1c0cz7v2Olyv0FYtqH6V/ginger3.jpg"),

    m("Great Expectations (1998)", "https://dobby.site/movies/great-expectations-1998?pl=-1&_u=hchh6mwu5k&_t=7jq6kp&_rsrc=chrome/newtab", "expectations.jpg", "https://edef9.pcloud.com/DLZGHGhUEZLR8gnB7ZWjPfZ7Z8bp3VkZNVZZnHXZZedF7Zy5ZLpZkJZrYtpVTHBeOhHYfYS8HxJwYUVg23y/expectations.jpg"),
    m("Hail Satan?", "https://dobby.site/list/Watch%20Later/37?_rsrc=chrome/newtab&_t=lhbiio&_u=hchh6mwu5k&pl=-1", "hail.jpg", "https://edef12.pcloud.com/DLZ4zGhUEZxQ8gnB7ZWjPfZ7Zlbp3VkZNVZZnHXZZG0eZi5ZQFZfJZhNQrkKMrIWuuWjomN5ANpYn1x8NX/hail.jpg"),
    m("Hedwig and the Angry Inch", "https://dobby.site/movies/hedwig-and-the-angry-inch-2001?_rsrc=chrome/newtab&_t=7r6j4e&_u=hchh6mwu5k&pl=-1", "hedwig.jpg", "https://edef2.pcloud.com/DLZCzGhUEZv48gnB7ZWjPfZ7Zkhp3VkZNVZZnHXZZwe4ZDHZy5Z3HZz2WuXTQ35gyjxbbNmnn6Qycnt7KV/hedwig.jpg"),

    m("From Dusk Till Dawn", "https://dobby.site/movies/from-dusk-till-dawn-1996?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "fromdusk.jpg", "https://edef10.pcloud.com/DLZsRGhUEZHp8gnB7ZWjPfZ7Zuhp3VkZNVZZnHXZZbYGZ1RZXXZbJZnrgwjQRqbDVkupchPHX9yLqzMrGV/fromdusk.jpg"),
    m("From Dusk Till Dawn 3: The Hangman's Daughter", "https://dobby.site/movies/from-dusk-till-dawn-3-the-hangmans-daughter-1999?pl=-1&_t=mr9gmc&_rsrc=chrome/newtab&_u=hchh6mwu5k", "fromdusk3.jpg", "https://edef2.pcloud.com/DLZG4GhUEZnQ8gnB7ZWjPfZ7ZNSp3VkZNVZZnHXZZxLLZMLZy5ZcJZapYAGCUYtnhuWww1cns4VFbXB45X/fromdusk3.jpg"),

    m("I Know What You Did Last Summer", "https://dobby.site/movies/i-know-what-you-did-last-summer-1997?_rsrc=chrome/newtab&_t=badn4n&_u=hchh6mwu5k&pl=-1", "iknow.jpg", "https://edef2.pcloud.com/DLZe8GhUEZnf8gnB7ZWjPfZ7Zpjp3VkZNVZZnHXZZxi5ZsRZqHZbJZ0Jc4Qj05XxupC1zTYdS9bk6cH9OV/iknow.jpg"),
    m("I Still Know What You Did Last Summer", "https://dobby.site/movies/i-still-know-what-you-did-last-summer-1998?pl=-1&_u=hchh6mwu5k&_t=472cu6&_rsrc=chrome/newtab", "iknow2.jpg", "https://edef11.pcloud.com/DLZ38GhUEZsm8gnB7ZWjPfZ7Z2jp3VkZNVZZnHXZZbizZA8ZbRZrFZm2Bmw8k2aI7h1YsiFtnxazNNdzEX/iknow2.jpg"),
    m("Interview with the Vampire", "https://dobby.site/movies/interview-with-the-vampire-1994?_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "interview.jpg", "https://edef10.pcloud.com/DLZeQGhUEZ3m8gnB7ZWjPfZ7Zajp3VkZNVZZnHXZZ7gVZ15ZYkZOZ5hWEu3suKKknWfj4bgyxEQOqBkkk/interview.jpg"),

    m("Jolt", "https://dobby.site/movies/jolt-2021?_rsrc=chrome/newtab&_t=1oaoul&_u=hchh6mwu5k&pl=-1", "jolt.jpg", "https://edef3.pcloud.com/DLZdSGhUEZ5D8gnB7ZWjPfZ7Zzup3VkZNVZZnHXZZ1CxZg4Zw0ZYVZu5esoT68U8FBER5JDYY0hkPh7MiV/jolt.jpg"),
    m("Jurassic Park", "https://dobby.site/movies/jurassic-park-1993?_rsrc=chrome/newtab&_t=rvhrmk&_u=hchh6mwu5k&pl=-1", "jp.jpg", "https://edef4.pcloud.com/DLZxhGhUEZuD8gnB7ZWjPfZ7ZWup3VkZNVZZnHXZZ4NtZHpZQzZuFZfHaCGrUGQCB6MwNbBR14M7j6jVB7/jp.jpg"),
    m("Let Me In", "https://dobby.site/movies/let-me-in-2010?pl=-1&_u=hchh6mwu5k&_t=7jq6kp&_rsrc=chrome/newtab", "letmein.jpg", "https://edef4.pcloud.com/DLZ0bGhUEZku8gnB7ZWjPfZ7Ztup3VkZNVZZnHXZZq9XZNzZE0ZbHZu1lGUyAydPYajKyDL3rKCkhmfh7k/letmein.jpg"),

    m("Life After Beth", "https://dobby.site/list/Watch%20Later/17?_rsrc=chrome/newtab&_t=d81d2t&_u=hchh6mwu5k&pl=-1", "beth.jpg", "https://edef4.pcloud.com/DLZ8bGhUEZUu8gnB7ZWjPfZ7Ztpp3VkZNVZZnHXZZga0Zf4Z8LZipZ6IpkFX8FEguvNbD5pjo5c4OWeQlX/beth.jpg"),
    m("Lisa Frankenstein", "https://dobby.site/movies/lisa-frankenstein-2024?_rsrc=chrome/newtab&_t=cpdupp&_u=hchh6mwu5k&pl=-1", "lisa.jpg", "https://edef9.pcloud.com/DLZUbGhUEZ8B8gnB7ZWjPfZ7Zkfp3VkZNVZZnHXZZeC2ZuLZqRZGzZ6YDuu1uSOEXayOV7LfSfgQt2IPMk/lisa.jpg"),
    m("Mary Shelley's Frankenstein", "https://dobby.site/list/Watch%20Later/77?pl=-1&_u=hchh6mwu5k&_t=cpdupp&_rsrc=chrome/newtab", "frankeinstein.jpg", "https://edef11.pcloud.com/DLZ0SGhUEZyg8gnB7ZWjPfZ7Z2fp3VkZNVZZnHXZZ8X0ZfRZl7ZoHZhax3XpfQCyLdTgEvWlykL8yxcE4X/frankeinstein.jpg"),

    m("Moulin Rouge!", "https://dobby.site/movies/moulin-rouge-2001?pl=-1&_u=hchh6mwu5k&_t=oo4prj&_rsrc=chrome/newtab", "moulin.jpg", "https://edef3.pcloud.com/DLZvSGhUEZJ18gnB7ZWjPfZ7Zd2p3VkZNVZZnHXZZ80CZ84Z3XZoHZi9srfwr8hkB8DyaEhcVGfRJJ3JxV/moulin.jpg"),
    m("Mrs Doubtfire", "https://dobby.site/movies/mrs-doubtfire-1993?_rsrc=chrome/newtab&_t=8t6qkg&_u=hchh6mwu5k&pl=-1", "doubtfire.jpg", "https://edef8.pcloud.com/DLZ6jGhUEZ2e8gnB7ZWjPfZ7ZVWp3VkZNVZZnHXZZcK2Z0pZJHZX0ZK71bXexsljbIfk6gm2rnvJH8aOe7/doubtfire.jpg"),
    m("Muse: Simulation Theory", "https://dobby.site/list/Watch%20Later/3?_u=hchh6mwu5k&_t=31f1bb&_rsrc=chrome/newtab", "muse.jpg", "https://edef7.pcloud.com/DLZ0uGhUEZCn8gnB7ZWjPfZ7ZjWp3VkZNVZZnHXZZHJm7ZvRZSJZuFZyLeMgsJbG7J3dNNtbUBsUzsOHYxV/muse.jpg"),
    m("Natural Born Killers", "https://dobby.site/movies/natural-born-killers-1994?_rsrc=chrome/newtab&_t=n6iepe&_u=hchh6mwu5k&pl=-1", "naturalbornkillers.jpg", "https://edef11.pcloud.com/DLZifGhUEZfg8gnB7ZWjPfZ7ZwWp3VkZNVZZnHXZZuxOZKJZeJZ7VZxp37z29XG1HFgGgLhHPEVjpwWPKk/naturalbornkillers.jpg"),

    m("No One Will Save You", "https://dobby.site/movies/no-one-will-save-you-2023?pl=-1&_u=hchh6mwu5k&_t=qgkarn&_rsrc=chrome/newtab", "noone.jpg", "https://edef6.pcloud.com/DLZQWGhUEZ4K8gnB7ZWjPfZ7Zysp3VkZNVZZnHXZZyWM7ZtLZfHZ2pZ5pgkhrS9dbXgPbCcVQj4xYOXSlby/noone.jpg"),
    m("Old People", "https://dobby.site/movies/old-people-2022?_u=hchh6mwu5k&_t=qgkarn&_rsrc=chrome/newtab", "oldpeople.jpg", "https://edef8.pcloud.com/DLZ6fGhUEZ8P8gnB7ZWjPfZ7ZSsp3VkZNVZZnHXZZw8gZqpZcJZLJZlaHHy0rnJfj3NVUN9riYN7fXDdLy/oldpeople.jpg"),
    m("Only Lovers Left Alive", "https://dobby.site/movies/only-lovers-left-alive-2013?pl=-1&_u=hchh6mwu5k&_t=muet4h&_rsrc=chrome/newtab", "lovers.jpg", "https://edef11.pcloud.com/DLZTBGhUEZPg8gnB7ZWjPfZ7Z6sp3VkZNVZZnHXZZ6uBZWFZR5Z7VZSSeFBrc8eURBs5ByQMXVIV5O64vV/lovers.jpg"),

    m("The Open House", "https://dobby.site/movies/the-open-house-2018?_u=hchh6mwu5k&_t=2d04qs&_rsrc=chrome/newtab", "openhouse.jpg", "https://edef9.pcloud.com/DLZSBGhUEZgT8gnB7ZWjPfZ7ZJDp3VkZNVZZnHXZZ4M4ZiVZqFZHVZ2NmEytjWjojHJ1mHcdbBlf2Ij9I7/openhouse.jpg"),
    m("Pan's Labyrinth (HU)", "https://videa.hu/videok/film-animacio/a-faun-labirintusa-2006-fantasztikus-mexikoi-spanyol-amerikai-u5Gi4DbSGJeU1MmA", "pans.jpg", "https://edef11.pcloud.com/DLZYWGhUEZKx8gnB7ZWjPfZ7ZaDp3VkZNVZZnHXZZyySZCLZ25ZjLZ5xLgqnM5YMYe21iC1t8r0HJ09LpV/pans.jpg"),
    m("Paris Is Burning", "https://youtu.be/nI7EhpY2yaA?si=MayNBLHYYmjgSc90", "paris.jpg", "https://edef3.pcloud.com/DLZiWGhUEZ8d8gnB7ZWjPfZ7ZF1p3VkZNVZZnHXZZq6RZ60ZQFZfpZoDbYPfiSR1SeMovNVgIAubF6yvKX/paris.jpg"),
    m("Passengers", "https://dobby.site/movies/passengers-2016?_rsrc=chrome/newtab&_t=9gvj71&_u=hchh6mwu5k&pl=-1", "passangers.jpg", "https://edef2.pcloud.com/DLZYsGhUEZnd8gnB7ZWjPfZ7ZW1p3VkZNVZZnHXZZNrWZMHZBRZsJZkqWS9cYG5ofK2oMHrNDsMzW8Wv9V/passangers.jpg"),

    m("Perfume: The Story of a Murderer", "https://dobby.site/movies/perfume-the-story-of-a-murderer-2006?pl=-1&_u=hchh6mwu5k&_t=3mg952&_rsrc=chrome/newtab", "perfume.jpg", "https://edef3.pcloud.com/DLZvWGhUEZGK8gnB7ZWjPfZ7Zd1p3VkZNVZZnHXZZ93JZxzZlpZiLZUYbHJgLtFEBb3A1rxwnwPYnumUDX/perfume.jpg"),
    m("Poor Things", "https://dobby.site/movies/poor-things-2023?_rsrc=chrome/newtab&_t=r1f1a0&_u=hchh6mwu5k&pl=-1", "poorthings.jpg", "https://edef8.pcloud.com/DLZpDGhUEZaq8gnB7ZWjPfZ7Z7ep3VkZNVZZnHXZZhWmZU0ZlJZ25Z6AEdny4OdIjYjBaSM4LcVbexUKzk/poorthings.jpg"),
    m("Practical Magic", "https://dobby.site/movies/practical-magic-1998?_rsrc=chrome/newtab&_t=i0ndab&_u=hchh6mwu5k&pl=-1", "practical.jpg", "https://edef8.pcloud.com/DLZhMGhUEZbG8gnB7ZWjPfZ7Zjep3VkZNVZZnHXZZ1TqZppZ6zZAXZ5PJ5lnt7fIpYP8QJn2GoSVgR7DYk/practical.jpg"),
    m("Pretty Woman", "https://dobby.site/movies/pretty-woman-1990?_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "prettywoman.jpg", "https://edef2.pcloud.com/DLZ0MGhUEZ738gnB7ZWjPfZ7Zwep3VkZNVZZnHXZZnS37Z80ZNRZeVZYh1FtBkiCW71UQG61Q5TtmUc8507/prettywoman.jpg"),
    m("PS Burn This Letter", "https://dobby.site/list/Watch%20Later/23?pl=-1&_u=hchh6mwu5k&_t=31f1bb&_rsrc=chrome/newtab", "ps.jpg", "https://edef11.pcloud.com/DLZT1GhUEZtE8gnB7ZWjPfZ7Zrep3VkZNVZZnHXZZym4Z4LZdkZ9FZ1ToLQG4itiLaez3INQtqij7kp01V/ps.jpg"),

    m("Romeo + Juliet (1996)", "https://dobby.site/movies/romeo-plus-juliet-1996?pl=-1&_u=hchh6mwu5k&_t=oo4prj&_rsrc=chrome/newtab", "romeo.jpg", "https://edef10.pcloud.com/DLZBnGhUEZBN8gnB7ZWjPfZ7Z6np3VkZNVZZnHXZZLBQZmJZyQZipZiCCD2I3KCHkJxvTBBjPf541dNHmk/romeo.jpg"),
    m("Romy and Michele's High School Reunion", "https://dobby.site/movies/romy-and-micheles-high-school-reunion-1997?_rsrc=chrome/newtab&_t=6elmfm&_u=hchh6mwu5k&pl=-1", "romy.jpg", "https://edef1.pcloud.com/DLZnMGhUEZxv8gnB7ZWjPfZ7ZX9p3VkZNVZZnHXZZgaxZT0Z97ZO7Z1ynoRaVncqYr2kk9djBp2HFyaFJX/romy.jpg"),
    m("Queen of the Damned", "https://dobby.site/movies/queen-of-the-damned-2002?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "qotd.jpg", "https://edef6.pcloud.com/DLZPYGhUEZgb8gnB7ZWjPfZ7Ze9p3VkZNVZZnHXZZ7meZGzZsJZw4Zq1Hl9bfW9vXhPu2QOa5psyLRkLdk/qotd.jpg"),

    m("Sin City", "https://dobby.site/list/Watch%20Later/49?_rsrc=chrome/newtab&_t=60t0c8&_u=hchh6mwu5k&pl=-1", "sin.jpg", "https://edef6.pcloud.com/DLZ4eGhUEZeI8gnB7ZWjPfZ7ZI9p3VkZNVZZnHXZZ3rgZvzZVpZ6XZEk6O13FWsCS6OOKMvO4eRp973ERX/sin.jpg"),
    m("Sin City: A Dame to Kill For", "https://dobby.site/list/Watch%20Later/51?pl=-1&_u=hchh6mwu5k&_t=31f1bb&_rsrc=chrome/newtab", "sin2.jpg", "https://edef12.pcloud.com/DLZHxGhUEZeJQgnB7ZWjPfZ7ZFMp3VkZNVZZnHXZZoea7Z9zZhkZzRZVjdWNXAXOU0ImKaYEhK0WFQUwEsX/sin2.jpg"),

    m("Sister Act", "https://dobby.site/movies/sister-act-1992?pl=-1&_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", "sister1.jpg", "https://edef1.pcloud.com/DLZmJADUEZua6GnB7ZWjPfZ7ZCPp3VkZNVZZnHXZZ9dFZbJZfFZyLZ3U8n4uznPM7spjif1tWAMHdIb7OV/sister1.jpg"),
    m("Sister Act 2: Back in the Habit", "https://dobby.site/movies/sister-act-2-back-in-the-habit-1993?pl=-1&_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", "sister2.jpeg", "https://edef8.pcloud.com/DLZqJADUEZM36GnB7ZWjPfZ7Z4Pp3VkZNVZZnHXZZeLpZrRZU0ZJ4ZQ75PGN1duFbBdHKGp07q7zhVt65V/sister2.jpeg"),

    m("Sweeney Todd", "https://dobby.site/movies/sweeney-todd-the-demon-barber-of-fleet-street-2007?_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "sweeney.jpg", "https://edef3.pcloud.com/DLZ8CGhUEZukQgnB7ZWjPfZ7ZyCp3VkZNVZZnHXZZc3OZMJZfJZj4ZvPfIWjasDThwnjwi4Wlp9VLlVq47/sweeney.jpg"),

    m("The Best Exotic Marigold Hotel", "https://dobby.site/movies/the-best-exotic-marigold-hotel-2011?pl=-1&_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", "marigold.jpeg", "https://edef2.pcloud.com/DLZnOu1UEZsHkinB7ZWjPfZ7ZDlp3VkZNVZZnHXZZ4eMZDLZ5LZxzZYgQ5zVSoAcXM9mAC0k1zQpivu1vy/marigold.jpeg"),
    m("The Second Best Exotic Marigold Hotel", "https://dobby.site/movies/the-second-best-exotic-marigold-hotel-2015?pl=-1&_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", "marigold2.jpg", "https://edef4.pcloud.com/DLZ5Uu1UEZn4kinB7ZWjPfZ7Ztlp3VkZNVZZnHXZZChq7Zg4ZzVZKHZmFhVquT0iUHc33lGQL2IVuBzMy2V/marigold2.jpg"),

    m("The Cell", "https://dobby.site/movies/the-cell-2000?pl=-1&_u=hchh6mwu5k&_t=2d04qs&_rsrc=chrome/newtab", "cell.jpg", "https://edef10.pcloud.com/DLZUxGhUEZwJQgnB7ZWjPfZ7Z5dp3VkZNVZZnHXZZ0MR7Z2HZ7HZXFZKryHXKwRuYLRnL8fmx4XTztKd0sy/cell.jpg"),
    m("The Craft", "https://dobby.site/movies/the-craft-1996?pl=-1&_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", "craft.jpeg", "https://edef7.pcloud.com/DLZkEc1UEZBBYrnB7ZWjPfZ7ZuEp3VkZNVZZnHXZZpCA0ZvLZrHZJ0ZrSqCRriBTnJrRHuMvK4mu8jawX6V/craft.jpeg"),
    m("The Craft: Legacy", "https://dobby.site/movies/the-craft-legacy-2020?_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", "craft.png", "https://edef3.pcloud.com/DLZ4tc1UEZ3hYrnB7ZWjPfZ7Zl6p3VkZ3VZZnHXZZSvl7ZFFZTRZaHZinCDrph6hFBrjbL5xeRhSRAVtiVV/craft.png"),

    m("The Crow", "https://dobby.site/movies/the-crow-1994?_u=hchh6mwu5k&_t=2d04qs&_rsrc=chrome/newtab", "thecrow.jpg", "https://edef5.pcloud.com/DLZKhIeUEZ85XonB7ZWjPfZ7ZL3p3VkZNVZZnHXZZyvQZizZMJZz8ZuNXFSYY3THpIEOyl7PiEzVQ1cC3y/thecrow.jpg"),
    m("The Crow: City of Angels", "https://www.lookmovie2.to/movies/play/1689756707-the-crow-city-of-angels-1996", "thecrow2.jpeg", "https://edef1.pcloud.com/DLZmuIeUEZAYXonB7ZWjPfZ7Zn3p3VkZNVZZnHXZZzt8ZD4ZHpZbzZGTUW4PUaKcfsHlL0tuVEEuUquh2V/thecrow2.jpeg"),
    m("The Crow: Salvation", "https://www.lookmovie27.to/movies/view/0132910-the-crow-salvation-2000", "thecrow3.jpg", "https://edef4.pcloud.com/DLZkuIeUEZ38XonB7ZWjPfZ7ZXGp3VkZNVZZnHXZZmD8ZcFZDzZupZ36xDvlRQbVLJMtm9RPGKnLMXNtTX/thecrow3.jpg"),

    m("The House Bunny", "https://dobby.site/movies/the-house-bunny-2008?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "bunny.jpg", "https://edef9.pcloud.com/DLZSwGhUEZYpQgnB7ZWjPfZ7ZgGp3VkZNVZZnHXZZfA2kZrHZSHZSzZ4WvsjLeG7KH7raxHG3rGCbDhE3Yk/bunny.jpg"),

    // NOTE: Their remote mermaid.jpg URL was listed under "The Lost Boys" by mistake.
    // We assign it to The Little Mermaid here:
    m("The Little Mermaid (1989)", "https://dobby.site/movies/the-little-mermaid-1989?_rsrc=chrome/newtab&_t=ev4ijt&_u=hchh6mwu5k&pl=-1", "mermaid.jpg", "https://edef1.pcloud.com/DLZoCGhUEZgVQgnB7ZWjPfZ7Z7vp3VkZNVZZnHXZZV2NZQ8ZzHZ1JZOJFKMg44FISsTRj5rKSJNybUXkmV/mermaid.jpg"),

    m("The Lost Boys", "https://dobby.site/movies/the-lost-boys-1987?pl=-1&_u=hchh6mwu5k&_t=muet4h&_rsrc=chrome/newtab", "lostboys.jpg", null),

    m("The Others", "https://dobby.site/movies/the-others-2001?pl=-1&_u=hchh6mwu5k&_t=2d04qs&_rsrc=chrome/newtab", "others.jpg", "https://edef6.pcloud.com/DLZBwGhUEZtpQgnB7ZWjPfZ7ZNvp3VkZNVZZnHXZZQx9ZNzZPVZp0ZUwJbqcBLTEVpR3sYnG5Ir8DNmXqy/others.jpg"),
    m("The Greatest Showman", "https://dobby.site/movies/the-greatest-showman-2017?_rsrc=chrome/newtab&_t=hna2u0&_u=hchh6mwu5k&pl=-1", "showman.jpeg", "https://edef7.pcloud.com/DLZMQnnUEZwQWy9B7ZWjPfZ7ZScp3VkZNVZZnHXZZJNpZk5Z37ZGFZzmzYOj5s4F8zcc6CJUsR6XJoxdgk/showman.jpeg"),

    m("The Phantom of the Opera (2004)", "https://dobby.site/movies/the-phantom-of-the-opera-2004?_u=hchh6mwu5k&_t=ia79jt&_rsrc=chrome/newtab", "phantom.jpg", "https://edef3.pcloud.com/DLZ8NAnUEZGJV79B7ZWjPfZ7ZvyH3VkZNVZZnHXZZXd6ZXkZxJZsJZTt9cXk3XhM56L7SPAhTWy4wK8LE7/phantom.jpg"),
    m("The Watchers (2024)", "https://dobby.site/movies/the-watchers-2024?pl=-1&_u=hchh6mwu5k&_t=qgkarn&_rsrc=chrome/newtab", "watchers.jpg", "https://edef5.pcloud.com/DLZ1KGhUEZ7HQgnB7ZWjPfZ7Z5kH3VkZNVZZnHXZZkiCZ30ZD4ZBFZe6MwD2nOQipBjOovoShMASgxVBKk/watchers.jpg"),

    m("Under the Mountain", "https://dobby.site/movies/under-the-mountain-2009?_rsrc=chrome/newtab&_t=6a5lm2&_u=hchh6mwu5k&pl=-1", "mountain.jpg", "https://edef11.pcloud.com/DLZOlGhUEZvLQgnB7ZWjPfZ7ZnkH3VkZNVZZnHXZZioaZyzZQpZO7Zy8Ab4yCqY67bJHPgG6jGiHg6CEMy/mountain.jpg"),
    m("Urban Legend", "https://dobby.site/list/Watch%20Later/83?_rsrc=chrome/newtab&_t=907cb9&_u=hchh6mwu5k&pl=-1", "urbanlegend.jpg", "https://edef4.pcloud.com/DLZWlGhUEZ5LQgnB7ZWjPfZ7ZAkH3VkZNVZZnHXZZhrbZz8ZOkZh5ZqG1IBUQGPUkwl2PVBi1SBLgdDsA7/urbanlegend.jpg"),
    m("Warm Bodies", "https://dobby.site/movies/warm-bodies-2013?_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", "warmbodies.jpg", "https://edef8.pcloud.com/DLZdlGhUEZp8QgnB7ZWjPfZ7ZFXH3VkZNVZZnHXZZMIJZJ0Za5Z15ZQxGREXP9aSzVLlDFRYwWqjMYI3EV/warmbodies.jpg"),
    m("Wicked Little Letters", "https://dobby.site/movies/wicked-little-letters-2024?_rsrc=chrome/newtab&_t=j7ij2s&_u=hchh6mwu5k&pl=-1", "wickedlittle.jpg", "https://edef10.pcloud.com/DLZ2dGhUEZe8QgnB7ZWjPfZ7ZeXH3VkZNVZZnHXZZJ9gZ2pZiHZakZtXhdGOaSGtjamqxciKT0b7EiygQV/wickedlittle.jpg"),
    m("Wildling", "https://dobby.site/movies/wildling-2018?_u=hchh6mwu5k&_t=2d04qs&_rsrc=chrome/newtab", "wildling.jpeg", "https://edef4.pcloud.com/DLZw6j9UEZi70k9B7ZWjPfZ7ZH0H3VkZNVZZnHXZZ0AiZgVZbHZFzZQVUhvWlRJkBo6ICXtoLfm58KGggy/wildling.jpeg"),

    // Provided titles without pCloud thumbs — keep local files or add later:
    m("The Mask", "https://dobby.site/movies/the-mask-1994?pl=-1&_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", "mask.jpg"),
    m("There's Something About Mary", "https://dobby.site/movies/theres-something-about-mary-1998?pl=-1&_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", "mary.jpg"),
  ];

  // ===== RENDER =====
  const grid = document.getElementById("moviesGrid");

  movies.forEach(({ title, link, file, remote }) => {
    const a = document.createElement("a");
    a.className = "card";
    a.href = link;
    a.target = "_blank";
    a.rel = "noopener";

    const box = document.createElement("div");
    box.className = "thumb";

    const img = document.createElement("img");
    img.alt = title;

    const localSrc = THUMB_DIR + file;
    img.src = localSrc;

    img.addEventListener("error", () => {
      // Try remote once; then show a placeholder
      if (remote && img.dataset.remoteTried !== "1") {
        img.dataset.remoteTried = "1";
        img.src = remote;
      } else {
        box.innerHTML = `<div class="broken">Image not found<br><small>${localSrc}${remote ? "<br>↳ " + remote : ""}</small></div>`;
      }
    });

    box.appendChild(img);

    const cap = document.createElement("div");
    cap.className = "title";
    cap.textContent = title;

    a.appendChild(box);
    a.appendChild(cap);
    grid.appendChild(a);
  });
});
