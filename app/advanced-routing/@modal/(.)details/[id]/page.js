import AdvancedRouteModal from "@components/AdvancedRouteModal";

export default function InterceptedDetailPage({ params }) {
  return <AdvancedRouteModal id={params.id} />;
}
