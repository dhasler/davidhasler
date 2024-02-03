<template>
    <header>
        <a id="skipcontent" href="#main">Skip to content</a>
        <nav>
            <ul>
                <li v-for="(item, i) in menuItems" :key="i" v-bind="item.attrs">
                    <NuxtLink :to="item.href">{{ item.name }}</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
const menuItems = [
    {
        name: 'Resume',
        href: '/resume'
    },
    {
        name: 'David Hasler',
        href: '/',
        attrs: {
            class:'main'
        }
    },
    {
        name: 'My Day to Day',
        href: '/day-to-day'
    }
]
</script>

<style scoped lang="scss">
    header {
        height: 60px;
        position: relative;
    }
    
    nav {
        height: 100%;
    }

    #skipcontent {
        background: #fff;
        color: #2d2d2d;
        font-size: 1.2rem;
        left: -10000px;
        min-width: 12em;
        padding: 1.5em 1em;
        position: absolute;
        text-align: center;
        top: 0;

        &:focus {
            left: 0;
        }
    }

    ul {
        align-items: center;
        display: flex;
        height: 100%;
        justify-content: center;
    }

    li {
        margin: 0 15px;
    }

    a {
        color: $text-base;
        font-size: 2.4rem;
        padding: 2rem;
        position: relative;
        text-decoration: none;

        &::after {
            transition: all 0.5s;
            background: $text-base;
            content: '';
            display: block;
            height: 1px;
            left: 50%;
            opacity: 0;
            position: absolute;
            right: 50%;
            top: 70%;
        }

        &:hover::after{
            left: 14px;
            opacity: 1;
            right: 14px;
        }
    }
</style>