<script>
  import { content } from "$lib/services"
  import ServicePage from "../../components/ui/ServicePage.svelte"

  let usedContent = content.find(
    (item) => item.title == "Conformidade Regulatória",
  )
</script>

<ServicePage content={usedContent} />
