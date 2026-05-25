<script>
  import ReadPageContainer from '../ReadPageContainer.svelte'
  import ArticleList from '../ArticleList.svelte'
  import {enqueueDocument} from '../read-backend-operations'
</script>

<ReadPageContainer>
  <ArticleList leftAction={enqueueDocument} />
</ReadPageContainer>
