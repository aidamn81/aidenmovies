// Helper: slug from title → for local fallback image
const slug = s => s.toLowerCase()
  .replace(/&/g,'and')
  .replace(/[^a-z0-9]+/g,'-')
  .replace(/^-+|-+$/g,'');

// Render a grid item with external thumb + local fallback
function makeCard({ title, link, thumb }) {
  const a = document.createElement('a');
  a.className = 'card';
  a.href = link;
  a.target = '_blank';
  a.rel = 'noopener';
  a.title = title;

  const img = document.createElement('img');
  const fallback = `assets/thumb/${slug(title)}.jpg`;
  img.src = thumb && thumb.trim() ? thumb : fallback;
  // if external thumbnail fails, swap to local fallback
  img.onerror = () => { if (img.src !== fallback) img.src = fallback; };

  a.appendChild(img);
  return a;
}

const items = [
  { title:"28 days later", link:"https://dobby.site/movies/28-days-later-dot-dot-dot-2002?_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef10.pcloud.com/DLZ8ofLtEZO8STuB7ZWjPfZ7ZEPF3VkZNVZZnHXZZ7vkZW4ZL8Z7QZuM5Jl6HpFQ7GLL1oVDQIvSgbASH7/28days.jpg" },
  { title:"28 weeks later", link:"https://dobby.site/movies/28-weeks-later-2007?_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef9.pcloud.com/DLZ4d3hUEZf04gnB7ZWjPfZ7ZtxF3VkZNVZZnHXZZAgRZIHZmkZ50ZSB8SqHieakfjmrJBoUO9uHE2ODOy/28weeks.jpg" },
  { title:"30 days of night", link:"https://dobby.site/movies/30-days-of-night-2007?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef4.pcloud.com/DLZAl3hUEZ6V4gnB7ZWjPfZ7ZzwF3VkZNVZZnHXZZ1PgZRzZtJZDHZ9zNE2RdJhbYhPCaUePALeL5pLGUy/30days.jpg" },
  { title:"Addams Family", link:"https://dobby.site/movies/the-addams-family-1991?pl=-1&_u=hchh6mwu5k&_t=33dp8k&_rsrc=chrome/newtab", thumb:"https://edef10.pcloud.com/DLZyq3hUEZup4gnB7ZWjPfZ7ZPoF3VkZNVZZnHXZZmlsZwHZK4Z25Z5Nh4IsQk7CuAdLw9R62bzjyIrHLk/addams.jpg" },
  { title:"Addams Family Values", link:"https://dobby.site/movies/addams-family-values-1993?_rsrc=chrome/newtab&_t=33dp8k&_u=hchh6mwu5k&pl=-1", thumb:"https://edef7.pcloud.com/DLZGO3hUEZQh4gnB7ZWjPfZ7ZYyp3VkZNVZZnHXZZIPh7Z1RZPpZ1XZF94gu8JfLS7FtC17Bkie54GHYoKk/addams2.jpg" },
  { title:"A Simple Favour", link:"https://dobby.site/movies/a-simple-favor-2018?_rsrc=chrome/newtab&_t=7gl997&_u=hchh6mwu5k&pl=-1", thumb:"https://edef5.pcloud.com/DLZol3hUEZiV4gnB7ZWjPfZ7ZF7p3VkZNVZZnHXZZG85Z1FZ9XZiLZiSaI2OvWbG0YnuSbturu0FSxG8Ey/simplefavour.jpg" },

  { title:"Artificial Intelligence", link:"https://dobby.site/movies/ai-artificial-intelligence-2001?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef6.pcloud.com/DLZ5t3hUEZlJ4gnB7ZWjPfZ7Zlyp3VkZNVZZnHXZZfq27Z55ZkkZNRZcdpXzu4TWdhJ9ijXGwsFERAvncSX/ai.jpg" },
  { title:"Alien", link:"https://dobby.site/movies/alien-1979?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef9.pcloud.com/DLZl63hUEZ444gnB7ZWjPfZ7Z97p3VkZNVZZnHXZZtgwZxHZuHZRpZNEpKfieYG9HYNKcj8Nm2cXbcdjwk/alien.jpg" },
  { title:"Alien Romulus", link:"https://dobby.site/movies/alien-romulus-2024?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef6.pcloud.com/DLZ0I3hUEZcS4gnB7ZWjPfZ7ZfXp3VkZNVZZnHXZZKDB7ZQFZCHZeHZ5sBYcqD7kt4kOO7k4uh8rk0d6BV7/romulus.jpg" },
  { title:"Aliens", link:"https://dobby.site/movies/aliens-1986?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef4.pcloud.com/DLZ9N3hUEZa24gnB7ZWjPfZ7Zkkp3VkZNVZZnHXZZhcFVZY0Zy5ZdFZyNwGKXOMRQ4aR3JkUXan0XzPisaX/aliens.jpg" },
  { title:"Alien 3", link:"https://dobby.site/movies/alien3-1992?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef3.pcloud.com/DLZjO3hUEZuQ4gnB7ZWjPfZ7ZN7p3VkZNVZZnHXZZ5vMZfzZDFZ8RZFhwPmQRVys4BlXAuViSBhRk8dtek/alien3.jpg" },
  { title:"Alien 4", link:"https://dobby.site/movies/alien-resurrection-1997?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef3.pcloud.com/DLZuE3hUEZiR4gnB7ZWjPfZ7ZGkp3VkZNVZZnHXZZHHFZMLZHLZ3XZkM0QMSdR2hzfYc2us8Ycr4Iz1N2V/alien4.jpg" },

  { title:"Angels in America", link:"https://dobby.site/shows/angels-in-america?_u=hchh6mwu5k&_t=e14tdp&_rsrc=chrome/newtab", thumb:"https://edef1.pcloud.com/DLZcA3hUEZoB4gnB7ZWjPfZ7ZFVp3VkZNVZZnHXZZ8s67ZEJZhHZXHZmzVn3YCBUymIAVCbazbG7FKhIOOV/angels.jpg" },

  { title:"Batman (1989)", link:"https://dobby.site/movies/batman-1989?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef12.pcloud.com/DLZbI3hUEZRj4gnB7ZWjPfZ7Zq0p3VkZNVZZnHXZZQJYZzzZLzZpFZHt4MrrsB8gj5l8Y2z0DIe5MYTrFX/batman.jpg" },
  { title:"Batman Returns", link:"https://dobby.site/movies/batman-returns-1992?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef3.pcloud.com/DLZ6a3hUEZ6s4gnB7ZWjPfZ7ZR5p3VkZNVZZnHXZZoNk7ZgJZDHZn5Zz6jijvALWjmv6s7U4tw6yfSWq9rX/batman2.jpg" },
  { title:"Batman Forever", link:"https://dobby.site/movies/batman-returns-1992?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef4.pcloud.com/DLZlN3hUEZuW4gnB7ZWjPfZ7Zq5p3VkZNVZZnHXZZc4aZ6FZ45ZDLZFCx0vO2830unIOxIqI3Y4mwhx7xV/batmanforever.jpg" },
  { title:"The Batman (2022)", link:"https://dobby.site/movies/the-batman-2022?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef1.pcloud.com/DLZXN3hUEZGB4gnB7ZWjPfZ7ZRJp3VkZNVZZnHXZZTbzZeLZhJZr0ZasMfyfU0Iszwt8P86PICjhnXgETk/thebatman.jpg" },

  { title:"Barb and Star", link:"https://dobby.site/movies/barb-and-star-go-to-vista-del-mar-2021?_rsrc=chrome/newtab&_t=gcqrcb&_u=hchh6mwu5k&pl=-1", thumb:"https://edef7.pcloud.com/DLZja3hUEZGs4gnB7ZWjPfZ7ZmVp3VkZNVZZnHXZZTy4ZkHZbFZJRZOUoK1gAYg3zuiga6E9HaPbcD8UoV/barb.jpg" },
  { title:"Becky", link:"https://dobby.site/movies/becky-2020?_rsrc=chrome/newtab&_t=h5aqtn&_u=hchh6mwu5k&pl=-1", thumb:"https://edef3.pcloud.com/DLZK33hUEZ7e4gnB7ZWjPfZ7ZCJp3VkZNVZZnHXZZFMbZfJZCFZ3XZTCFH4OqTEe0mykQEBAPiqQC1OjNX/becky.jpg" },
  { title:"The Wrath of Becky", link:"https://dobby.site/movies/the-wrath-of-becky-2023?pl=-1&_u=hchh6mwu5k&_t=h5aqtn&_rsrc=chrome/newtab", thumb:"https://edef11.pcloud.com/DLZQi3hUEZ4g4gnB7ZWjPfZ7ZrJp3VkZNVZZnHXZZKqMZapZo5ZqLZSkLMrWKXRfFAThY4OHFfpXEVobak/becky2.jpg" },

  { title:"Black Swan", link:"https://dobby.site/list/Watch%20Later/55?_rsrc=chrome/newtab&_t=2tq1n7&_u=hchh6mwu5k&pl=-1", thumb:"https://edef1.pcloud.com/DLZ6c3hUEZBt4gnB7ZWjPfZ7ZjFp3VkZNVZZnHXZZcII5ZM0ZQJZ7JZoLjtGhliwmVVFKhcVYaKYbQztTAy/blackswan.jpg" },
  { title:"Chocolat", link:"https://dobby.site/movies/chocolat-2000?pl=-1&_u=hchh6mwu5k&_t=n8hvit&_rsrc=chrome/newtab", thumb:"https://edef3.pcloud.com/DLZ0c3hUEZLK4gnB7ZWjPfZ7ZfHp3VkZNVZZnHXZZ4kxZzJZ5HZg7Z1BMtOtUPPjk5IwDPM24kyuy4o4pk/chocolat.jpg" },
  { title:"Coyote Ugly", link:"https://dobby.site/movies/coyote-ugly-2000?pl=-1&_u=hchh6mwu5k&_t=n8hvit&_rsrc=chrome/newtab", thumb:"https://edef5.pcloud.com/DLZkr3hUEZkx4gnB7ZWjPfZ7ZJzp3VkZNVZZnHXZZj8FZMzZ2HZJXZlQ8mkl6u4tuP2qnDd47AURe59UhV/coyote.jpg" },
  { title:"Clueless", link:"https://dobby.site/movies/clueless-1995?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef5.pcloud.com/DLZaXGhUEZiN4gnB7ZWjPfZ7Znzp3VkZNVZZnHXZZJsm7Z4JZiHZJFZrURMR7Qo46FVAqw5lJd0WhGaj43k/clueless.jpg" },
  { title:"Crawl", link:"https://dobby.site/movies/crawl-2019?pl=-1&_u=hchh6mwu5k&_t=qgkarn&_rsrc=chrome/newtab", thumb:"https://edef6.pcloud.com/DLZJo3hUEZYd4gnB7ZWjPfZ7ZNzp3VkZNVZZnHXZZcrKZXFZG5ZhRZlTyjpUrWdP5T9DDsOhfwxR5BjmnX/crawl.jpg" },
  { title:"Cruel Intentions", link:"https://dobby.site/list/Watch%20Later/26?_rsrc=chrome/newtab&_t=4ar4fj&_u=hchh6mwu5k&pl=-1", thumb:"https://edef2.pcloud.com/DLZBo3hUEZPl4gnB7ZWjPfZ7ZHRp3VkZNVZZnHXZZH9BZXkZwXZSJZyHnEFyQyFEBQw0AKkEfamYaBeUu7/cruel.jpg" },
  { title:"Dark City", link:"https://dobby.site/list/Watch%20Later/27?_rsrc=chrome/newtab&_t=fse6bl&_u=hchh6mwu5k&pl=-1", thumb:"https://edef2.pcloud.com/DLZfyGhUEZxt4gnB7ZWjPfZ7Z9Rp3VkZNVZZnHXZZh0X7ZLRZY5ZxFZ8g0tCHLLzRQRot4oouOorpqJwLCy/darkcity.jpg" },
  { title:"Dawn of the Dead", link:"https://dobby.site/movies/dawn-of-the-dead-2004?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef8.pcloud.com/DLZByGhUEZ8t4gnB7ZWjPfZ7ZARp3VkZNVZZnHXZZLuLZhHZ0pZ25Zid3vYYCHkNQ7SX3AGufzHLuSIXFX/dawn.jpg" },
  { title:"Dennis the Menace", link:"https://dobby.site/movies/dennis-the-menace-1993?_rsrc=chrome/newtab&_t=atjrk6&_u=hchh6mwu5k&pl=-1", thumb:"https://edef8.pcloud.com/DLZd7GhUEZ4O4gnB7ZWjPfZ7ZvLp3VkZNVZZnHXZZqh9Z75Z7RZa5ZKTymcM1XrHFiqXluwnmmD8eENKYX/dennis.jpg" },
  { title:"Dogma", link:"https://dobby.site/movies/dogma-1999?_rsrc=chrome/newtab&_t=kba74h&_u=hchh6mwu5k&pl=-1", thumb:"https://edef7.pcloud.com/DLZEkGhUEZDI4gnB7ZWjPfZ7Zm4p3VkZNVZZnHXZZHlQ7ZrVZRXZQzZ5OuzW333gxRFGuVK4k1iV7E0k6d7/dogma.jpg" },
  { title:"Don't Breathe", link:"https://dobby.site/movies/dont-breathe-2016?pl=-1&_u=hchh6mwu5k&_t=kba74h&_rsrc=chrome/newtab", thumb:"https://edef3.pcloud.com/DLZBJGhUEZdo4gnB7ZWjPfZ7ZP4p3VkZNVZZnHXZZaKakZm5ZULZ3RZ4I1z6PWBtYzHPuoKBl1fqBnnACDV/dontbreathe.jpg" },
  { title:"Don't Breathe 2", link:"https://dobby.site/movies/dont-breathe-2-2021?pl=-1&_u=hchh6mwu5k&_t=3mg952&_rsrc=chrome/newtab", thumb:"https://edef5.pcloud.com/DLZR5GhUEZkr4gnB7ZWjPfZ7Zo4p3VkZNVZZnHXZZMNHkZ2HZdRZ80ZoEQ01rk4OuJd1D8B6v1K7RfwodnX/dontbreathe2.jpg" },
  { title:"Dracula (1992)", link:"https://dobby.site/movies/dracula-1992?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef9.pcloud.com/DLZP5GhUEZRk8gnB7ZWjPfZ7ZY8p3VkZNVZZnHXZZSYT7ZJRZc5ZmkZQo5pb8Mpvib5wHEIwvHmDz93rSTV/dracula.jpg" },
  { title:"Edward Scissorhands", link:"https://dobby.site/movies/edward-scissorhands-1990?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef12.pcloud.com/DLZ9VGhUEZfN4gnB7ZWjPfZ7Zg8p3VkZNVZZnHXZZDX4ZnRZCLZu5Z4i8McucspaYn8C97rM4xjhqU12I7/edward.jpg" },
  { title:"Elvis", link:"https://dobby.site/movies/elvis-2022?_rsrc=chrome/newtab&_t=oo4prj&_u=hchh6mwu5k&pl=-1", thumb:"https://edef12.pcloud.com/DLZ30GhUEZTy8gnB7ZWjPfZ7Zv8p3VkZNVZZnHXZZmWmZa5ZaHZSRZfH7krqydt2fxRBFmc7w0zjXmU9Qy/elvis.jpg" },
  { title:"Fight Club", link:"https://dobby.site/movies/fight-club-1999?pl=-1&_u=hchh6mwu5k&_t=n8hvit&_rsrc=chrome/newtab", thumb:"https://edef4.pcloud.com/DLZe5GhUEZKr4gnB7ZWjPfZ7ZLQp3VkZNVZZnHXZZNbPZx0ZDVZapZVMVlnsuMfQBCFJ1d9FW1nzvaj85k/fight.jpg" },
  { title:"Ghost", link:"https://dobby.site/movies/ghost-1990?_rsrc=chrome/newtab&_t=aed2ap&_u=hchh6mwu5k&pl=-1", thumb:"https://edef7.pcloud.com/DLZ65GhUEZNr4gnB7ZWjPfZ7ZmYp3VkZNVZZnHXZZauLZBJZGHZgkZxRCK9BptFfzm0wGvT2vJYFbLDDDX/ghost.jpg" },
  { title:"Ginger Snaps", link:"https://dobby.site/movies/ghost-1990?_rsrc=chrome/newtab&_t=aed2ap&_u=hchh6mwu5k&pl=-1", thumb:"https://edef7.pcloud.com/DLZjzGhUEZXY8gnB7ZWjPfZ7ZdYp3VkZNVZZnHXZZwbAZXFZdHZHFZO2wuMRv3uaX4FUDGn8bMDkUqUWey/ginger.jpg" },
  { title:"Ginger Snaps 2", link:"https://www.effedupmovies.com/ginger-snaps-2-2004/", thumb:"https://edef12.pcloud.com/DLZ2pGhUEZck8gnB7ZWjPfZ7ZJmp3VkZNVZZnHXZZN0OZBHZfLZX0Z3W4Ds4PlwMjyGGVzaEqThFbPpcJ7/ginger2.jpg" },
  { title:"Ginger Snaps 3", link:"https://www.lookmovie2.to/movies/view/ginger-snaps-back-the-beginning-2004", thumb:"https://edef6.pcloud.com/DLZPLGhUEZHz8gnB7ZWjPfZ7Znmp3VkZNVZZnHXZZ9jt7ZcHZiLZQXZLTy04CUo1c0cz7v2Olyv0FYtqH6V/ginger3.jpg" },
  { title:"Great Expectations", link:"https://dobby.site/movies/great-expectations-1998?pl=-1&_u=hchh6mwu5k&_t=7jq6kp&_rsrc=chrome/newtab", thumb:"https://edef9.pcloud.com/DLZGHGhUEZLR8gnB7ZWjPfZ7Z8bp3VkZNVZZnHXZZedF7Zy5ZLpZkJZrYtpVTHBeOhHYfYS8HxJwYUVg23y/expectations.jpg" },
  { title:"Hail Satan?", link:"https://dobby.site/list/Watch%20Later/37?_rsrc=chrome/newtab&_t=lhbiio&_u=hchh6mwu5k&pl=-1", thumb:"https://edef12.pcloud.com/DLZ4zGhUEZxQ8gnB7ZWjPfZ7Zlbp3VkZNVZZnHXZZG0eZi5ZQFZfJZhNQrkKMrIWuuWjomN5ANpYn1x8NX/hail.jpg" },
  { title:"Hedwig and the Angry Inch", link:"https://dobby.site/movies/hedwig-and-the-angry-inch-2001?_rsrc=chrome/newtab&_t=7r6j4e&_u=hchh6mwu5k&pl=-1", thumb:"https://edef2.pcloud.com/DLZCzGhUEZv48gnB7ZWjPfZ7Zkhp3VkZNVZZnHXZZwe4ZDHZy5Z3HZz2WuXTQ35gyjxbbNmnn6Qycnt7KV/hedwig.jpg" },
  { title:"From Dusk Till Dawn", link:"https://dobby.site/movies/from-dusk-till-dawn-1996?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef10.pcloud.com/DLZsRGhUEZHp8gnB7ZWjPfZ7Zuhp3VkZNVZZnHXZZbYGZ1RZXXZbJZnrgwjQRqbDVkupchPHX9yLqzMrGV/fromdusk.jpg" },
  { title:"From Dusk Till Dawn 3", link:"https://dobby.site/movies/from-dusk-till-dawn-3-the-hangmans-daughter-1999?pl=-1&_t=mr9gmc&_rsrc=chrome/newtab&_u=hchh6mwu5k", thumb:"https://edef2.pcloud.com/DLZG4GhUEZnQ8gnB7ZWjPfZ7ZNSp3VkZNVZZnHXZZxLLZMLZy5ZcJZapYAGCUYtnhuWww1cns4VFbXB45X/fromdusk3.jpg" },

  // ... (list continues exactly as provided) ...
  { title:"I Know What You Did Last Summer", link:"https://dobby.site/movies/i-know-what-you-did-last-summer-1997?_rsrc=chrome/newtab&_t=badn4n&_u=hchh6mwu5k&pl=-1", thumb:"https://edef2.pcloud.com/DLZe8GhUEZnf8gnB7ZWjPfZ7Zpjp3VkZNVZZnHXZZxi5ZsRZqHZbJZ0Jc4Qj05XxupC1zTYdS9bk6cH9OV/iknow.jpg" },
  { title:"I Still Know What You Did Last Summer", link:"https://dobby.site/movies/i-still-know-what-you-did-last-summer-1998?pl=-1&_u=hchh6mwu5k&_t=472cu6&_rsrc=chrome/newtab", thumb:"https://edef11.pcloud.com/DLZ38GhUEZsm8gnB7ZWjPfZ7Z2jp3VkZNVZZnHXZZbizZA8ZbRZrFZm2Bmw8k2aI7h1YsiFtnxazNNdzEX/iknow2.jpg" },
  { title:"Interview with the Vampire", link:"https://dobby.site/movies/interview-with-the-vampire-1994?_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef10.pcloud.com/DLZeQGhUEZ3m8gnB7ZWjPfZ7Zajp3VkZNVZZnHXZZ7gVZ15ZYkZOZ5hWEu3suKKknWfj4bgyxEQOqBkkk/interview.jpg" },
  { title:"Jolt", link:"https://dobby.site/movies/jolt-2021?_rsrc=chrome/newtab&_t=1oaoul&_u=hchh6mwu5k&pl=-1", thumb:"https://edef3.pcloud.com/DLZdSGhUEZ5D8gnB7ZWjPfZ7Zzup3VkZNVZZnHXZZ1CxZg4Zw0ZYVZu5esoT68U8FBER5JDYY0hkPh7MiV/jolt.jpg" },
  { title:"Jurassic Park", link:"https://dobby.site/movies/jurassic-park-1993?_rsrc=chrome/newtab&_t=rvhrmk&_u=hchh6mwu5k&pl=-1", thumb:"https://edef4.pcloud.com/DLZxhGhUEZuD8gnB7ZWjPfZ7ZWup3VkZNVZZnHXZZ4NtZHpZQzZuFZfHaCGrUGQCB6MwNbBR14M7j6jVB7/jp.jpg" },
  { title:"Let Me In", link:"https://dobby.site/movies/let-me-in-2010?pl=-1&_u=hchh6mwu5k&_t=7jq6kp&_rsrc=chrome/newtab", thumb:"https://edef4.pcloud.com/DLZ0bGhUEZku8gnB7ZWjPfZ7Ztup3VkZNVZZnHXZZq9XZNzZE0ZbHZu1lGUyAydPYajKyDL3rKCkhmfh7k/letmein.jpg" },
  { title:"Life After Beth", link:"https://dobby.site/list/Watch%20Later/17?_rsrc=chrome/newtab&_t=d81d2t&_u=hchh6mwu5k&pl=-1", thumb:"https://edef4.pcloud.com/DLZ8bGhUEZUu8gnB7ZWjPfZ7Ztpp3VkZNVZZnHXZZga0Zf4Z8LZipZ6IpkFX8FEguvNbD5pjo5c4OWeQlX/beth.jpg" },
  { title:"Lisa Frankenstein", link:"https://dobby.site/movies/lisa-frankenstein-2024?_rsrc=chrome/newtab&_t=cpdupp&_u=hchh6mwu5k&pl=-1", thumb:"https://edef9.pcloud.com/DLZUbGhUEZ8B8gnB7ZWjPfZ7Zkfp3VkZNVZZnHXZZeC2ZuLZqRZGzZ6YDuu1uSOEXayOV7LfSfgQt2IPMk/lisa.jpg" },
  { title:"Mary Shelley's Frankenstein", link:"https://dobby.site/list/Watch%20Later/77?pl=-1&_u=hchh6mwu5k&_t=cpdupp&_rsrc=chrome/newtab", thumb:"https://edef11.pcloud.com/DLZ0SGhUEZyg8gnB7ZWjPfZ7Z2fp3VkZNVZZnHXZZ8X0ZfRZl7ZoHZhax3XpfQCyLdTgEvWlykL8yxcE4X/frankeinstein.jpg" },
  { title:"Moulin Rouge", link:"https://dobby.site/movies/moulin-rouge-2001?pl=-1&_u=hchh6mwu5k&_t=oo4prj&_rsrc=chrome/newtab", thumb:"https://edef3.pcloud.com/DLZvSGhUEZJ18gnB7ZWjPfZ7Zd2p3VkZNVZZnHXZZ80CZ84Z3XZoHZi9srfwr8hkB8DyaEhcVGfRJJ3JxV/moulin.jpg" },
  { title:"Mrs Doubtfire", link:"https://dobby.site/movies/mrs-doubtfire-1993?_rsrc=chrome/newtab&_t=8t6qkg&_u=hchh6mwu5k&pl=-1", thumb:"https://edef8.pcloud.com/DLZ6jGhUEZ2e8gnB7ZWjPfZ7ZVWp3VkZNVZZnHXZZcK2Z0pZJHZX0ZK71bXexsljbIfk6gm2rnvJH8aOe7/doubtfire.jpg" },
  { title:"Muse: Simulation Theory", link:"https://dobby.site/list/Watch%20Later/3?_u=hchh6mwu5k&_t=31f1bb&_rsrc=chrome/newtab", thumb:"https://edef7.pcloud.com/DLZ0uGhUEZCn8gnB7ZWjPfZ7ZjWp3VkZNVZZnHXZZHJm7ZvRZSJZuFZyLeMgsJbG7J3dNNtbUBsUzsOHYxV/muse.jpg" },
  { title:"Natural Born Killers", link:"https://dobby.site/movies/natural-born-killers-1994?_rsrc=chrome/newtab&_t=n6iepe&_u=hchh6mwu5k&pl=-1", thumb:"https://edef11.pcloud.com/DLZifGhUEZfg8gnB7ZWjPfZ7ZwWp3VkZNVZZnHXZZuxOZKJZeJZ7VZxp37z29XG1HFgGgLhHPEVjpwWPKk/naturalbornkillers.jpg" },
  { title:"No One Will Save You", link:"https://dobby.site/movies/no-one-will-save-you-2023?pl=-1&_u=hchh6mwu5k&_t=qgkarn&_rsrc=chrome/newtab", thumb:"https://edef6.pcloud.com/DLZQWGhUEZ4K8gnB7ZWjPfZ7Zysp3VkZNVZZnHXZZyWM7ZtLZfHZ2pZ5pgkhrS9dbXgPbCcVQj4xYOXSlby/noone.jpg" },
  { title:"Old People", link:"https://dobby.site/movies/old-people-2022?_u=hchh6mwu5k&_t=qgkarn&_rsrc=chrome/newtab", thumb:"https://edef8.pcloud.com/DLZ6fGhUEZ8P8gnB7ZWjPfZ7ZSsp3VkZNVZZnHXZZw8gZqpZcJZLJZlaHHy0rnJfj3NVUN9riYN7fXDdLy/oldpeople.jpg" },
  { title:"Only Lovers Left Alive", link:"https://dobby.site/movies/only-lovers-left-alive-2013?pl=-1&_u=hchh6mwu5k&_t=muet4h&_rsrc=chrome/newtab", thumb:"https://edef11.pcloud.com/DLZTBGhUEZPg8gnB7ZWjPfZ7Z6sp3VkZNVZZnHXZZ6uBZWFZR5Z7VZSSeFBrc8eURBs5ByQMXVIV5O64vV/lovers.jpg" },
  { title:"The Open House", link:"https://dobby.site/movies/the-open-house-2018?_u=hchh6mwu5k&_t=2d04qs&_rsrc=chrome/newtab", thumb:"https://edef9.pcloud.com/DLZSBGhUEZgT8gnB7ZWjPfZ7ZJDp3VkZNVZZnHXZZ4M4ZiVZqFZHVZ2NmEytjWjojHJ1mHcdbBlf2Ij9I7/openhouse.jpg" },
  { title:"Pan's Labyrinth (HU)", link:"https://videa.hu/videok/film-animacio/a-faun-labirintusa-2006-fantasztikus-mexikoi-spanyol-amerikai-u5Gi4DbSGJeU1MmA", thumb:"https://edef11.pcloud.com/DLZYWGhUEZKx8gnB7ZWjPfZ7ZaDp3VkZNVZZnHXZZyySZCLZ25ZjLZ5xLgqnM5YMYe21iC1t8r0HJ09LpV/pans.jpg" },
  { title:"Paris Is Burning", link:"https://youtu.be/nI7EhpY2yaA?si=MayNBLHYYmjgSc90", thumb:"https://edef3.pcloud.com/DLZiWGhUEZ8d8gnB7ZWjPfZ7ZF1p3VkZNVZZnHXZZq6RZ60ZQFZfpZoDbYPfiSR1SeMovNVgIAubF6yvKX/paris.jpg" },
  { title:"Passengers", link:"https://dobby.site/movies/passengers-2016?_rsrc=chrome/newtab&_t=9gvj71&_u=hchh6mwu5k&pl=-1", thumb:"https://edef2.pcloud.com/DLZYsGhUEZnd8gnB7ZWjPfZ7ZW1p3VkZNVZZnHXZZNrWZMHZBRZsJZkqWS9cYG5ofK2oMHrNDsMzW8Wv9V/passangers.jpg" },
  { title:"Perfume", link:"https://dobby.site/movies/perfume-the-story-of-a-murderer-2006?pl=-1&_u=hchh6mwu5k&_t=3mg952&_rsrc=chrome/newtab", thumb:"https://edef3.pcloud.com/DLZvWGhUEZGK8gnB7ZWjPfZ7Zd1p3VkZNVZZnHXZZ93JZxzZlpZiLZUYbHJgLtFEBb3A1rxwnwPYnumUDX/perfume.jpg" },
  { title:"Poor Things", link:"https://dobby.site/movies/poor-things-2023?_rsrc=chrome/newtab&_t=r1f1a0&_u=hchh6mwu5k&pl=-1", thumb:"https://edef8.pcloud.com/DLZpDGhUEZaq8gnB7ZWjPfZ7Z7ep3VkZNVZZnHXZZhWmZU0ZlJZ25Z6AEdny4OdIjYjBaSM4LcVbexUKzk/poorthings.jpg" },
  { title:"Practical Magic", link:"https://dobby.site/movies/practical-magic-1998?_rsrc=chrome/newtab&_t=i0ndab&_u=hchh6mwu5k&pl=-1", thumb:"https://edef8.pcloud.com/DLZhMGhUEZbG8gnB7ZWjPfZ7Zjep3VkZNVZZnHXZZ1TqZppZ6zZAXZ5PJ5lnt7fIpYP8QJn2GoSVgR7DYk/practical.jpg" },
  { title:"Pretty Woman", link:"https://dobby.site/movies/pretty-woman-1990?_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef2.pcloud.com/DLZ0MGhUEZ738gnB7ZWjPfZ7Zwep3VkZNVZZnHXZZnS37Z80ZNRZeVZYh1FtBkiCW71UQG61Q5TtmUc8507/prettywoman.jpg" },
  { title:"PS Burn This Letter", link:"https://dobby.site/list/Watch%20Later/23?pl=-1&_u=hchh6mwu5k&_t=31f1bb&_rsrc=chrome/newtab", thumb:"https://edef11.pcloud.com/DLZT1GhUEZtE8gnB7ZWjPfZ7Zrep3VkZNVZZnHXZZym4Z4LZdkZ9FZ1ToLQG4itiLaez3INQtqij7kp01V/ps.jpg" },
  { title:"Romeo + Juliet", link:"https://dobby.site/movies/romeo-plus-juliet-1996?pl=-1&_u=hchh6mwu5k&_t=oo4prj&_rsrc=chrome/newtab", thumb:"https://edef10.pcloud.com/DLZBnGhUEZBN8gnB7ZWjPfZ7Z6np3VkZNVZZnHXZZLBQZmJZyQZipZiCCD2I3KCHkJxvTBBjPf541dNHmk/romeo.jpg" },
  { title:"Romy and Michele", link:"https://dobby.site/movies/romy-and-micheles-high-school-reunion-1997?_rsrc=chrome/newtab&_t=6elmfm&_u=hchh6mwu5k&pl=-1", thumb:"https://edef1.pcloud.com/DLZnMGhUEZxv8gnB7ZWjPfZ7ZX9p3VkZNVZZnHXZZgaxZT0Z97ZO7Z1ynoRaVncqYr2kk9djBp2HFyaFJX/romy.jpg" },
  { title:"Queen of the Damned", link:"https://dobby.site/movies/queen-of-the-damned-2002?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef6.pcloud.com/DLZPYGhUEZgb8gnB7ZWjPfZ7Ze9p3VkZNVZZnHXZZ7meZGzZsJZw4Zq1Hl9bfW9vXhPu2QOa5psyLRkLdk/qotd.jpg" },
  { title:"Sin City", link:"https://dobby.site/list/Watch%20Later/49?_rsrc=chrome/newtab&_t=60t0c8&_u=hchh6mwu5k&pl=-1", thumb:"https://edef6.pcloud.com/DLZ4eGhUEZeI8gnB7ZWjPfZ7ZI9p3VkZNVZZnHXZZ3rgZvzZVpZ6XZEk6O13FWsCS6OOKMvO4eRp973ERX/sin.jpg" },
  { title:"Sin City: A Dame to Kill For", link:"https://dobby.site/list/Watch%20Later/51?pl=-1&_u=hchh6mwu5k&_t=31f1bb&_rsrc=chrome/newtab", thumb:"https://edef12.pcloud.com/DLZHxGhUEZeJQgnB7ZWjPfZ7ZFMp3VkZNVZZnHXZZoea7Z9zZhkZzRZVjdWNXAXOU0ImKaYEhK0WFQUwEsX/sin2.jpg" },

  { title:"Sister Act", link:"https://dobby.site/movies/sister-act-1992?pl=-1&_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", thumb:"https://edef1.pcloud.com/DLZmJADUEZua6GnB7ZWjPfZ7ZCPp3VkZNVZZnHXZZ9dFZbJZfFZyLZ3U8n4uznPM7spjif1tWAMHdIb7OV/sister1.jpg" },
  { title:"Sister Act 2", link:"https://dobby.site/movies/sister-act-2-back-in-the-habit-1993?pl=-1&_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", thumb:"https://edef8.pcloud.com/DLZqJADUEZM36GnB7ZWjPfZ7Z4Pp3VkZNVZZnHXZZeLpZrRZU0ZJ4ZQ75PGN1duFbBdHKGp07q7zhVt65V/sister2.jpeg" },

  { title:"Sweeney Todd", link:"https://dobby.site/movies/sweeney-todd-the-demon-barber-of-fleet-street-2007?_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef3.pcloud.com/DLZ8CGhUEZukQgnB7ZWjPfZ7ZyCp3VkZNVZZnHXZZc3OZMJZfJZj4ZvPfIWjasDThwnjwi4Wlp9VLlVq47/sweeney.jpg" },
  { title:"The Best Exotic Marigold Hotel", link:"https://dobby.site/movies/the-best-exotic-marigold-hotel-2011?pl=-1&_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", thumb:"https://edef2.pcloud.com/DLZnOu1UEZsHkinB7ZWjPfZ7ZDlp3VkZNVZZnHXZZ4eMZDLZ5LZxzZYgQ5zVSoAcXM9mAC0k1zQpivu1vy/marigold.jpeg" },
  { title:"The Second Best Exotic Marigold Hotel", link:"https://dobby.site/movies/the-second-best-exotic-marigold-hotel-2015?pl=-1&_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", thumb:"https://edef4.pcloud.com/DLZ5Uu1UEZn4kinB7ZWjPfZ7Ztlp3VkZNVZZnHXZZChq7Zg4ZzVZKHZmFhVquT0iUHc33lGQL2IVuBzMy2V/marigold2.jpg" },

  { title:"The Cell", link:"https://dobby.site/movies/the-cell-2000?pl=-1&_u=hchh6mwu5k&_t=2d04qs&_rsrc=chrome/newtab", thumb:"https://edef10.pcloud.com/DLZUxGhUEZwJQgnB7ZWjPfZ7Z5dp3VkZNVZZnHXZZ0MR7Z2HZ7HZXFZKryHXKwRuYLRnL8fmx4XTztKd0sy/cell.jpg" },
  { title:"The Craft", link:"https://dobby.site/movies/the-craft-1996?pl=-1&_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", thumb:"https://edef7.pcloud.com/DLZkEc1UEZBBYrnB7ZWjPfZ7ZuEp3VkZNVZZnHXZZpCA0ZvLZrHZJ0ZrSqCRriBTnJrRHuMvK4mu8jawX6V/craft.jpeg" },
  { title:"The Craft: Legacy", link:"https://dobby.site/movies/the-craft-legacy-2020?_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", thumb:"https://edef3.pcloud.com/DLZ4tc1UEZ3hYrnB7ZWjPfZ7Zl6p3VkZ3VZZnHXZZSvl7ZFFZTRZaHZinCDrph6hFBrjbL5xeRhSRAVtiVV/craft.png" },

  { title:"The Crow", link:"https://dobby.site/movies/the-crow-1994?_u=hchh6mwu5k&_t=2d04qs&_rsrc=chrome/newtab", thumb:"https://edef5.pcloud.com/DLZKhIeUEZ85XonB7ZWjPfZ7ZL3p3VkZNVZZnHXZZyvQZizZMJZz8ZuNXFSYY3THpIEOyl7PiEzVQ1cC3y/thecrow.jpg" },
  { title:"The Crow: City of Angels", link:"https://www.lookmovie2.to/movies/play/1689756707-the-crow-city-of-angels-1996", thumb:"https://edef1.pcloud.com/DLZmuIeUEZAYXonB7ZWjPfZ7Zn3p3VkZNVZZnHXZZzt8ZD4ZHpZbzZGTUW4PUaKcfsHlL0tuVEEuUquh2V/thecrow2.jpeg" },
  { title:"The Crow: Salvation", link:"https://www.lookmovie27.to/movies/view/0132910-the-crow-salvation-2000", thumb:"https://edef4.pcloud.com/DLZkuIeUEZ38XonB7ZWjPfZ7ZXGp3VkZNVZZnHXZZmD8ZcFZDzZupZ36xDvlRQbVLJMtm9RPGKnLMXNtTX/thecrow3.jpg" },

  { title:"The House Bunny", link:"https://dobby.site/movies/the-house-bunny-2008?pl=-1&_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef9.pcloud.com/DLZSwGhUEZYpQgnB7ZWjPfZ7ZgGp3VkZNVZZnHXZZfA2kZrHZSHZSzZ4WvsjLeG7KH7raxHG3rGCbDhE3Yk/bunny.jpg" },

  { title:"The Little Mermaid (1989)", link:"https://dobby.site/movies/the-little-mermaid-1989?_rsrc=chrome/newtab&_t=ev4ijt&_u=hchh6mwu5k&pl=-1", thumb:"" }, // will fall back to assets/thumb/the-little-mermaid-1989.jpg

  { title:"The Lost Boys", link:"https://dobby.site/movies/the-lost-boys-1987?pl=-1&_u=hchh6mwu5k&_t=muet4h&_rsrc=chrome/newtab", thumb:"https://edef1.pcloud.com/DLZoCGhUEZgVQgnB7ZWjPfZ7Z7vp3VkZNVZZnHXZZV2NZQ8ZzHZ1JZOJFKMg44FISsTRj5rKSJNybUXkmV/mermaid.jpg" },

  { title:"The Others", link:"https://dobby.site/movies/the-others-2001?pl=-1&_u=hchh6mwu5k&_t=2d04qs&_rsrc=chrome/newtab", thumb:"https://edef6.pcloud.com/DLZBwGhUEZtpQgnB7ZWjPfZ7ZNvp3VkZNVZZnHXZZQx9ZNzZPVZp0ZUwJbqcBLTEVpR3sYnG5Ir8DNmXqy/others.jpg" },
  { title:"The Greatest Showman", link:"https://dobby.site/movies/the-greatest-showman-2017?_rsrc=chrome/newtab&_t=hna2u0&_u=hchh6mwu5k&pl=-1", thumb:"https://edef7.pcloud.com/DLZMQnnUEZwQWy9B7ZWjPfZ7ZScp3VkZNVZZnHXZZJNpZk5Z37ZGFZzmzYOj5s4F8zcc6CJUsR6XJoxdgk/showman.jpeg" },

  { title:"The Mask", link:"https://dobby.site/movies/the-mask-1994?pl=-1&_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", thumb:"" },
  { title:"There's Something About Mary", link:"https://dobby.site/movies/theres-something-about-mary-1998?pl=-1&_u=hchh6mwu5k&_t=763rjh&_rsrc=chrome/newtab", thumb:"" },

  { title:"The Phantom of the Opera (2004)", link:"https://dobby.site/movies/the-phantom-of-the-opera-2004?_u=hchh6mwu5k&_t=ia79jt&_rsrc=chrome/newtab", thumb:"https://edef3.pcloud.com/DLZ8NAnUEZGJV79B7ZWjPfZ7ZvyH3VkZNVZZnHXZZXd6ZXkZxJZsJZTt9cXk3XhM56L7SPAhTWy4wK8LE7/phantom.jpg" },
  { title:"The Open House (duplicate link)", link:"https://dobby.site/movies/the-open-house-2018?pl=-1&_u=hchh6mwu5k&_t=ia79jt&_rsrc=chrome/newtab", thumb:"https://edef9.pcloud.com/DLZSBGhUEZgT8gnB7ZWjPfZ7ZC7H3VkZNVZZnHXZZ4M4ZHVZqFZiVZpLfSdFxx2sky4qgIfuFeGhjSs5Qk/openhouse.jpg" },
  { title:"The Watchers (2024)", link:"https://dobby.site/movies/the-watchers-2024?pl=-1&_u=hchh6mwu5k&_t=qgkarn&_rsrc=chrome/newtab", thumb:"https://edef5.pcloud.com/DLZ1KGhUEZ7HQgnB7ZWjPfZ7Z5kH3VkZNVZZnHXZZkiCZ30ZD4ZBFZe6MwD2nOQipBjOovoShMASgxVBKk/watchers.jpg" },
  { title:"Under the Mountain", link:"https://dobby.site/movies/under-the-mountain-2009?_rsrc=chrome/newtab&_t=6a5lm2&_u=hchh6mwu5k&pl=-1", thumb:"https://edef11.pcloud.com/DLZOlGhUEZvLQgnB7ZWjPfZ7ZnkH3VkZNVZZnHXZZioaZyzZQpZO7Zy8Ab4yCqY67bJHPgG6jGiHg6CEMy/mountain.jpg" },
  { title:"Urban Legend", link:"https://dobby.site/list/Watch%20Later/83?_rsrc=chrome/newtab&_t=907cb9&_u=hchh6mwu5k&pl=-1", thumb:"https://edef4.pcloud.com/DLZWlGhUEZ5LQgnB7ZWjPfZ7ZAkH3VkZNVZZnHXZZhrbZz8ZOkZh5ZqG1IBUQGPUkwl2PVBi1SBLgdDsA7/urbanlegend.jpg" },
  { title:"Warm Bodies", link:"https://dobby.site/movies/warm-bodies-2013?_u=hchh6mwu5k&_t=bq0t40&_rsrc=chrome/newtab", thumb:"https://edef8.pcloud.com/DLZdlGhUEZp8QgnB7ZWjPfZ7ZFXH3VkZNVZZnHXZZMIJZJ0Za5Z15ZQxGREXP9aSzVLlDFRYwWqjMYI3EV/warmbodies.jpg" },
  { title:"Wicked Little Letters", link:"https://dobby.site/movies/wicked-little-letters-2024?_rsrc=chrome/newtab&_t=j7ij2s&_u=hchh6mwu5k&pl=-1", thumb:"https://edef10.pcloud.com/DLZ2dGhUEZe8QgnB7ZWjPfZ7ZeXH3VkZNVZZnHXZZJ9gZ2pZiHZakZtXhdGOaSGtjamqxciKT0b7EiygQV/wickedlittle.jpg" },
  { title:"Wildling", link:"https://dobby.site/movies/wildling-2018?_u=hchh6mwu5k&_t=2d04qs&_rsrc=chrome/newtab", thumb:"https://edef4.pcloud.com/DLZw6j9UEZi70k9B7ZWjPfZ7ZH0H3VkZNVZZnHXZZ0AiZgVZbHZFzZQVUhvWlRJkBo6ICXtoLfm58KGggy/wildling.jpeg" },
];

// Render
const grid = document.getElementById('moviesGrid');
grid.innerHTML = '';
items.forEach(item => grid.appendChild(makeCard(item)));
