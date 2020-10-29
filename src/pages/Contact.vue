<template>
  <Layout>
    <div>
      <h1 class="mb-1">
        {{ $page.allContentfulContact.edges[0].node.heading }}
      </h1>
      <hr class="mb-4" />
      <p>
        {{ $page.allContentfulContact.edges[0].node.paragraph }}
      </p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact"
  }
};
</script>

<page-query>
query {
    allContentfulContact(sortBy: "DESC", limit: 1) {
    edges {
      node {
        heading
        paragraph
      }
    }
  }
}

</page-query>
