<template>
  <base-card>
    <base-button
      :mode="storedResButtonMode"
      @click="setSelectedTab('stored-resources')"
    >
      Stored Resources
    </base-button>
    <base-button
    :mode="addResButtonMode"
    @click="setSelectedTab('add-resource')"
    >
      Add Resource
    </base-button>
  </base-card>

  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources';
import AddResource from './AddResource';

export default {
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 1,
          title: 'Official guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: 2,
          title: 'Google',
          description: 'Of course',
          link: 'https://google.com'
        }
      ]
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource
    }
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat'
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat'
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    },
    addResource(title, description, url) {
      const newResourse = {
        id: new Date().toISOString(),
        title,
        description,
        url
      }

      this.storedResources.unshift(newResourse);
      this.selectedTab = 'stored-resources';
    },

    removeResource(resId) {
      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    }
  }
}
</script>