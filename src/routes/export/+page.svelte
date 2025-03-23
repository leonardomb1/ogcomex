<script>
  import { content } from "$lib/services"
  import ServicePage from "../../components/ui/ServicePage.svelte"

  let usedContent = content.find(
    (item) => item.title == "Serviços de Exportação",
  )
</script>

<ServicePage content={usedContent} />
